import React, { useState } from 'react';
import { Sliders, Plus, Trash2, ChevronUp, ChevronDown, ExternalLink } from 'lucide-react';
import ImageUploadField from '../ImageUploadField';
import PageSelector from '../PageSelector';

const servicesList = [
  { key: 'liveStream', label: '📹 Canlı Yayın Platformları', path: '/hizmetler/canli-yayin' },
  { key: 'crypto', label: '🪙 Kripto ve Finans', path: '/hizmetler/kripto' },
  { key: 'games', label: '🎮 Mobil Oyunlar', path: '/hizmetler/oyun' },
  { key: 'voiceChat', label: '🎙️ Sesli Sohbet Odaları', path: '/hizmetler/sesli-sohbet' },
  { key: 'textChat', label: '💬 Modern Chat / Mesajlaşma', path: '/hizmetler/chat' },
];

const ServiceDetailsTab = ({ content, onChange }) => {
  const [selectedService, setSelectedService] = useState('liveStream');
  const serviceDetails = content.serviceDetails || {};
  const currentData = serviceDetails[selectedService] || {};
  const features = currentData.features || [];
  const currentServiceMeta = servicesList.find(s => s.key === selectedService);

  const updateCurrentService = (newFields) => {
    const updatedService = {
      ...currentData,
      ...newFields
    };
    onChange({
      ...content,
      serviceDetails: {
        ...serviceDetails,
        [selectedService]: updatedService
      }
    });
  };

  const handleFieldChange = (field, value) => {
    updateCurrentService({ [field]: value });
  };

  const updateFeature = (index, field, value) => {
    const newFeatures = [...features];
    newFeatures[index] = {
      ...newFeatures[index],
      [field]: value
    };
    updateCurrentService({ features: newFeatures });
  };

  const addFeature = () => {
    const newFeature = {
      id: `feat-${Date.now()}`,
      icon: 'Zap',
      title: 'Yeni Özellik Başlığı',
      desc: 'Özellik açıklamasını buraya yazın.'
    };
    updateCurrentService({ features: [...features, newFeature] });
  };

  const removeFeature = (index) => {
    updateCurrentService({
      features: features.filter((_, i) => i !== index)
    });
  };

  const moveFeature = (index, direction) => {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= features.length) return;
    const newFeatures = [...features];
    const temp = newFeatures[index];
    newFeatures[index] = newFeatures[newIndex];
    newFeatures[newIndex] = temp;
    updateCurrentService({ features: newFeatures });
  };

  return (
    <div className="admin-tab-content">
      <div className="tab-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="tab-icon-box">
            <Sliders size={22} />
          </div>
          <div>
            <h2>Hizmet Alt Sayfaları Yönetimi</h2>
            <p>Her bir hizmetin özel detay sayfasındaki metin, görsel ve teknik özellik maddelerini düzenleyin.</p>
          </div>
        </div>

        {currentServiceMeta && (
          <a
            href={currentServiceMeta.path}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', padding: '0.5rem 1rem' }}
          >
            Sayfayı Görüntüle <ExternalLink size={14} />
          </a>
        )}
      </div>

      {/* Service Selector Tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {servicesList.map((srv) => (
          <button
            key={srv.key}
            type="button"
            onClick={() => setSelectedService(srv.key)}
            className={`btn ${selectedService === srv.key ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
          >
            {srv.label}
          </button>
        ))}
      </div>

      {/* Service Hero Header */}
      <div className="admin-card">
        <h3 className="card-title">Sayfa Üst Bölümü (Hero)</h3>
        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Üst Rozet (Badge)</label>
            <input
              type="text"
              value={currentData.badge || ''}
              onChange={(e) => handleFieldChange('badge', e.target.value)}
              className="admin-input"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Aksiyon Butonu Metni</label>
            <input
              type="text"
              value={currentData.buttonText || ''}
              onChange={(e) => handleFieldChange('buttonText', e.target.value)}
              className="admin-input"
              placeholder="Demo Talep Et"
            />
          </div>
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Aksiyon Butonu Yönlendirme Sayfası</label>
          <PageSelector
            value={currentData.buttonUrl || '/iletisim'}
            onChange={(val) => handleFieldChange('buttonUrl', val)}
          />
        </div>

        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Ana Başlık</label>
            <input
              type="text"
              value={currentData.title || ''}
              onChange={(e) => handleFieldChange('title', e.target.value)}
              className="admin-input"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Vurgulu Başlık</label>
            <input
              type="text"
              value={currentData.titleHighlight || ''}
              onChange={(e) => handleFieldChange('titleHighlight', e.target.value)}
              className="admin-input"
            />
          </div>
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Detaylı Açıklama</label>
          <textarea
            rows={3}
            value={currentData.subtitle || ''}
            onChange={(e) => handleFieldChange('subtitle', e.target.value)}
            className="admin-input"
          />
        </div>

        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Görsel Üstü İstatistik Değeri</label>
            <input
              type="text"
              value={currentData.statValue || ''}
              onChange={(e) => handleFieldChange('statValue', e.target.value)}
              className="admin-input"
              placeholder="Örn: 100K+ veya $2.4M/sn"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">İstatistik Açıklaması</label>
            <input
              type="text"
              value={currentData.statLabel || ''}
              onChange={(e) => handleFieldChange('statLabel', e.target.value)}
              className="admin-input"
              placeholder="Örn: Anlık İzleyici Kapasitesi"
            />
          </div>
        </div>

        <ImageUploadField
          label="Sayfa Önizleme Görseli / Mockup"
          value={currentData.image || ''}
          onChange={(url) => handleFieldChange('image', url)}
          placeholder="Görsel URL veya dosya yükleyin..."
        />
      </div>

      {/* Features List */}
      <div className="admin-card">
        <div className="card-header-flex">
          <div>
            <h3 className="card-title">Teknolojik Özellik Maddeleri ({features.length})</h3>
            <p className="admin-helper-text">Sayfanın alt bölümünde yer alan 4'lü özellik gridini yönetin.</p>
          </div>
          <button type="button" onClick={addFeature} className="btn-secondary">
            <Plus size={16} /> Yeni Madde Ekle
          </button>
        </div>

        <div className="form-grid-2" style={{ marginBottom: '1.5rem' }}>
          <div className="admin-field-group">
            <label className="admin-label">Bölüm Başlığı</label>
            <input
              type="text"
              value={currentData.featuresTitle || ''}
              onChange={(e) => handleFieldChange('featuresTitle', e.target.value)}
              className="admin-input"
              placeholder="Teknolojik Altyapımız"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Bölüm Alt Açıklaması</label>
            <input
              type="text"
              value={currentData.featuresSubtitle || ''}
              onChange={(e) => handleFieldChange('featuresSubtitle', e.target.value)}
              className="admin-input"
              placeholder="Gelişmiş protokoller ve..."
            />
          </div>
        </div>

        <div className="items-list">
          {features.map((feat, index) => (
            <div key={feat.id || index} className="service-editor-card glass-panel">
              <div className="service-editor-header">
                <span className="slide-title-preview">{feat.title || 'İsimsiz Madde'}</span>
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="btn-delete"
                  title="Maddeyi Sil"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="form-grid-2">
                <div className="admin-field-group">
                  <label className="admin-label">Özellik Başlığı</label>
                  <input
                    type="text"
                    value={feat.title || ''}
                    onChange={(e) => updateFeature(index, 'title', e.target.value)}
                    className="admin-input"
                  />
                </div>
                <div className="admin-field-group">
                  <label className="admin-label">İkon Adı (Lucide)</label>
                  <input
                    type="text"
                    value={feat.icon || 'Zap'}
                    onChange={(e) => updateFeature(index, 'icon', e.target.value)}
                    className="admin-input"
                    placeholder="Zap, Shield, Server, Users, Lock..."
                  />
                </div>
              </div>

              <div className="admin-field-group">
                <label className="admin-label">Özellik Açıklaması</label>
                <textarea
                  rows={2}
                  value={feat.desc || ''}
                  onChange={(e) => updateFeature(index, 'desc', e.target.value)}
                  className="admin-input"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsTab;
