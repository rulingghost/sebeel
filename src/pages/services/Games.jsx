import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Zap, Users, Globe2, MonitorSmartphone, Trophy, Shield } from 'lucide-react';
import { useContent } from '../../context/ContentContext';

const iconMap = {
  Gamepad2, Zap, Users, Globe2, MonitorSmartphone, Trophy, Shield
};

const getFeatureIcon = (iconName) => {
  const IconComponent = iconMap[iconName] || Gamepad2;
  return <IconComponent />;
};

const Games = () => {
  const { content } = useContent();
  const data = content?.serviceDetails?.games || {};
  const features = data.features || [];

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem' }}>
      {/* Hero Section */}
      <div className="container" style={{ marginBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="badge" style={{ marginBottom: '1.5rem', color: '#8b5cf6', borderColor: 'rgba(139, 92, 246, 0.2)' }}>
              <span className="badge-dot" style={{ background: '#8b5cf6', boxShadow: '0 0 10px #8b5cf6' }}></span> {data.badge || 'Oyun & Eğlence'}
            </div>
            <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
              {data.title || 'Yüksek Kaliteli'} <br/>
              <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {data.titleHighlight || 'Mobil Oyunlar'}
              </span>
            </h1>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              {data.subtitle || "Unity ve Unreal Engine altyapılarıyla, yüksek kare hızlarına (FPS) sahip, küresel çapta çok oyunculu (Multiplayer) ve sürükleyici mobil oyunlar geliştiriyoruz."}
            </p>
            <Link to={data.buttonUrl || '/iletisim'} className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)', color: 'white', boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)' }}>
              {data.buttonText || 'Oyun Projenizi Başlatın'}
            </Link>
          </div>
          <div style={{ position: 'relative' }}>
            <img src={data.image || "/images/game_app_1784991440781.png"} alt="Mobile Game App" style={{ width: '100%', borderRadius: '30px', boxShadow: '0 20px 40px rgba(124, 58, 237, 0.2)' }} />
            <div className="glass-panel" style={{ position: 'absolute', bottom: '10%', left: '-30px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(15,23,42,0.95)' }}>
              <Zap style={{ color: '#8b5cf6' }} />
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{data.statLabel || 'Performans'}</p>
                <p style={{ fontWeight: 'bold' }}>{data.statValue || '60 FPS'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div style={{ background: 'var(--color-bg-glass)', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2>{data.featuresTitle || 'Oyun Geliştirme Dinamikleri'}</h2>
            <p className="text-muted">{data.featuresSubtitle || 'Sıfır gecikmeli sunucu senkronizasyonu ve göz alıcı görsel efektler.'}</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {features.map((feat, i) => (
              <div key={feat.id || i} className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ color: '#8b5cf6', marginBottom: '1.5rem' }}>{getFeatureIcon(feat.icon)}</div>
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

export default Games;

