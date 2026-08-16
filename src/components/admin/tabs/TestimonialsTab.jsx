import React from 'react';
import { MessageSquareQuote, Plus, Trash2, ChevronUp, ChevronDown, Star } from 'lucide-react';
import ImageUploadField from '../ImageUploadField';

const TestimonialsTab = ({ content, onChange }) => {
  const testimonials = content.testimonials || {};
  const items = testimonials.items || [];

  const updateTestimonials = (newTestimonials) => {
    onChange({
      ...content,
      testimonials: newTestimonials
    });
  };

  const handleHeaderChange = (field, value) => {
    updateTestimonials({
      ...testimonials,
      [field]: value
    });
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      [field]: value
    };
    updateTestimonials({
      ...testimonials,
      items: newItems
    });
  };

  const addItem = () => {
    const newItem = {
      id: `test-${Date.now()}`,
      name: 'Yeni Müşteri',
      role: 'CEO / Kurucu',
      avatar: 'https://i.pravatar.cc/150?img=40',
      rating: 5,
      comment: 'Seebel ekibiyle çalışmak harika bir deneyimdi.'
    };
    updateTestimonials({
      ...testimonials,
      items: [...items, newItem]
    });
  };

  const removeItem = (index) => {
    updateTestimonials({
      ...testimonials,
      items: items.filter((_, i) => i !== index)
    });
  };

  const moveItem = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= items.length) return;
    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[newIndex];
    newItems[newIndex] = temp;
    updateTestimonials({
      ...testimonials,
      items: newItems
    });
  };

  return (
    <div className="admin-tab-content">
      <div className="tab-header">
        <div className="tab-icon-box">
          <MessageSquareQuote size={22} />
        </div>
        <div>
          <h2>Müşteri Yorumları & Referanslar</h2>
          <p>Ana sayfada gösterilen müşteri deneyimlerini, puanları ve referans kartlarını yönetin.</p>
        </div>
      </div>

      {/* Header Info */}
      <div className="admin-card">
        <h3 className="card-title">Bölüm Başlığı</h3>
        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Üst Rozet (Badge)</label>
            <input
              type="text"
              value={testimonials.badge || ''}
              onChange={(e) => handleHeaderChange('badge', e.target.value)}
              className="admin-input"
              placeholder="Referans Görüşleri"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Ana Başlık</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                value={testimonials.title || ''}
                onChange={(e) => handleHeaderChange('title', e.target.value)}
                className="admin-input"
                placeholder="Müşterilerimiz"
              />
              <input
                type="text"
                value={testimonials.titleHighlight || ''}
                onChange={(e) => handleHeaderChange('titleHighlight', e.target.value)}
                className="admin-input"
                placeholder="Ne Diyor?"
              />
            </div>
          </div>
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Alt Açıklama</label>
          <textarea
            rows={2}
            value={testimonials.subtitle || ''}
            onChange={(e) => handleHeaderChange('subtitle', e.target.value)}
            className="admin-input"
          />
        </div>
      </div>

      {/* Reviews List */}
      <div className="admin-card">
        <div className="card-header-flex">
          <div>
            <h3 className="card-title">Yorum Kartları ({items.length})</h3>
            <p className="admin-helper-text">Kartların sırasını yukarı/aşağı butonları ile değiştirebilirsiniz.</p>
          </div>
          <button type="button" onClick={addItem} className="btn-secondary">
            <Plus size={16} /> Yeni Yorum Ekle
          </button>
        </div>

        <div className="items-list">
          {items.map((item, index) => (
            <div key={item.id || index} className="service-editor-card glass-panel">
              <div className="service-editor-header">
                <div className="service-badge-info">
                  <div className="item-order-controls">
                    <button
                      type="button"
                      onClick={() => moveItem(index, -1)}
                      disabled={index === 0}
                      className="btn-icon"
                      title="Yukarı Taşı"
                    >
                      <ChevronUp size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveItem(index, 1)}
                      disabled={index === items.length - 1}
                      className="btn-icon"
                      title="Aşağı Taşı"
                    >
                      <ChevronDown size={16} />
                    </button>
                  </div>
                  <span className="slide-title-preview">{item.name || 'İsimsiz Müşteri'}</span>
                  <span className="order-number">({item.role || 'Unvan Yok'})</span>
                </div>

                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="btn-delete"
                  title="Yorumu Sil"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="form-grid-2">
                <div className="admin-field-group">
                  <label className="admin-label">Müşteri Adı Soyadı</label>
                  <input
                    type="text"
                    value={item.name || ''}
                    onChange={(e) => updateItem(index, 'name', e.target.value)}
                    className="admin-input"
                  />
                </div>
                <div className="admin-field-group">
                  <label className="admin-label">Pozisyon / Şirket</label>
                  <input
                    type="text"
                    value={item.role || ''}
                    onChange={(e) => updateItem(index, 'role', e.target.value)}
                    className="admin-input"
                  />
                </div>
              </div>

              <div className="admin-field-group">
                <label className="admin-label">Puan (1 - 5 Yıldız)</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={item.rating || 5}
                  onChange={(e) => updateItem(index, 'rating', parseInt(e.target.value) || 5)}
                  className="admin-input-mini"
                  style={{ width: '120px' }}
                />
              </div>

              <div className="admin-field-group">
                <label className="admin-label">Müşteri Yorumu / Alıntı</label>
                <textarea
                  rows={3}
                  value={item.comment || ''}
                  onChange={(e) => updateItem(index, 'comment', e.target.value)}
                  className="admin-input"
                  placeholder="Görüş metni..."
                />
              </div>

              <ImageUploadField
                label="Müşteri Profil Fotoğrafı (Avatar)"
                value={item.avatar || ''}
                onChange={(url) => updateItem(index, 'avatar', url)}
                placeholder="Avatar URL veya yükleyin..."
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsTab;
