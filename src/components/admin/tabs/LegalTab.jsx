import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

const legalDocList = [
  { key: 'kvkk', label: 'KVKK Aydınlatma Metni', slug: 'kvkk' },
  { key: 'privacy', label: 'Gizlilik Politikası', slug: 'gizlilik-politikasi' },
  { key: 'cookies', label: 'Çerez Politikası', slug: 'cerez-politikasi' },
  { key: 'terms', label: 'Kullanım Şartları', slug: 'kullanim-sartlari' },
];

const LegalTab = ({ content, onChange }) => {
  const [selectedDoc, setSelectedDoc] = useState('kvkk');
  const legal = content.legal || {};
  const currentDoc = legal[selectedDoc] || {};

  const updateCurrentDoc = (newFields) => {
    onChange({
      ...content,
      legal: {
        ...legal,
        [selectedDoc]: {
          ...currentDoc,
          ...newFields
        }
      }
    });
  };

  const handleFieldChange = (field, value) => {
    updateCurrentDoc({ [field]: value });
  };

  return (
    <div className="admin-tab-content">
      <div className="tab-header">
        <div className="tab-icon-box">
          <ShieldCheck size={22} />
        </div>
        <div>
          <h2>Yasal Sayfalar & Politikalar</h2>
          <p>KVKK, Gizlilik, Çerez Politikası ve Kullanım Şartları sayfalarının metinlerini düzenleyin.</p>
        </div>
      </div>

      {/* Document Select Buttons */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {legalDocList.map((doc) => (
          <button
            key={doc.key}
            type="button"
            onClick={() => setSelectedDoc(doc.key)}
            className={`btn ${selectedDoc === doc.key ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
          >
            {doc.label}
          </button>
        ))}
      </div>

      {/* Active Legal Document Editor */}
      <div className="admin-card">
        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Sayfa / Belge Başlığı</label>
            <input
              type="text"
              value={currentDoc.title || ''}
              onChange={(e) => handleFieldChange('title', e.target.value)}
              className="admin-input"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Son Güncelleme Yılı / Tarihi</label>
            <input
              type="text"
              value={currentDoc.lastUpdated || ''}
              onChange={(e) => handleFieldChange('lastUpdated', e.target.value)}
              className="admin-input"
              placeholder="2026"
            />
          </div>
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Alt Açıklama / Özet</label>
          <input
            type="text"
            value={currentDoc.subtitle || ''}
            onChange={(e) => handleFieldChange('subtitle', e.target.value)}
            className="admin-input"
          />
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Tam Metin İçeriği (Paragraflar & Maddeler)</label>
          <textarea
            rows={14}
            value={currentDoc.content || ''}
            onChange={(e) => handleFieldChange('content', e.target.value)}
            className="admin-input"
            style={{ lineHeight: '1.7', fontFamily: 'monospace', fontSize: '0.9rem' }}
            placeholder="Yasal bildirim metnini buraya girin..."
          />
        </div>
      </div>
    </div>
  );
};

export default LegalTab;
