import React from 'react';
import ImageUploadField from '../ImageUploadField';
import PageSelector from '../PageSelector';
import { Layers, Plus, Trash2, ChevronUp, ChevronDown, Play, TrendingUp, Gamepad2, Mic, MessageSquare, Code, Shield } from 'lucide-react';

const iconOptions = [
  { value: 'Play', label: 'Play (Canlı Yayın / Video)' },
  { value: 'TrendingUp', label: 'TrendingUp (Kripto / Finans)' },
  { value: 'Gamepad2', label: 'Gamepad2 (Mobil Oyun)' },
  { value: 'Mic', label: 'Mic (Sesli Sohbet / Oda)' },
  { value: 'MessageSquare', label: 'MessageSquare (Chat / Mesaj)' },
  { value: 'Code', label: 'Code (Özel Yazılım)' },
  { value: 'Shield', label: 'Shield (Siber Güvenlik)' }
];

const ServicesTab = ({ content, onChange }) => {
  const services = content.services || { items: [] };
  const items = services.items || [];

  const updateServices = (newServices) => {
    onChange({
      ...content,
      services: newServices
    });
  };

  const updateHeader = (field, value) => {
    updateServices({
      ...services,
      [field]: value
    });
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      [field]: value
    };
    updateServices({
      ...services,
      items: newItems
    });
  };

  const addItem = () => {
    const newItem = {
      id: `srv-${Date.now()}`,
      title: 'Yeni Hizmet Başlığı',
      description: 'Hizmetiniz hakkında kısa, etkileyici ve açıklayıcı bilgi metni.',
      icon: 'Code',
      image: '',
      color: '#3b82f6',
      path: '/hizmetlerimiz'
    };
    updateServices({
      ...services,
      items: [...items, newItem]
    });
  };

  const removeItem = (index) => {
    if (window.confirm('Bu hizmet kartını silmek istediğinize emin misiniz?')) {
      const newItems = items.filter((_, i) => i !== index);
      updateServices({
        ...services,
        items: newItems
      });
    }
  };

  const moveItem = (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    const newItems = [...items];
    const temp = newItems[index];
    newItems[index] = newItems[target];
    newItems[target] = temp;
    updateServices({
      ...services,
      items: newItems
    });
  };

  return (
    <div className="admin-tab-content">
      <div className="tab-header">
        <div className="tab-icon-box">
          <Layers size={22} />
        </div>
        <div>
          <h2>Hizmetlerimiz Yönetimi</h2>
          <p>Ana sayfada ve hizmetler sayfasında listelenen uzmanlık kartlarını, görsellerini ve renklerini yönetin.</p>
        </div>
      </div>

      {/* Section Titles */}
      <div className="admin-card">
        <h3 className="card-title">Bölüm Başlık ve Açıklamaları</h3>
        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Bölüm Ana Başlığı</label>
            <input
              type="text"
              value={services.sectionTitle || ''}
              onChange={(e) => updateHeader('sectionTitle', e.target.value)}
              className="admin-input"
              placeholder="Uzmanlık"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Vurgulanan Başlık (Gradient Renkli)</label>
            <input
              type="text"
              value={services.sectionTitleHighlight || ''}
              onChange={(e) => updateHeader('sectionTitleHighlight', e.target.value)}
              className="admin-input"
              placeholder="Alanlarımız"
            />
          </div>
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Bölüm Alt Açıklaması</label>
          <textarea
            rows={2}
            value={services.sectionSubtitle || ''}
            onChange={(e) => updateHeader('sectionSubtitle', e.target.value)}
            className="admin-input"
            placeholder="Sektördeki en zorlu ve rekabetçi alanlarda..."
          />
        </div>
      </div>

      {/* Services List */}
      <div className="admin-card">
        <div className="card-header-flex">
          <div>
            <h3 className="card-title">Hizmet Kartları ({items.length})</h3>
            <p className="admin-helper-text">Kartları yukarı/aşağı taşıyarak sitedeki dizilim sırasını değiştirebilirsiniz.</p>
          </div>
          <button type="button" onClick={addItem} className="btn-secondary">
            <Plus size={16} /> Yeni Hizmet Ekle
          </button>
        </div>

        <div className="items-list">
          {items.map((item, index) => (
            <div key={item.id || index} className="service-editor-card glass-panel">
              <div className="service-editor-header">
                <div className="service-badge-info">
                  <div
                    className="service-color-dot"
                    style={{ backgroundColor: item.color || '#3b82f6', boxShadow: `0 0 10px ${item.color || '#3b82f6'}` }}
                  />
                  <span className="order-number">#{index + 1}</span>
                  <span className="service-title-preview">{item.title || 'Yeni Hizmet'}</span>
                </div>

                <div className="item-order-controls">
                  <button
                    type="button"
                    onClick={() => moveItem(index, -1)}
                    disabled={index === 0}
                    className="btn-icon"
                    title="Öne Taşı"
                  >
                    <ChevronUp size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => moveItem(index, 1)}
                    disabled={index === items.length - 1}
                    className="btn-icon"
                    title="Sonraya Taşı"
                  >
                    <ChevronDown size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="btn-delete"
                    title="Hizmeti Sil"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="service-editor-body">
                <div className="form-grid-2">
                  <div className="admin-field-group">
                    <label className="admin-label">Hizmet Başlığı</label>
                    <input
                      type="text"
                      value={item.title || ''}
                      onChange={(e) => updateItem(index, 'title', e.target.value)}
                      className="admin-input"
                      placeholder="Canlı Yayın Platformları"
                    />
                  </div>

                  <div className="admin-field-group">
                    <label className="admin-label">İkon & Tema Rengi</label>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                      <select
                        value={item.icon || 'Play'}
                        onChange={(e) => updateItem(index, 'icon', e.target.value)}
                        className="admin-input flex-1"
                      >
                        {iconOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="color"
                        value={item.color || '#3b82f6'}
                        onChange={(e) => updateItem(index, 'color', e.target.value)}
                        className="admin-color-picker"
                        title="Kart Işıma Rengi"
                      />
                    </div>
                  </div>
                </div>

                <div className="admin-field-group">
                  <label className="admin-label">Hizmet Açıklaması</label>
                  <textarea
                    rows={2}
                    value={item.description || ''}
                    onChange={(e) => updateItem(index, 'description', e.target.value)}
                    className="admin-input"
                    placeholder="Hizmet detay açıklaması..."
                  />
                </div>

                <div className="admin-field-group">
                  <label className="admin-label">Detay Sayfası Yönlendirmesi</label>
                  <PageSelector
                    value={item.path || '/hizmetlerimiz'}
                    onChange={(val) => updateItem(index, 'path', val)}
                  />
                </div>

                <ImageUploadField
                  label="Hizmet Kartı Arka Plan / Kapak Görseli"
                  helperText="Kartın arka planında sergilenecek görsel. Vercel Blob ile doğrudan yükleyebilirsiniz."
                  value={item.image || ''}
                  onChange={(url) => updateItem(index, 'image', url)}
                  placeholder="https://... veya dosya yükleyin"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesTab;
