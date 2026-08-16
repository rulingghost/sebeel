import React from 'react';
import { Link2 } from 'lucide-react';

export const SITE_PAGES = [
  {
    category: 'Temel Sayfalar',
    pages: [
      { label: '🏠 Ana Sayfa', path: '/' },
      { label: 'ℹ️ Hakkımızda', path: '/hakkimizda' },
      { label: '👥 Ekibimiz', path: '/ekibimiz' },
      { label: '💼 Kariyer & İlanlar', path: '/kariyer' },
      { label: '📁 Projelerimiz & Portfolyo', path: '/projelerimiz' },
      { label: '✉️ İletişim', path: '/iletisim' },
    ]
  },
  {
    category: 'Hizmet Sayfaları',
    pages: [
      { label: '🛠️ Tüm Hizmetlerimiz', path: '/hizmetlerimiz' },
      { label: '📹 Canlı Yayın Platformları', path: '/hizmetler/canli-yayin' },
      { label: '🪙 Kripto ve Finans', path: '/hizmetler/kripto' },
      { label: '🎮 Mobil Oyunlar', path: '/hizmetler/oyun' },
      { label: '🎙️ Sesli Sohbet Odaları', path: '/hizmetler/sesli-sohbet' },
      { label: '💬 Chat & Mesajlaşma', path: '/hizmetler/chat' },
    ]
  },
  {
    category: 'Yasal & Kurumsal Sayfalar',
    pages: [
      { label: '⚖️ KVKK Aydınlatma Metni', path: '/yasal/kvkk' },
      { label: '🔒 Gizlilik Politikası', path: '/yasal/gizlilik-politikasi' },
      { label: '🍪 Çerez Politikası', path: '/yasal/cerez-politikasi' },
      { label: '📜 Kullanım Şartları', path: '/yasal/kullanim-sartlari' },
    ]
  }
];

const PageSelector = ({ value, onChange, placeholder = "Yönlendirme Adresi (/... veya https://)" }) => {
  // Check if current value matches one of the preset pages
  const isPreset = SITE_PAGES.some(group => group.pages.some(p => p.path === value));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        {/* Preset Selector Dropdown */}
        <select
          value={isPreset ? value : '__custom__'}
          onChange={(e) => {
            if (e.target.value !== '__custom__') {
              onChange(e.target.value);
            }
          }}
          className="admin-input"
          style={{
            flex: '1.2',
            background: 'rgba(30, 41, 59, 0.9)',
            borderColor: 'rgba(96, 165, 250, 0.3)',
            color: '#60a5fa',
            fontWeight: '500',
            cursor: 'pointer'
          }}
          title="Sitedeki hazır sayfalardan birini seçin"
        >
          <option value="__custom__">⚡ Hazır Sayfa Seçin...</option>
          {SITE_PAGES.map((group) => (
            <optgroup key={group.category} label={group.category}>
              {group.pages.map((page) => (
                <option key={page.path} value={page.path}>
                  {page.label} ({page.path})
                </option>
              ))}
            </optgroup>
          ))}
        </select>

        {/* Direct Path Input */}
        <div style={{ flex: '1.8', position: 'relative' }}>
          <input
            type="text"
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className="admin-input"
            placeholder={placeholder}
            style={{ width: '100%', paddingLeft: '2rem' }}
          />
          <Link2
            size={14}
            style={{
              position: 'absolute',
              left: '0.75rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#94a3b8'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PageSelector;
