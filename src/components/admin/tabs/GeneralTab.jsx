import React from 'react';
import ImageUploadField from '../ImageUploadField';
import PageSelector from '../PageSelector';
import { Settings, Shield, Globe } from 'lucide-react';

const GeneralTab = ({ content, onChange }) => {
  const general = content.general || {};

  const handleChange = (key, value) => {
    onChange({
      ...content,
      general: {
        ...general,
        [key]: value
      }
    });
  };

  return (
    <div className="admin-tab-content">
      <div className="tab-header">
        <div className="tab-icon-box">
          <Settings size={22} />
        </div>
        <div>
          <h2>Genel ve Logo Ayarları</h2>
          <p>Sitenin genel başlığı, logo tercihleri ve güvenlik ayarlarını yönetin.</p>
        </div>
      </div>

      <div className="admin-card">
        <h3 className="card-title">Logo & Marka Kimliği</h3>
        
        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Site Adı</label>
            <input
              type="text"
              value={general.siteName || ''}
              onChange={(e) => handleChange('siteName', e.target.value)}
              className="admin-input"
              placeholder="SEEBEL"
            />
          </div>

          <div className="admin-field-group">
            <label className="admin-label">Logo Metni (Görsel yoksa kullanılır)</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                value={general.logoText || ''}
                onChange={(e) => handleChange('logoText', e.target.value)}
                className="admin-input"
                placeholder="SEEBEL"
                style={{ flex: 3 }}
              />
              <input
                type="text"
                value={general.logoDot || '.'}
                onChange={(e) => handleChange('logoDot', e.target.value)}
                className="admin-input text-center"
                placeholder="."
                style={{ flex: 1 }}
                title="Logo sonundaki renkli nokta karakteri"
              />
            </div>
          </div>
        </div>

        <ImageUploadField
          label="Logo Görseli (İsteğe Bağlı)"
          helperText="Eğer metin yerine logo resmi kullanmak istiyorsanız buradan yükleyin veya URL girin."
          value={general.logoImage || ''}
          onChange={(url) => handleChange('logoImage', url)}
          placeholder="https://... veya dosya yükleyin"
        />

        <div className="admin-field-group">
          <label className="admin-label">Slogan / Tagline</label>
          <input
            type="text"
            value={general.tagLine || ''}
            onChange={(e) => handleChange('tagLine', e.target.value)}
            className="admin-input"
            placeholder="Yeni Nesil Mobil & Web Uygulama Geliştirme"
          />
        </div>
      </div>

      {/* Navbar CTA Button */}
      <div className="admin-card">
        <h3 className="card-title">Header / Menü Aksiyon Butonu</h3>
        <p className="admin-helper-text" style={{ marginBottom: '1rem' }}>
          Üst menünün en sağında yer alan öne çıkan butonun metni ve yönleneceği sayfa.
        </p>
        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Buton Metni</label>
            <input
              type="text"
              value={content.ctaButton?.label || ''}
              onChange={(e) =>
                onChange({
                  ...content,
                  ctaButton: { ...(content.ctaButton || {}), label: e.target.value }
                })
              }
              className="admin-input"
              placeholder="İletişime Geç"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Yönlendirme Sayfası</label>
            <PageSelector
              value={content.ctaButton?.path || '/iletisim'}
              onChange={(val) =>
                onChange({
                  ...content,
                  ctaButton: { ...(content.ctaButton || {}), path: val }
                })
              }
            />
          </div>
        </div>
      </div>

      {/* Top Announcement Bar */}
      <div className="admin-card">
        <div className="card-header-flex">
          <div>
            <h3 className="card-title">Üst Duyuru / Kampanya Çubuğu (Top Bar)</h3>
            <p className="admin-helper-text">Sitenin en üstünde yer alan duyuru veya kampanya bildirim şeridi.</p>
          </div>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={!!general.announcement?.enabled}
              onChange={(e) =>
                handleChange('announcement', {
                  ...(general.announcement || {}),
                  enabled: e.target.checked
                })
              }
            />
            <span>Duyuru Çubuğunu Göster</span>
          </label>
        </div>

        {general.announcement?.enabled && (
          <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div className="admin-field-group">
              <label className="admin-label">Duyuru Metni</label>
              <input
                type="text"
                value={general.announcement?.text || ''}
                onChange={(e) =>
                  handleChange('announcement', {
                    ...(general.announcement || {}),
                    text: e.target.value
                  })
                }
                className="admin-input"
                placeholder="🚀 Web3 ve AI Çözümlerimizle Tanışın!"
              />
            </div>
            <div className="form-grid-2">
              <div className="admin-field-group">
                <label className="admin-label">Duyuru Buton Metni</label>
                <input
                  type="text"
                  value={general.announcement?.buttonText || ''}
                  onChange={(e) =>
                    handleChange('announcement', {
                      ...(general.announcement || {}),
                      buttonText: e.target.value
                    })
                  }
                  className="admin-input"
                  placeholder="İncele"
                />
              </div>
              <div className="admin-field-group">
                <label className="admin-label">Duyuru Buton Linki</label>
                <PageSelector
                  value={general.announcement?.buttonUrl || '/projelerimiz'}
                  onChange={(val) =>
                    handleChange('announcement', {
                      ...(general.announcement || {}),
                      buttonUrl: val
                    })
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* SEO & Meta Settings */}
      <div className="admin-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <Globe size={20} style={{ color: 'var(--color-primary)' }} />
          <h3 className="card-title" style={{ margin: 0 }}>SEO & Arama Motoru Ayarları</h3>
        </div>
        <p className="admin-helper-text" style={{ marginBottom: '1.25rem' }}>
          Google ve sosyal medya platformlarında sitenizin nasıl görüneceğini belirleyin.
        </p>

        <div className="admin-field-group">
          <label className="admin-label">Tarayıcı Başlığı (Browser Title)</label>
          <input
            type="text"
            value={general.siteTitle || ''}
            onChange={(e) => handleChange('siteTitle', e.target.value)}
            className="admin-input"
            placeholder="Seebel Yazılım | Yeni Nesil Mobil ve Web Teknolojileri"
          />
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Site Açıklaması (Meta Description)</label>
          <textarea
            rows={3}
            value={general.seo?.metaDescription || ''}
            onChange={(e) =>
              handleChange('seo', {
                ...(general.seo || {}),
                metaDescription: e.target.value
              })
            }
            className="admin-input"
            placeholder="Seebel Yazılım - Canlı yayın, Kripto, Web3 ve Mobil Oyun odaklı..."
          />
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Anahtar Kelimeler (Meta Keywords)</label>
          <input
            type="text"
            value={general.seo?.metaKeywords || ''}
            onChange={(e) =>
              handleChange('seo', {
                ...(general.seo || {}),
                metaKeywords: e.target.value
              })
            }
            className="admin-input"
            placeholder="mobil uygulama, yazılım geliştirme, react native, flutter, web3"
          />
        </div>

        <ImageUploadField
          label="Sosyal Medya Paylaşım Görseli (OpenGraph / OG Image)"
          helperText="WhatsApp, Twitter veya Facebook'ta sitenizin linki paylaşıldığında çıkan kapak görseli."
          value={general.seo?.ogImage || ''}
          onChange={(url) =>
            handleChange('seo', {
              ...(general.seo || {}),
              ogImage: url
            })
          }
          placeholder="https://... veya dosya yükleyin"
        />
      </div>

      {/* Security PIN */}
      <div className="admin-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
          <Shield size={20} style={{ color: 'var(--color-primary)' }} />
          <h3 className="card-title" style={{ margin: 0 }}>Admin Paneli Güvenlik PIN'i</h3>
        </div>
        <p className="admin-helper-text" style={{ marginBottom: '1rem' }}>
          Admin paneline girerken istenecek erişim kodunu buradan belirleyebilirsiniz (Varsayılan: 1234).
        </p>
        <div style={{ maxWidth: '300px' }}>
          <input
            type="password"
            value={general.adminPin || ''}
            onChange={(e) => handleChange('adminPin', e.target.value)}
            className="admin-input"
            placeholder="PIN Kodu (Örn: 1234)"
          />
        </div>
      </div>
    </div>
  );
};


export default GeneralTab;
