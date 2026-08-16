import React from 'react';
import { Link } from 'react-router-dom';
import { Bitcoin, Lock, LineChart, Wallet, ShieldCheck, Cpu } from 'lucide-react';
import { useContent } from '../../context/ContentContext';

const iconMap = {
  Bitcoin, Lock, LineChart, Wallet, ShieldCheck, Cpu
};

const getFeatureIcon = (iconName) => {
  const IconComponent = iconMap[iconName] || Lock;
  return <IconComponent />;
};

const Crypto = () => {
  const { content } = useContent();
  const data = content?.serviceDetails?.crypto || {};
  const features = data.features || [];

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem' }}>
      {/* Hero Section */}
      <div className="container" style={{ marginBottom: '5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="badge" style={{ marginBottom: '1.5rem', color: '#d97706', borderColor: 'rgba(217, 119, 6, 0.2)' }}>
              <span className="badge-dot" style={{ background: '#d97706', boxShadow: '0 0 10px #d97706' }}></span> {data.badge || 'Finans & Web3'}
            </div>
            <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
              {data.title || 'Geleceğin'} <br/>
              <span className="text-gradient" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {data.titleHighlight || 'Kripto & Fintek'}
              </span> <br/>Uygulamaları
            </h1>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              {data.subtitle || "Bankacılık standartlarında güvenlik, sıfır veri kaybı ve mikrosaniye hızında emir işleme motorlarıyla donatılmış yeni nesil kripto para borsaları ve DeFi cüzdan uygulamaları geliştiriyoruz."}
            </p>
            <Link to={data.buttonUrl || '/iletisim'} className="btn btn-primary" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)', color: 'white', boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)' }}>
              {data.buttonText || 'Uzmanla Görüş'}
            </Link>
          </div>
          <div style={{ position: 'relative' }}>
            <img src={data.image || "/images/crypto_app_1784991420700.png"} alt="Crypto App" style={{ width: '100%', borderRadius: '30px', boxShadow: '0 20px 40px rgba(245, 158, 11, 0.2)' }} />
            <div className="glass-panel" style={{ position: 'absolute', top: '20px', right: '-20px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(15,23,42,0.95)' }}>
              <Bitcoin style={{ color: '#f59e0b' }} />
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>{data.statLabel || 'Anlık İşlem Hacmi'}</p>
                <p style={{ fontWeight: 'bold' }}>{data.statValue || '$2.4M / sn'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div style={{ background: 'var(--color-bg-glass)', padding: '5rem 0' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2>{data.featuresTitle || 'Finansal Altyapı Özellikleri'}</h2>
            <p className="text-muted">{data.featuresSubtitle || 'En yüksek güvenlik standartları ve modern finans teknolojileri (FinTech).'}</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {features.map((feat, i) => (
              <div key={feat.id || i} className="glass-panel" style={{ padding: '2rem' }}>
                <div style={{ color: '#d97706', marginBottom: '1.5rem' }}>{getFeatureIcon(feat.icon)}</div>
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

export default Crypto;

