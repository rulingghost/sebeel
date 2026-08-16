import React from 'react';
import ImageUploadField from '../ImageUploadField';
import PageSelector from '../PageSelector';
import { Briefcase, Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

const ProjectsTab = ({ content, onChange }) => {
  const projects = content.projects || { items: [], categories: [] };
  const items = projects.items || [];
  const categories = projects.categories || [
    { id: 'all', label: 'Tümü' },
    { id: 'live', label: 'Canlı Yayın' },
    { id: 'crypto', label: 'Kripto & Fintek' },
    { id: 'game', label: 'Oyun' },
    { id: 'voice', label: 'Sesli Sohbet' },
    { id: 'chat', label: 'Mesajlaşma' }
  ];

  const updateProjects = (newProjects) => {
    onChange({
      ...content,
      projects: newProjects
    });
  };

  const updateHeader = (field, value) => {
    updateProjects({
      ...projects,
      [field]: value
    });
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index] = {
      ...newItems[index],
      [field]: value
    };
    updateProjects({
      ...projects,
      items: newItems
    });
  };

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      title: 'Yeni Proje Adı',
      category: 'live',
      image: '',
      desc: 'Proje hakkında başarı ve özellik açıklaması...',
      link: '/hizmetler/canli-yayin',
      buttonText: 'Projeyi İncele'
    };
    updateProjects({
      ...projects,
      items: [...items, newItem]
    });
  };

  const removeItem = (index) => {
    if (window.confirm('Bu projeyi silmek istediğinize emin misiniz?')) {
      const newItems = items.filter((_, i) => i !== index);
      updateProjects({
        ...projects,
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
    updateProjects({
      ...projects,
      items: newItems
    });
  };

  return (
    <div className="admin-tab-content">
      <div className="tab-header">
        <div className="tab-icon-box">
          <Briefcase size={22} />
        </div>
        <div>
          <h2>Projelerimiz & Portfolyo Yönetimi</h2>
          <p>Tamamlanan ve portfolyoda sergilenen mobil uygulama projelerini, ekran görüntülerini ve yönlendirmelerini yönetin.</p>
        </div>
      </div>

      {/* Header Info */}
      <div className="admin-card">
        <h3 className="card-title">Bölüm Başlığı</h3>
        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Ana Başlık</label>
            <input
              type="text"
              value={projects.sectionTitle || ''}
              onChange={(e) => updateHeader('sectionTitle', e.target.value)}
              className="admin-input"
              placeholder="Tamamlanan"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Vurgulu Başlık</label>
            <input
              type="text"
              value={projects.sectionTitleHighlight || ''}
              onChange={(e) => updateHeader('sectionTitleHighlight', e.target.value)}
              className="admin-input"
              placeholder="Projelerimiz"
            />
          </div>
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Alt Açıklama Metni</label>
          <textarea
            rows={2}
            value={projects.sectionSubtitle || ''}
            onChange={(e) => updateHeader('sectionSubtitle', e.target.value)}
            className="admin-input"
            placeholder="Farklı sektörlerde, global standartlarda geliştirip yayınladığımız..."
          />
        </div>
      </div>

      {/* Projects List */}
      <div className="admin-card">
        <div className="card-header-flex">
          <div>
            <h3 className="card-title">Proje & Referans Kartları ({items.length})</h3>
            <p className="admin-helper-text">Her projenin görselini Vercel Blob ile yükleyebilir veya link ekleyebilirsiniz.</p>
          </div>
          <button type="button" onClick={addItem} className="btn-secondary">
            <Plus size={16} /> Yeni Proje Ekle
          </button>
        </div>

        <div className="items-list">
          {items.map((proj, index) => (
            <div key={proj.id || index} className="service-editor-card glass-panel">
              <div className="service-editor-header">
                <div className="service-badge-info">
                  <span className="order-number">#{index + 1}</span>
                  <span className="service-title-preview">{proj.title || 'İsimsiz Proje'}</span>
                  <span className="theme-pill theme-blue">{proj.category || 'all'}</span>
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
                    title="Projeyi Sil"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="service-editor-body">
                <div className="form-grid-2">
                  <div className="admin-field-group">
                    <label className="admin-label">Proje Adı</label>
                    <input
                      type="text"
                      value={proj.title || ''}
                      onChange={(e) => updateItem(index, 'title', e.target.value)}
                      className="admin-input"
                      placeholder="StreamMax"
                    />
                  </div>

                  <div className="admin-field-group">
                    <label className="admin-label">Kategori Filtresi</label>
                    <select
                      value={proj.category || 'live'}
                      onChange={(e) => updateItem(index, 'category', e.target.value)}
                      className="admin-input"
                    >
                      {categories.map((c) => (
                        <option key={c.id} value={c.id}>{c.label} ({c.id})</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="admin-field-group">
                    <label className="admin-label">Kart Buton Metni</label>
                    <input
                      type="text"
                      value={proj.buttonText || 'Projeyi İncele'}
                      onChange={(e) => updateItem(index, 'buttonText', e.target.value)}
                      className="admin-input"
                    />
                  </div>
                  <div className="admin-field-group">
                    <label className="admin-label">Buton Yönlendirme Sayfası</label>
                    <PageSelector
                      value={proj.link || '/iletisim'}
                      onChange={(val) => updateItem(index, 'link', val)}
                    />
                  </div>
                </div>

                <div className="admin-field-group">
                  <label className="admin-label">Proje Açıklaması / Başarı Metni</label>
                  <textarea
                    rows={2}
                    value={proj.desc || ''}
                    onChange={(e) => updateItem(index, 'desc', e.target.value)}
                    className="admin-input"
                    placeholder="Twitch alternatif, e-spor odaklı canlı yayın platformu..."
                  />
                </div>

                <ImageUploadField
                  label="Proje Ekran Görüntüsü / Mockup"
                  helperText="Projenin kartında sergilenecek görsel. Vercel Blob ile doğrudan yükleyebilirsiniz."
                  value={proj.image || ''}
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

export default ProjectsTab;
