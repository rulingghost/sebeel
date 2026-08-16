import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Users, Zap, Shield, Video, Server, Sparkles } from 'lucide-react';
import { useContent } from '../../context/ContentContext';

const iconMap = {
  Play, Users, Zap, Shield, Video, Server, Sparkles
};

const getFeatureIcon = (iconName) => {
  const IconComponent = iconMap[iconName] || Zap;
  return <IconComponent />;
};

const LiveStream = () => {
  const { content } = useContent();
  const data = content?.serviceDetails?.liveStream || {};
  const features = data.features || [];

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem' }}>
      {/* Hero Section */}
      <div className="container" style={{ marginBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="badge" style={{ marginBottom: '1.5rem' }}>
              <span className="badge-dot" style={{ background: '#ec4899' }}></span> {data.badge || 'Medya & Eğlence'}
            </div>
            <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
              {data.title || 'Kesintisiz'} <br/>
              <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #ec4899, #be185d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {data.titleHighlight || 'Canlı Yayın'}
              </span> <br/>Platformları
            </h1>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              {data.subtitle || "Milyonlarca anlık izleyiciyi destekleyen, ultra düşük gecikmeli (Ultra-Low Latency) ve 4K çözünürlüğe kadar yayın kalitesi sunan mobil yayın platformları tasarlıyoruz."}
            </p>
            <Link to={data.buttonUrl || '/iletisim'} className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #ec4899, #be185d)', color: 'white' }}>
              {data.buttonText || 'Demo Talep Et'}
            </Link>
          </div>
          <div style={{ position: 'relative' }}>
            <img src={data.image || "/images/live_stream_app_1784991404839.png"} alt="Live Stream App" style={{ width: '100%', borderRadius: '30px', boxShadow: '0 20px 40px rgba(236, 72, 153, 0.2)' }} />
            <div className="glass-panel" style={{ position: 'absolute', bottom: '-20px', left: '-20px', padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ec4899' }}></div>
              <span style={{ fontWeight: 'bold' }}>{data.statValue || '100K+'} {data.statLabel || 'Anlık İzleyici Kapasitesi'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div style={{ background: 'var(--color-bg-glass)', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2>{data.featuresTitle || 'Teknolojik Altyapımız'}</h2>
            <p className="text-muted">{data.featuresSubtitle || 'Gelişmiş protokoller ve bulut mimarisi ile kusursuz yayın kalitesi.'}</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {features.map((feat, i) => (
              <div key={feat.id || i} className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ color: '#ec4899', marginBottom: '1.5rem' }}>{getFeatureIcon(feat.icon)}</div>
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

export default LiveStream;

