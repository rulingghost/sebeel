import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { defaultContent } from '../data/defaultContent';

const ContentContext = createContext(null);

// Deep merge helper to ensure fallback fields exist if schema grows
const deepMerge = (target, source) => {
  if (!source) return target;
  const output = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && !Array.isArray(source[key]) && key in target) {
      output[key] = deepMerge(target[key], source[key]);
    } else {
      output[key] = source[key];
    }
  }
  return output;
};

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(() => {
    try {
      const cached = localStorage.getItem('seebel_site_content');
      if (cached) {
        const parsed = JSON.parse(cached);
        return deepMerge(defaultContent, parsed);
      }
    } catch {
      // ignore
    }
    return defaultContent;
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null); // { type: 'success' | 'error', message: string }
  const [dataSource, setDataSource] = useState('local'); // 'kv' | 'cache' | 'default'

  // Fetch content from Vercel KV via API
  const fetchContent = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/get-content');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      
      if (data && data.success && data.data) {
        const merged = deepMerge(defaultContent, data.data);
        setContent(merged);
        setDataSource(data.source || 'kv');
        try {
          localStorage.setItem('seebel_site_content', JSON.stringify(merged));
        } catch {
          // ignore
        }
      } else {
        setDataSource('default');
      }
    } catch (err) {
      console.warn('Could not fetch from /api/get-content, using fallback/cached content:', err.message);
      setDataSource('cache');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  // Save content to Vercel KV
  const saveContent = async (newContent) => {
    setIsSaving(true);
    setSaveStatus(null);
    try {
      const res = await fetch('/api/save-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newContent),
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Kaydetme başarısız oldu.');
      }

      setContent(newContent);
      try {
        localStorage.setItem('seebel_site_content', JSON.stringify(newContent));
      } catch {
        // ignore
      }

      setSaveStatus({
        type: 'success',
        message: result.message || 'Tüm değişiklikler Vercel KV üzerine başarıyla kaydedildi!'
      });

      setTimeout(() => {
        setSaveStatus(null);
      }, 4000);

      return { success: true };
    } catch (err) {
      console.error('Save failed:', err);
      setSaveStatus({
        type: 'error',
        message: err.message || 'Bir hata oluştu. Lütfen tekrar deneyin.'
      });
      return { success: false, error: err.message };
    } finally {
      setIsSaving(false);
    }
  };

  // Upload image to Vercel Blob
  const uploadImage = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async (e) => {
        try {
          const base64 = e.target.result;
          const res = await fetch('/api/upload-image', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              filename: file.name,
              base64: base64,
              contentType: file.type
            })
          });

          const data = await res.json();
          if (!res.ok || !data.success) {
            throw new Error(data.error || 'Görsel yüklenemedi');
          }

          resolve(data.url);
        } catch (error) {
          console.error('Upload image error:', error);
          reject(error);
        }
      };
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  };

  // Reset to default content
  const resetToDefaults = async () => {
    if (window.confirm('Tüm içerikleri varsayılan ayarlara sıfırlamak istediğinize emin misiniz?')) {
      await saveContent(defaultContent);
    }
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        setContent,
        saveContent,
        uploadImage,
        resetToDefaults,
        fetchContent,
        isLoading,
        isSaving,
        saveStatus,
        dataSource
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
