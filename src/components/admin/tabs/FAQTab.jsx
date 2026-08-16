import React from 'react';
import { HelpCircle, Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

const FAQTab = ({ content, onChange }) => {
  const faq = content.faq || {};
  const items = faq.items || [];

  const updateFAQ = (newFAQ) => {
    onChange({
      ...content,
      faq: newFAQ
    });
  };

  const handleHeaderChange = (field, value) => {
    updateFAQ({
      ...faq,
      [field]: value
    });
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      [field]: value
    };
    updateFAQ({
      ...faq,
      items: newItems
    });
  };

  const addItem = () => {
    const newItem = {
      id: `faq-${Date.now()}`,
      question: 'Yeni Soru Başlığı?',
      answer: 'Cevap metnini buraya detaylı olarak yazın.'
    };
    updateFAQ({
      ...faq,
      items: [...items, newItem]
    });
  };

  const removeItem = (index) => {
    updateFAQ({
      ...faq,
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
    updateFAQ({
      ...faq,
      items: newItems
    });
  };

  return (
    <div className="admin-tab-content">
      <div className="tab-header">
        <div className="tab-icon-box">
          <HelpCircle size={22} />
        </div>
        <div>
          <h2>Sıkça Sorulan Sorular (SSS) Yönetimi</h2>
          <p>Ana sayfada yer alan SSS bölümü başlıklarını ve soru-cevap maddelerini yönetin.</p>
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
              value={faq.badge || ''}
              onChange={(e) => handleHeaderChange('badge', e.target.value)}
              className="admin-input"
              placeholder="Merak Edilenler"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Ana Başlık</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                value={faq.title || ''}
                onChange={(e) => handleHeaderChange('title', e.target.value)}
                className="admin-input"
                placeholder="Sıkça Sorulan"
              />
              <input
                type="text"
                value={faq.titleHighlight || ''}
                onChange={(e) => handleHeaderChange('titleHighlight', e.target.value)}
                className="admin-input"
                placeholder="Sorular"
              />
            </div>
          </div>
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Alt Açıklama Metni</label>
          <textarea
            rows={2}
            value={faq.subtitle || ''}
            onChange={(e) => handleHeaderChange('subtitle', e.target.value)}
            className="admin-input"
            placeholder="Proje süreçlerimiz hakkında..."
          />
        </div>
      </div>

      {/* Items List */}
      <div className="admin-card">
        <div className="card-header-flex">
          <div>
            <h3 className="card-title">Soru ve Cevaplar ({items.length})</h3>
            <p className="admin-helper-text">Soruların gösterim sırasını yukarı/aşağı butonları ile değiştirebilirsiniz.</p>
          </div>
          <button type="button" onClick={addItem} className="btn-secondary">
            <Plus size={16} /> Yeni Soru Ekle
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
                  <span className="slide-title-preview">{item.question || 'İsimsiz Soru'}</span>
                </div>

                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="btn-delete"
                  title="Soruyu Sil"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="admin-field-group">
                <label className="admin-label">Soru Cümlesi</label>
                <input
                  type="text"
                  value={item.question || ''}
                  onChange={(e) => updateItem(index, 'question', e.target.value)}
                  className="admin-input"
                  placeholder="Örn: Proje geliştirme süresi ne kadar?"
                />
              </div>

              <div className="admin-field-group">
                <label className="admin-label">Cevap Metni</label>
                <textarea
                  rows={3}
                  value={item.answer || ''}
                  onChange={(e) => updateItem(index, 'answer', e.target.value)}
                  className="admin-input"
                  placeholder="Detaylı yanıtınızı girin..."
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQTab;
