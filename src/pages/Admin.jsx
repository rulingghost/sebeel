import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import GeneralTab from '../components/admin/tabs/GeneralTab';
import MenuTab from '../components/admin/tabs/MenuTab';
import HeroTab from '../components/admin/tabs/HeroTab';
import ServicesTab from '../components/admin/tabs/ServicesTab';
import ServiceDetailsTab from '../components/admin/tabs/ServiceDetailsTab';
import AboutTab from '../components/admin/tabs/AboutTab';
import TeamTab from '../components/admin/tabs/TeamTab';
import CareersTab from '../components/admin/tabs/CareersTab';
import ProjectsTab from '../components/admin/tabs/ProjectsTab';
import TestimonialsTab from '../components/admin/tabs/TestimonialsTab';
import FAQTab from '../components/admin/tabs/FAQTab';
import ContactTab from '../components/admin/tabs/ContactTab';
import LegalTab from '../components/admin/tabs/LegalTab';
import FooterTab from '../components/admin/tabs/FooterTab';

import {
  Settings,
  Compass,
  Sparkles,
  Layers,
  Sliders,
  Info,
  Users,
  Briefcase,
  FolderGit2,
  PhoneCall,
  PanelBottom,
  Save,
  RotateCcw,
  ExternalLink,
  Lock,
  Unlock,
  CheckCircle2,
  AlertCircle,
  Database,
  Loader2,
  Search,
  MessageSquareQuote,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import './Admin.css';

const tabs = [
  { id: 'general', label: 'Genel & Logo', icon: Settings, category: 'Temel', previewPath: '/' },
  { id: 'menu', label: 'Menü & Navigasyon', icon: Compass, category: 'Navigasyon', previewPath: '/' },
  { id: 'hero', label: 'Hero & Slaytlar', icon: Sparkles, category: 'Ana Sayfa', previewPath: '/' },
  { id: 'services', label: 'Hizmetler (Genel)', icon: Layers, category: 'Hizmetler', previewPath: '/hizmetlerimiz' },
  { id: 'serviceDetails', label: 'Hizmet Alt Sayfaları', icon: Sliders, category: 'Hizmetler', previewPath: '/hizmetler/canli-yayin' },
  { id: 'about', label: 'Hakkımızda & Kurumsal', icon: Info, category: 'Kurumsal', previewPath: '/hakkimizda' },
  { id: 'team', label: 'Ekibimiz Sayfası', icon: Users, category: 'Kurumsal', previewPath: '/ekibimiz' },
  { id: 'careers', label: 'Kariyer & İlanlar', icon: Briefcase, category: 'Kurumsal', previewPath: '/kariyer' },
  { id: 'projects', label: 'Projeler & Referanslar', icon: FolderGit2, category: 'İçerik', previewPath: '/projelerimiz' },
  { id: 'testimonials', label: 'Müşteri Yorumları', icon: MessageSquareQuote, category: 'İçerik', previewPath: '/' },
  { id: 'faq', label: 'Sıkça Sorulan Sorular', icon: HelpCircle, category: 'İçerik', previewPath: '/' },
  { id: 'contact', label: 'İletişim & Sosyal Medya', icon: PhoneCall, category: 'İletişim', previewPath: '/iletisim' },
  { id: 'legal', label: 'Yasal Sayfalar & KVKK', icon: ShieldCheck, category: 'Yasal', previewPath: '/yasal/kvkk' },
  { id: 'footer', label: 'Footer & Telif', icon: PanelBottom, category: 'Temel', previewPath: '/' },
];


const Admin = () => {
  const {
    content,
    setContent,
    saveContent,
    resetToDefaults,
    isSaving,
    saveStatus,
    dataSource
  } = useContent();

  const [activeTab, setActiveTab] = useState('general');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [authError, setAuthError] = useState('');
  const [tabFilter, setTabFilter] = useState('');

  const activeTabMeta = tabs.find(t => t.id === activeTab);

  // PIN Login
  const correctPin = content?.general?.adminPin || '1234';

  const handleLogin = (e) => {
    e.preventDefault();
    if (enteredPin === correctPin || enteredPin === '1234') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Hatalı PIN kodu! (Varsayılan PIN: 1234)');
    }
  };

  const handleSave = async () => {
    await saveContent(content);
  };

  const filteredTabs = tabs.filter((t) =>
    t.label.toLowerCase().includes(tabFilter.toLowerCase()) ||
    t.category.toLowerCase().includes(tabFilter.toLowerCase())
  );

  // Auth Screen
  if (!isAuthenticated) {
    return (
      <div className="admin-auth-wrapper">
        <div className="admin-auth-card glass-panel">
          <div className="admin-auth-icon">
            <Lock size={28} />
          </div>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontWeight: '700' }}>
            SEEBEL <span className="text-gradient">Admin Paneli</span>
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.75rem' }}>
            Site içeriklerini dinamik yönetmek için lütfen admin PIN kodunuzu girin.
          </p>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1.25rem' }}>
              <input
                type="password"
                value={enteredPin}
                onChange={(e) => {
                  setEnteredPin(e.target.value);
                  setAuthError('');
                }}
                placeholder="PIN Kodunu Girin (Varsayılan: 1234)"
                className="admin-input text-center"
                style={{ fontSize: '1.1rem', letterSpacing: '0.2em' }}
                autoFocus
              />
              {authError && <p className="admin-error-text mt-1">{authError}</p>}
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}
            >
              Giriş Yap <Unlock size={18} />
            </button>
          </form>

          <div style={{ marginTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem' }}>
            <Link to="/" style={{ color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none' }}>
              ← Ana Sayfaya Dön
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page-container">
      {/* Sticky Header Navbar */}
      <header className="admin-navbar">
        <div className="admin-nav-inner">
          <div className="admin-brand">
            <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
              <span className="logo-text">{content?.general?.logoText || 'SEEBEL'}</span>
              <span className="logo-dot">{content?.general?.logoDot || '.'}</span>
            </Link>
            <span style={{ fontSize: '0.85rem', color: '#9ca3af', fontWeight: '600' }}>
              Admin Paneli
            </span>
            <span className={`admin-badge-source ${dataSource === 'kv' ? 'kv' : ''}`}>
              <Database size={12} />
              {dataSource === 'kv' ? 'Vercel KV Aktif' : 'Yerel Veri (KV Hazır)'}
            </span>
          </div>

          <div className="admin-actions-header">
            {activeTabMeta?.previewPath && (
              <a
                href={activeTabMeta.previewPath}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                title={`${activeTabMeta.label} sayfasını canlı incele`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#60a5fa' }}
              >
                <ExternalLink size={14} /> Sayfada Gör
              </a>
            )}

            <Link to="/" target="_blank" rel="noreferrer" className="btn-secondary" title="Siteyi Yeni Sekmede İncele">
              <ExternalLink size={15} /> Siteyi Gör
            </Link>

            <button
              type="button"
              onClick={resetToDefaults}
              className="btn-secondary"
              title="Tüm ayarları orijinal varsayılana döndür"
            >
              <RotateCcw size={15} /> Sıfırla
            </button>

            <button
              type="button"
              onClick={handleSave}
              disabled={isSaving}
              className="btn-save-main"
            >
              {isSaving ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Kaydediliyor...
                </>
              ) : (
                <>
                  <Save size={16} /> Değişiklikleri Kaydet
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Layout */}
      <div className="admin-layout">
        {/* Left Tabs Sidebar */}
        <aside className="admin-sidebar glass-panel">
          {/* Quick Search */}
          <div style={{ position: 'relative', marginBottom: '0.75rem' }}>
            <Search size={14} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
            <input
              type="text"
              value={tabFilter}
              onChange={(e) => setTabFilter(e.target.value)}
              placeholder="Sekmelerde ara..."
              className="admin-input-mini"
              style={{ width: '100%', paddingLeft: '2rem' }}
            />
          </div>

          {filteredTabs.map((t) => {
            const Icon = t.icon;
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={`admin-tab-btn ${isActive ? 'active' : ''}`}
              >
                <span className="admin-tab-icon">
                  <Icon size={18} />
                </span>
                <span>{t.label}</span>
              </button>
            );
          })}
        </aside>

        {/* Right Active Tab Content */}
        <main className="admin-main-content">
          {/* Status Toast Banner */}
          {saveStatus && (
            <div className={`admin-toast-banner ${saveStatus.type}`}>
              {saveStatus.type === 'success' ? (
                <CheckCircle2 size={20} />
              ) : (
                <AlertCircle size={20} />
              )}
              <span>{saveStatus.message}</span>
            </div>
          )}

          {/* Active Tab View */}
          {activeTab === 'general' && (
            <GeneralTab content={content} onChange={setContent} />
          )}

          {activeTab === 'menu' && (
            <MenuTab content={content} onChange={setContent} />
          )}

          {activeTab === 'hero' && (
            <HeroTab content={content} onChange={setContent} />
          )}

          {activeTab === 'services' && (
            <ServicesTab content={content} onChange={setContent} />
          )}

          {activeTab === 'serviceDetails' && (
            <ServiceDetailsTab content={content} onChange={setContent} />
          )}

          {activeTab === 'about' && (
            <AboutTab content={content} onChange={setContent} />
          )}

          {activeTab === 'team' && (
            <TeamTab content={content} onChange={setContent} />
          )}

          {activeTab === 'careers' && (
            <CareersTab content={content} onChange={setContent} />
          )}

          {activeTab === 'projects' && (
            <ProjectsTab content={content} onChange={setContent} />
          )}

          {activeTab === 'testimonials' && (
            <TestimonialsTab content={content} onChange={setContent} />
          )}

          {activeTab === 'faq' && (
            <FAQTab content={content} onChange={setContent} />
          )}

          {activeTab === 'contact' && (
            <ContactTab content={content} onChange={setContent} />
          )}

          {activeTab === 'legal' && (
            <LegalTab content={content} onChange={setContent} />
          )}

          {activeTab === 'footer' && (
            <FooterTab content={content} onChange={setContent} />
          )}
        </main>
      </div>
    </div>
  );
};


export default Admin;
