import React, { useState, useRef } from 'react';
import { Upload, Link as LinkIcon, X, Check, Loader2 } from 'lucide-react';
import { useContent } from '../../context/ContentContext';

const ImageUploadField = ({ label, value, onChange, placeholder = 'Görsel URL veya dosya yükleyin...', helperText }) => {
  const { uploadImage } = useContent();
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState('both'); // 'upload' | 'url' | 'both'
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Lütfen geçerli bir görsel dosyası seçin (PNG, JPG, SVG, WebP, GIF)');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError('Görsel boyutu 10MB\'tan küçük olmalıdır.');
      return;
    }

    setError(null);
    setIsUploading(true);

    try {
      const url = await uploadImage(file);
      onChange(url);
    } catch (err) {
      console.error('File upload error:', err);
      setError(err.message || 'Görsel Vercel Blob\'a yüklenemedi.');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemove = () => {
    onChange('');
    setError(null);
  };

  return (
    <div className="admin-field-group">
      {label && <label className="admin-label">{label}</label>}
      {helperText && <p className="admin-helper-text">{helperText}</p>}

      <div className="image-uploader-container">
        {/* URL Input & Actions */}
        <div className="image-input-row">
          <div className="input-with-icon">
            <LinkIcon size={16} className="input-icon" />
            <input
              type="text"
              value={value || ''}
              onChange={(e) => {
                onChange(e.target.value);
                setError(null);
              }}
              placeholder={placeholder}
              className="admin-input"
            />
            {value && (
              <button
                type="button"
                onClick={handleRemove}
                className="input-clear-btn"
                title="Görseli Kaldır"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: 'none' }}
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="btn-upload"
          >
            {isUploading ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Yükleniyor...
              </>
            ) : (
              <>
                <Upload size={16} /> Dosya Seç (Blob)
              </>
            )}
          </button>
        </div>

        {/* Error message */}
        {error && <p className="admin-error-text">{error}</p>}

        {/* Live Preview */}
        {value && (
          <div className="image-preview-card">
            <div className="image-preview-wrapper">
              <img
                src={value}
                alt="Önizleme"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
                className="image-preview-img"
              />
            </div>
            <div className="image-preview-info">
              <span className="image-preview-tag">
                <Check size={12} /> Görsel Aktif
              </span>
              <span className="image-preview-url" title={value}>
                {value.length > 50 ? value.substring(0, 47) + '...' : value}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploadField;
