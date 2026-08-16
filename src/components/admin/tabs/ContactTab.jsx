import React from 'react';
import { PhoneCall, Plus, Trash2 } from 'lucide-react';

const socialPlatforms = [
  { id: 'Globe', label: 'Web Sitesi / Link', icon: 'Globe' },
  { id: 'Twitter', label: 'X (Twitter)', icon: 'Hash' },
  { id: 'Instagram', label: 'Instagram', icon: 'Instagram' },
  { id: 'Linkedin', label: 'LinkedIn', icon: 'Linkedin' },
  { id: 'Discord', label: 'Discord', icon: 'MessageCircle' },
  { id: 'Github', label: 'GitHub', icon: 'Code' },
  { id: 'Email', label: 'E-Posta', icon: 'Mail' }
];


const ContactTab = ({ content, onChange }) => {
  const contact = content.contact || {};
  const socialLinks = contact.socialLinks || [];

  const updateContact = (newContact) => {
    onChange({
      ...content,
      contact: newContact
    });
  };

  const handleChange = (field, value) => {
    updateContact({
      ...contact,
      [field]: value
    });
  };

  const updateSocialLink = (index, field, value) => {
    const newLinks = [...socialLinks];
    newLinks[index] = {
      ...newLinks[index],
      [field]: value
    };
    updateContact({
      ...contact,
      socialLinks: newLinks
    });
  };

  const addSocialLink = () => {
    const newLink = {
      id: `soc-${Date.now()}`,
      platform: 'Twitter',
      label: 'X / Twitter',
      url: 'https://twitter.com',
      icon: 'Hash'
    };
    updateContact({
      ...contact,
      socialLinks: [...socialLinks, newLink]
    });
  };

  const removeSocialLink = (index) => {
    updateContact({
      ...contact,
      socialLinks: socialLinks.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="admin-tab-content">
      <div className="tab-header">
        <div className="tab-icon-box">
          <PhoneCall size={22} />
        </div>
        <div>
          <h2>İletişim & Sosyal Medya Yönetimi</h2>
          <p>İletişim sayfasında ve sitenin alt bilgi alanında yer alan telefon, adres ve sosyal medya hesaplarını yönetin.</p>
        </div>
      </div>

      <div className="admin-card">
        <h3 className="card-title">İletişim Sayfası Başlıkları</h3>
        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Üst Rozet (Badge)</label>
            <input
              type="text"
              value={contact.badge || ''}
              onChange={(e) => handleChange('badge', e.target.value)}
              className="admin-input"
              placeholder="Bize Ulaşın"
            />
          </div>
          <div className="admin-field-group">
            <label className="admin-label">Ana Başlık</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="text"
                value={contact.title || ''}
                onChange={(e) => handleChange('title', e.target.value)}
                className="admin-input"
                placeholder="Projelerinizi"
              />
              <input
                type="text"
                value={contact.titleHighlight || ''}
                onChange={(e) => handleChange('titleHighlight', e.target.value)}
                className="admin-input"
                placeholder="Hayata Geçirelim"
              />
            </div>
          </div>
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Alt Açıklama Metni</label>
          <textarea
            rows={2}
            value={contact.subtitle || ''}
            onChange={(e) => handleChange('subtitle', e.target.value)}
            className="admin-input"
            placeholder="Yeni nesil mobil uygulama fikriniz mi var..."
          />
        </div>
      </div>

      <div className="admin-card">
        <h3 className="card-title">İletişim Kanalları ve Adres</h3>
        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">E-Posta Adresi</label>
            <input
              type="email"
              value={contact.email || ''}
              onChange={(e) => handleChange('email', e.target.value)}
              className="admin-input"
              placeholder="hello@seebelyazilim.com"
            />
          </div>

          <div className="admin-field-group">
            <label className="admin-label">Telefon Numarası</label>
            <input
              type="text"
              value={contact.phone || ''}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="admin-input"
              placeholder="+90 (555) 123 45 67"
            />
          </div>
        </div>

        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Merkez Ofis Adresi</label>
            <input
              type="text"
              value={contact.address || ''}
              onChange={(e) => handleChange('address', e.target.value)}
              className="admin-input"
              placeholder="Büyükdere Cad. No: 123, Levent, Beşiktaş / İstanbul"
            />
          </div>

          <div className="admin-field-group">
            <label className="admin-label">Çalışma Saatleri</label>
            <input
              type="text"
              value={contact.workingHours || ''}
              onChange={(e) => handleChange('workingHours', e.target.value)}
              className="admin-input"
              placeholder="Hafta içi 09:00 - 18:00"
            />
          </div>
        </div>
      </div>

      {/* Contact Form Settings */}
      <div className="admin-card">
        <h3 className="card-title">İletişim Formu Ayarları & Metinleri</h3>
        <p className="admin-helper-text" style={{ marginBottom: '1.25rem' }}>
          Ziyaretçilerin size mesaj gönderdiği formun başlıkları ve seçenekleri.
        </p>

        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Form Başlığı</label>
            <input
              type="text"
              value={contact.form?.title || 'Mesaj Gönderin'}
              onChange={(e) =>
                handleChange('form', {
                  ...(contact.form || {}),
                  title: e.target.value
                })
              }
              className="admin-input"
            />
          </div>

          <div className="admin-field-group">
            <label className="admin-label">Gönder Buton Metni</label>
            <input
              type="text"
              value={contact.form?.buttonText || 'Mesajı Gönder'}
              onChange={(e) =>
                handleChange('form', {
                  ...(contact.form || {}),
                  buttonText: e.target.value
                })
              }
              className="admin-input"
            />
          </div>
        </div>

        <div className="form-grid-2">
          <div className="admin-field-group">
            <label className="admin-label">Başarılı Gönderim Başlığı</label>
            <input
              type="text"
              value={contact.form?.successTitle || '✓ Mesajınız Başarıyla Alındı!'}
              onChange={(e) =>
                handleChange('form', {
                  ...(contact.form || {}),
                  successTitle: e.target.value
                })
              }
              className="admin-input"
            />
          </div>

          <div className="admin-field-group">
            <label className="admin-label">Başarılı Gönderim Açıklaması</label>
            <input
              type="text"
              value={contact.form?.successSubtitle || 'Ekibimiz en kısa sürede sizinle iletişime geçecektir.'}
              onChange={(e) =>
                handleChange('form', {
                  ...(contact.form || {}),
                  successSubtitle: e.target.value
                })
              }
              className="admin-input"
            />
          </div>
        </div>

        <div className="admin-field-group">
          <label className="admin-label">Formdaki Hizmet Seçenekleri (Virgülle Ayırın)</label>
          <input
            type="text"
            value={(contact.form?.servicesList || ['Canlı Yayın Platformu', 'Kripto ve Fintek', 'Mobil Oyun', 'Sesli Sohbet / Chat', 'Diğer']).join(', ')}
            onChange={(e) => {
              const list = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
              handleChange('form', {
                ...(contact.form || {}),
                servicesList: list
              });
            }}
            className="admin-input"
            placeholder="Canlı Yayın Platformu, Kripto ve Fintek, Mobil Oyun..."
          />
        </div>
      </div>

      {/* Social Media Links */}
      <div className="admin-card">
        <div className="card-header-flex">
          <div>
            <h3 className="card-title">Sosyal Medya Hesapları ({socialLinks.length})</h3>
            <p className="admin-helper-text">Footer ve iletişim alanlarında gösterilecek bağlantılar.</p>
          </div>
          <button type="button" onClick={addSocialLink} className="btn-secondary">
            <Plus size={16} /> Yeni Hesap Ekle
          </button>
        </div>

        <div className="items-list">
          {socialLinks.map((soc, index) => (
            <div key={soc.id || index} className="social-edit-row glass-panel">
              <select
                value={soc.platform || 'Twitter'}
                onChange={(e) => {
                  const plat = socialPlatforms.find((p) => p.id === e.target.value);
                  updateSocialLink(index, 'platform', e.target.value);
                  if (plat) {
                    updateSocialLink(index, 'icon', plat.icon);
                  }
                }}
                className="admin-input"
                style={{ width: '180px' }}
              >
                {socialPlatforms.map((p) => (
                  <option key={p.id} value={p.id}>{p.label}</option>
                ))}
              </select>

              <input
                type="text"
                value={soc.label || ''}
                onChange={(e) => updateSocialLink(index, 'label', e.target.value)}
                className="admin-input"
                placeholder="Görünen İsim (Örn: X / Twitter)"
                style={{ width: '200px' }}
              />

              <input
                type="text"
                value={soc.url || ''}
                onChange={(e) => updateSocialLink(index, 'url', e.target.value)}
                className="admin-input flex-1"
                placeholder="https://..."
              />

              <button
                type="button"
                onClick={() => removeSocialLink(index)}
                className="btn-delete"
                title="Hesabı Sil"
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

export default ContactTab;
