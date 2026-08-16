import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ShieldCheck, Share2, Smartphone, Bot, Bell } from 'lucide-react';
import { useContent } from '../../context/ContentContext';

const iconMap = {
  MessageSquare, ShieldCheck, Share2, Smartphone, Bot, Bell
};

const getFeatureIcon = (iconName) => {
  const IconComponent = iconMap[iconName] || MessageSquare;
  return <IconComponent />;
};

const TextChat = () => {
  const { content } = useContent();
  const data = content?.serviceDetails?.textChat || {};
  const features = data.features || [];

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem' }}>
      {/* Hero Section */}
      <div className="container" style={{ marginBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="badge" style={{ marginBottom: '1.5rem', color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
              <span className="badge-dot" style={{ background: '#10b981', boxShadow: '0 0 10px #10b981' }}></span> {data.badge || 'İletişim & Güvenlik'}
            </div>
            <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
              {data.title || 'Uçtan Uca Şifreli'} <br/>
              <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #10b981, #047857)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {data.titleHighlight || 'Mesajlaşma & Chat'}
              </span>
            </h1>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              {data.subtitle || "WhatsApp ve Telegram standartlarında; uçtan uca şifrelemeye (E2EE) sahip, devasa medya dosyası gönderimi yapabilen, gruplar ve kanallar içeren hızlı mesajlaşma uygulamaları geliştiriyoruz."}
            </p>
            <Link to={data.buttonUrl || '/iletisim'} className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #10b981, #047857)', color: 'white', boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)' }}>
              {data.buttonText || 'Chat Çözümünü Keşfedin'}
            </Link>
          </div>
          <div style={{ position: 'relative' }}>
            <img src={data.image || "/images/chat_app_1784991472725.png"} alt="Chat App" style={{ width: '100%', borderRadius: '30px', boxShadow: '0 20px 40px rgba(16, 185, 129, 0.2)' }} />
            <div className="glass-panel" style={{ position: 'absolute', bottom: '20px', right: '-20px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(15,23,42,0.95)' }}>
              <MessageSquare style={{ color: '#10b981' }} />
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{data.statLabel || 'Güvenlik Standardı'}</p>
                <p style={{ fontWeight: 'bold' }}>{data.statValue || 'E2E Encrypted'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div style={{ background: 'var(--color-bg-glass)', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2>{data.featuresTitle || 'Haberleşme Mimarisi'}</h2>
            <p className="text-muted">{data.featuresSubtitle || 'Güvenli, hızlı ve multimedya odaklı haberleşme standartları.'}</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {features.map((feat, i) => (
              <div key={feat.id || i} className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ color: '#10b981', marginBottom: '1.5rem' }}>{getFeatureIcon(feat.icon)}</div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{feat.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.95rem' }}>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextChat;

