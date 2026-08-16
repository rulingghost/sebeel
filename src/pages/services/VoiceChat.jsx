import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, Headphones, Users, RadioTower, ShieldAlert, Settings, Shield } from 'lucide-react';
import { useContent } from '../../context/ContentContext';

const iconMap = {
  Mic, Headphones, Users, RadioTower, ShieldAlert, Settings, Shield
};

const getFeatureIcon = (iconName) => {
  const IconComponent = iconMap[iconName] || Mic;
  return <IconComponent />;
};

const VoiceChat = () => {
  const { content } = useContent();
  const data = content?.serviceDetails?.voiceChat || {};
  const features = data.features || [];

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem' }}>
      {/* Hero Section */}
      <div className="container" style={{ marginBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="badge" style={{ marginBottom: '1.5rem', color: '#f43f5e', borderColor: 'rgba(244, 63, 94, 0.2)' }}>
              <span className="badge-dot" style={{ background: '#f43f5e', boxShadow: '0 0 10px #f43f5e' }}></span> {data.badge || 'Ses & Topluluk'}
            </div>
            <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
              {data.title || 'Kristal Netliğinde'} <br/>
              <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #f43f5e, #be185d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {data.titleHighlight || 'Sesli Sohbet Odaları'}
              </span>
            </h1>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              {data.subtitle || "Clubhouse ve Discord benzeri, yüzlerce kişinin aynı anda konuşabildiği, yapay zeka gürültü filtreleme teknolojili sesli topluluk uygulamaları."}
            </p>
            <Link to={data.buttonUrl || '/iletisim'} className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #f43f5e, #be185d)', color: 'white', boxShadow: '0 4px 15px rgba(225, 29, 72, 0.3)' }}>
              {data.buttonText || 'Ses Altyapısını İnceleyin'}
            </Link>
          </div>
          <div style={{ position: 'relative' }}>
            <img src={data.image || "/images/voice_chat_app_1784991462257.png"} alt="Voice Chat App" style={{ width: '100%', borderRadius: '30px', boxShadow: '0 20px 40px rgba(225, 29, 72, 0.2)' }} />
            <div className="glass-panel" style={{ position: 'absolute', top: '50%', right: '-40px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(15,23,42,0.95)', transform: 'translateY(-50%)' }}>
              <Headphones style={{ color: '#f43f5e' }} />
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{data.statLabel || 'Gecikme Süresi'}</p>
                <p style={{ fontWeight: 'bold' }}>{data.statValue || '< 150ms'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div style={{ background: 'var(--color-bg-glass)', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2>{data.featuresTitle || 'Akustik ve Ses Teknolojileri'}</h2>
            <p className="text-muted">{data.featuresSubtitle || 'Gelişmiş ses kodekleri ve oda moderasyon sistemleri.'}</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {features.map((feat, i) => (
              <div key={feat.id || i} className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ color: '#f43f5e', marginBottom: '1.5rem' }}>{getFeatureIcon(feat.icon)}</div>
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

export default VoiceChat;

