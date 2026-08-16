import React from 'react';
import { PanelBottom, Plus, Trash2 } from 'lucide-react';
import PageSelector from '../PageSelector';

const FooterTab = ({ content, onChange }) => {
  const footer = content.footer || {};
  const legalLinks = footer.legalLinks || [];
  const columns = footer.columns || [];

  const updateFooter = (newFooter) => {
    onChange({
      ...content,
      footer: newFooter
    });
  };

  const handleChange = (field, value) => {
    updateFooter({
      ...footer,
      [field]: value
    });
  };

  // Legal links
  const updateLegalLink = (index, field, value) => {
    const newLinks = [...legalLinks];
    newLinks[index] = {
      ...newLinks[index],
      [field]: value
    };
    updateFooter({
      ...footer,
      legalLinks: newLinks
    });
  };

  const addLegalLink = () => {
    updateFooter({
      ...footer,
      legalLinks: [
        ...legalLinks,
        { id: `leg-${Date.now()}`, label: 'Yeni Yasal Link', url: '/yasal/kvkk' }
      ]
    });
  };

  const removeLegalLink = (index) => {
    updateFooter({
      ...footer,
      legalLinks: legalLinks.filter((_, i) => i !== index)
    });
  };

  // Footer column links
  const addColumnLink = (colIndex) => {
    const newCols = [...columns];
    const col = { ...newCols[colIndex] };
    const links = col.links ? [...col.links] : [];
    links.push({
      id: `fcl-${Date.now()}`,
      label: 'Yeni Bağlantı',
      url: '/'
    });
    col.links = links;
    newCols[colIndex] = col;
    updateFooter({
      ...footer,
      columns: newCols
    });
  };

  const removeColumnLink = (colIndex, linkIndex) => {
    const newCols = [...columns];
    const col = { ...newCols[colIndex] };
    col.links = col.links.filter((_, i) => i !== linkIndex);
    newCols[colIndex] = col;
    updateFooter({
      ...footer,
      columns: newCols
    });
  };

  const editColumnLink = (colIndex, linkIndex, field, value) => {
    const newCols = [...columns];
    const col = { ...newCols[colIndex] };
    const links = [...col.links];
    links[linkIndex] = {
      ...links[linkIndex],
      [field]: value
    };
    col.links = links;
    newCols[colIndex] = col;
    updateFooter({
      ...footer,
      columns: newCols
    });
  };

  const editColumnTitle = (colIndex, title) => {
    const newCols = [...columns];
    newCols[colIndex] = {
      ...newCols[colIndex],
      title
    };
    updateFooter({
      ...footer,
      columns: newCols
    });
  };

  return (
    <div className="admin-tab-content">
      <div className="tab-header">
        <div className="tab-icon-box">
          <PanelBottom size={22} />
        </div>
        <div>
          <h2>Footer ve Telif Hakları Yönetimi</h2>
          <p>Sitenin en altındaki açıklama yazısı, telif hakkı metni, yasal linkler ve sütun menülerini yönetin.</p>
        </div>
      </div>

      <div className="admin-card">
        <h3 className="card-title">Genel Footer Metinleri</h3>
        
        <div className="admin-field-group">
          <label className="admin-label">Footer Marka Açıklaması</label>
          <textarea
            rows={3}
            value={footer.description || ''}
            onChange={(e) => handleChange('description', e.target.value)}
            className="admin-input"
            placeholder="Yenilikçi, güvenli ve performans odaklı premium mobil uygulamalar..."
          />
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Telif Hakkı Metni (Copyright)</label>
          <input
            type="text"
            value={footer.copyright || ''}
            onChange={(e) => handleChange('copyright', e.target.value)}
            className="admin-input"
            placeholder="Seebel Yazılım. Tüm hakları saklıdır."
          />
          <small className="admin-helper-text">Yıl bilgisi (örn: 2026) otomatik dinamik eklenir.</small>
        </div>
      </div>

      {/* Footer Columns */}
      <div className="admin-card">
        <h3 className="card-title">Footer Menü Sütunları</h3>
        <div className="form-grid-2">
          {columns.map((col, colIdx) => (
            <div key={col.id || colIdx} className="stat-edit-box glass-panel" style={{ padding: '1.5rem' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <label className="admin-label">Sütun Başlığı</label>
                <input
                  type="text"
                  value={col.title || ''}
                  onChange={(e) => editColumnTitle(colIdx, e.target.value)}
                  className="admin-input font-bold"
                  placeholder="Hizmetler / Kurumsal"
                />
              </div>

              <div className="card-header-flex">
                <span className="admin-helper-text">Sütun Linkleri ({col.links?.length || 0})</span>
                <button type="button" onClick={() => addColumnLink(colIdx)} className="btn-mini">
                  <Plus size={12} /> Link Ekle
                </button>
              </div>

              <div className="mt-2" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {col.links?.map((lnk, lnkIdx) => (
                  <div key={lnk.id || lnkIdx} style={{ display: 'grid', gridTemplateColumns: '1.2fr 2fr auto', gap: '0.5rem', alignItems: 'center' }}>
                    <input
                      type="text"
                      value={lnk.label}
                      onChange={(e) => editColumnLink(colIdx, lnkIdx, 'label', e.target.value)}
                      placeholder="Link Adı"
                      className="admin-input-mini"
                    />
                    <PageSelector
                      value={lnk.url}
                      onChange={(val) => editColumnLink(colIdx, lnkIdx, 'url', val)}
                    />
                    <button
                      type="button"
                      onClick={() => removeColumnLink(colIdx, lnkIdx)}
                      className="btn-delete-mini"
                      title="Linki Sil"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Links */}
      <div className="admin-card">
        <div className="card-header-flex">
          <div>
            <h3 className="card-title">Alt Yasal Bağlantılar (KVKK / Çerez Politikası)</h3>
            <p className="admin-helper-text">Footer en altında telif yazısının yanında listelenir.</p>
          </div>
          <button type="button" onClick={addLegalLink} className="btn-secondary">
            <Plus size={16} /> Yasal Link Ekle
          </button>
        </div>

        <div className="items-list">
          {legalLinks.map((leg, index) => (
            <div key={leg.id || index} style={{ display: 'grid', gridTemplateColumns: '1.5fr 2.5fr auto', gap: '0.75rem', alignItems: 'center' }}>
              <input
                type="text"
                value={leg.label || ''}
                onChange={(e) => updateLegalLink(index, 'label', e.target.value)}
                className="admin-input"
                placeholder="KVKK Aydınlatma Metni"
              />
              <PageSelector
                value={leg.url || ''}
                onChange={(val) => updateLegalLink(index, 'url', val)}
              />
              <button
                type="button"
                onClick={() => removeLegalLink(index)}
                className="btn-delete"
                title="Linki Sil"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterTab;

