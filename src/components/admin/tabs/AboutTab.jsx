import React from 'react';
import { Info, Plus, Trash2, ShieldCheck, Zap, Globe, Users, Code, Target, Award } from 'lucide-react';

const iconMap = {
  ShieldCheck: 'ShieldCheck (Güvenlik)',
  Zap: 'Zap (Performans/Hız)',
  Globe: 'Globe (Global Standartlar)',
  Users: 'Users (Ekip/Kullanıcılar)',
  Code: 'Code (Temiz Kod)',
  Target: 'Target (Hedef/Vizyon)',
  Award: 'Award (Ödül/Kalite)'
};

const AboutTab = ({ content, onChange }) => {
  const about = content.about || {};
  const aboutUsPage = content.aboutUsPage || {};
  const features = about.features || [];
  const stats = about.stats || [];
  const pageStats = aboutUsPage.stats || [];
  const culture = aboutUsPage.culture || [];

  const updateAbout = (newAbout) => {
    onChange({
      ...content,
      about: newAbout
    });
  };

  const updateAboutUsPage = (newPage) => {
    onChange({
      ...content,
      aboutUsPage: newPage
    });
  };

  // Features update
  const updateFeature = (index, field, value) => {
    const newFeatures = [...features];
    newFeatures[index] = {
      ...newFeatures[index],
      [field]: value
    };
    updateAbout({ ...about, features: newFeatures });
  };

  const addFeature = () => {
    updateAbout({
      ...about,
      features: [
        ...features,
        {
          id: `af-${Date.now()}`,
          icon: 'ShieldCheck',
          title: 'Yeni Özellik',
          description: 'Özellik açıklaması...'
        }
      ]
    });
  };

  const removeFeature = (index) => {
    updateAbout({
      ...about,
      features: features.filter((_, i) => i !== index)
    });
  };

  // Stats update
  const updateStat = (index, field, value) => {
    const newStats = [...stats];
    newStats[index] = {
      ...newStats[index],
      [field]: value
    };
    updateAbout({ ...about, stats: newStats });
  };

  // Page Stats update
  const updatePageStat = (index, field, value) => {
    const newPageStats = [...pageStats];
    newPageStats[index] = {
      ...newPageStats[index],
      [field]: value
    };
    updateAboutUsPage({ ...aboutUsPage, stats: newPageStats });
  };

  // Culture update
  const updateCulture = (index, field, value) => {
    const newCulture = [...culture];
    newCulture[index] = {
      ...newCulture[index],
      [field]: value
    };
    updateAboutUsPage({ ...aboutUsPage, culture: newCulture });
  };

  return (
    <div className="admin-tab-content">
      <div className="tab-header">
        <div className="tab-icon-box">
          <Info size={22} />
        </div>
        <div>
          <h2>Hakkımızda & Kurumsal Yönetimi</h2>
          <p>Ana sayfadaki "Neden Biz?" bölümü ve Kurumsal "Hakkımızda" sayfasının tüm metinlerini düzenleyin.</p>
        </div>
      </div>

      {/* Home About Section */}
      <div className="admin-card">
        <h3 className="card-title">Ana Sayfa: "Neden Seebel Yazılım?" Bölümü</h3>
        
        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Bölüm Başlığı</label>
            <input
              type="text"
              value={about.title || ''}
              onChange={(e) => updateAbout({ ...about, title: e.target.value })}
              className="admin-input"
              placeholder="Neden"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Vurgulanan Başlık (Gradient Renkli)</label>
            <input
              type="text"
              value={about.titleHighlight || ''}
              onChange={(e) => updateAbout({ ...about, titleHighlight: e.target.value })}
              className="admin-input"
              placeholder="Seebel Yazılım?"
            />
          </div>
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Açıklama Paragrafı</label>
          <textarea
            rows={3}
            value={about.description || ''}
            onChange={(e) => updateAbout({ ...about, description: e.target.value })}
            className="admin-input"
            placeholder="Biz sadece kod yazmıyoruz..."
          />
        </div>

        <div className="mt-4">
          <div className="card-header-flex">
            <label className="admin-label" style={{ marginBottom: 0 }}>Öne Çıkan Özellik Maddeleri ({features.length})</label>
            <button type="button" onClick={addFeature} className="btn-mini">
              <Plus size={14} /> Madde Ekle
            </button>
          </div>

          <div className="items-list mt-2">
            {features.map((feat, index) => (
              <div key={feat.id || index} className="stat-edit-box glass-panel">
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <select
                    value={feat.icon || 'ShieldCheck'}
                    onChange={(e) => updateFeature(index, 'icon', e.target.value)}
                    className="admin-input"
                    style={{ width: '220px' }}
                  >
                    {Object.entries(iconMap).map(([val, lbl]) => (
                      <option key={val} value={val}>{lbl}</option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={feat.title || ''}
                    onChange={(e) => updateFeature(index, 'title', e.target.value)}
                    className="admin-input flex-1"
                    placeholder="Özellik Başlığı"
                  />
                  <button
                    type="button"
                    onClick={() => removeFeature(index)}
                    className="btn-delete"
                    title="Sil"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <textarea
                  rows={2}
                  value={feat.description || ''}
                  onChange={(e) => updateFeature(index, 'description', e.target.value)}
                  className="admin-input"
                  placeholder="Açıklama..."
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <label className="admin-label">Ana Sayfa İstatistik Kutucukları (Stats Box)</label>
          <div className="form-grid-2">
            {stats.map((st, index) => (
              <div key={st.id || index} className="stat-edit-box">
                <input
                  type="text"
                  value={st.value || ''}
                  onChange={(e) => updateStat(index, 'value', e.target.value)}
                  className="admin-input mb-1 font-bold"
                  placeholder="Değer (Örn: 1M+)"
                />
                <input
                  type="text"
                  value={st.label || ''}
                  onChange={(e) => updateStat(index, 'label', e.target.value)}
                  className="admin-input"
                  placeholder="Etiket (Örn: Aktif Kullanıcı)"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-4">
          <div className="card-header-flex">
            <div>
              <label className="admin-label" style={{ marginBottom: 0 }}>Görsel Üzerindeki Teknoloji Rozetleri (Tech Stack)</label>
              <p className="admin-helper-text">Virgülle ayırarak teknolojileri düzenleyin.</p>
            </div>
          </div>
          <input
            type="text"
            value={(about.techStack || ['React', 'Node.js', 'WebRTC', 'Solidity']).join(', ')}
            onChange={(e) => {
              const items = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
              updateAbout({ ...about, techStack: items });
            }}
            className="admin-input"
            placeholder="React, Node.js, WebRTC, Solidity, Flutter, Swift"
          />
          <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.6rem' }}>
            {(about.techStack || ['React', 'Node.js', 'WebRTC', 'Solidity']).map((t, idx) => (
              <span key={idx} className="theme-pill theme-blue">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate About Us Page */}
      <div className="admin-card">
        <h3 className="card-title">Kurumsal Sayfa: "/hakkimizda" Detayları</h3>

        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Sayfa Başlığı</label>
            <input
              type="text"
              value={aboutUsPage.title || ''}
              onChange={(e) => updateAboutUsPage({ ...aboutUsPage, title: e.target.value })}
              className="admin-input"
              placeholder="Teknolojiyi Sanata"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Vurgulanan Başlık</label>
            <input
              type="text"
              value={aboutUsPage.titleHighlight || ''}
              onChange={(e) => updateAboutUsPage({ ...aboutUsPage, titleHighlight: e.target.value })}
              className="admin-input"
              placeholder="Dönüştürüyoruz"
            />
          </div>
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Sayfa Alt Başlığı</label>
          <textarea
            rows={2}
            value={aboutUsPage.subtitle || ''}
            onChange={(e) => updateAboutUsPage({ ...aboutUsPage, subtitle: e.target.value })}
            className="admin-input"
            placeholder="Seebel Yazılım olarak, mobil teknoloji dünyasında..."
          />
        </div>

        {/* Vision & Mission */}
        <div className="form-grid-2 mt-3">
          <div className="stat-edit-box">
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Vizyonumuz</h4>
            <input
              type="text"
              value={aboutUsPage.vision?.title || 'Vizyonumuz'}
              onChange={(e) => updateAboutUsPage({
                ...aboutUsPage,
                vision: { ...aboutUsPage.vision, title: e.target.value }
              })}
              className="admin-input mb-1"
            />
            <textarea
              rows={3}
              value={aboutUsPage.vision?.description || ''}
              onChange={(e) => updateAboutUsPage({
                ...aboutUsPage,
                vision: { ...aboutUsPage.vision, description: e.target.value }
              })}
              className="admin-input"
              placeholder="Vizyon metni..."
            />
          </div>

          <div className="stat-edit-box">
            <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>Misyonumuz</h4>
            <input
              type="text"
              value={aboutUsPage.mission?.title || 'Misyonumuz'}
              onChange={(e) => updateAboutUsPage({
                ...aboutUsPage,
                mission: { ...aboutUsPage.mission, title: e.target.value }
              })}
              className="admin-input mb-1"
            />
            <textarea
              rows={3}
              value={aboutUsPage.mission?.description || ''}
              onChange={(e) => updateAboutUsPage({
                ...aboutUsPage,
                mission: { ...aboutUsPage.mission, description: e.target.value }
              })}
              className="admin-input"
              placeholder="Misyon metni..."
            />
          </div>
        </div>

        {/* Page Stats (50+ Proje vb.) */}
        <div className="mt-4">
          <label className="admin-label">Hakkımızda Sayfası 4'lü İstatistik Şeridi</label>
          <div className="form-grid-4">
            {pageStats.map((pst, index) => (
              <div key={pst.id || index} className="stat-edit-box">
                <input
                  type="text"
                  value={pst.value || ''}
                  onChange={(e) => updatePageStat(index, 'value', e.target.value)}
                  className="admin-input mb-1 text-center font-bold"
                  placeholder="50+"
                />
                <input
                  type="text"
                  value={pst.label || ''}
                  onChange={(e) => updatePageStat(index, 'label', e.target.value)}
                  className="admin-input text-center"
                  placeholder="Başarılı Proje"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Culture */}
        <div className="mt-4">
          <label className="admin-label">Çalışma Kültürü Maddeleri</label>
          <div className="form-grid-2">
            {culture.map((cul, index) => (
              <div key={cul.id || index} className="stat-edit-box">
                <input
                  type="text"
                  value={cul.title || ''}
                  onChange={(e) => updateCulture(index, 'title', e.target.value)}
                  className="admin-input mb-1 font-semibold"
                  placeholder="Kültür Başlığı"
                />
                <textarea
                  rows={2}
                  value={cul.description || ''}
                  onChange={(e) => updateCulture(index, 'description', e.target.value)}
                  className="admin-input"
                  placeholder="Açıklama..."
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
