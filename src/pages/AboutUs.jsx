import React from 'react';
import { Target, Award, Users, Code } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const iconMap = {
  Code: Code,
  Users: Users,
  Target: Target,
  Award: Award
};

const getCultureIcon = (iconName) => {
  const IconComponent = iconMap[iconName] || Code;
  return <IconComponent style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />;
};

const AboutUs = () => {
  const { content } = useContent();
  const aboutUsPage = content?.aboutUsPage || {};
  const vision = aboutUsPage.vision || {};
  const mission = aboutUsPage.mission || {};
  const stats = aboutUsPage.stats || [];
  const culture = aboutUsPage.culture || [];

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem' }}>
      <div className="container">
        
        {/* Header Section */}
        <div className="text-center" style={{ marginBottom: '5rem' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}><span className="badge-dot"></span> {aboutUsPage.badge || 'Biz Kimiz?'}</div>
          <h1 className="section-title">
            {aboutUsPage.title || 'Teknolojiyi Sanata'}{' '}
            <span className="text-gradient">{aboutUsPage.titleHighlight || 'Dönüştürüyoruz'}</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {aboutUsPage.subtitle || 'Seebel Yazılım olarak, mobil teknoloji dünyasında sıradanlığı reddediyor; yüz binlerce kullanıcının aynı anda sorunsuz deneyim yaşadığı, yüksek performanslı ve premium uygulamalar geliştiriyoruz.'}
          </p>
        </div>

        {/* Vision & Mission */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', marginBottom: '6rem' }}>
          <div className="glass-panel" style={{ padding: '3rem' }}>
            <Target size={40} style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{vision.title || 'Vizyonumuz'}</h2>
            <p className="text-muted" style={{ lineHeight: '1.8' }}>
              {vision.description || "Türkiye'den çıkan ve global arenada milyonlarca aktif kullanıcıya hizmet veren, kendi kategorisinde dünya lideri mobil uygulama projelerinin mimarı olmak."}
            </p>
          </div>
          <div className="glass-panel" style={{ padding: '3rem' }}>
            <Award size={40} style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem' }} />
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{mission.title || 'Misyonumuz'}</h2>
            <p className="text-muted" style={{ lineHeight: '1.8' }}>
              {mission.description || "Müşterilerimizin fikirlerini, uçtan uca şifrelenmiş güvenlik altyapıları, düşük gecikmeli canlı yayın teknolojileri ve blockchain inovasyonları ile gerçeğe dönüştürmek."}
            </p>
          </div>
        </div>

        {/* Stats */}
        {stats.length > 0 && (
          <div className="glass-panel" style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', color: 'white', borderRadius: '30px', marginBottom: '6rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`, gap: '2rem', textAlign: 'center' }}>
              {stats.map((st, i) => (
                <div key={st.id || i}>
                  <h3 style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{st.value}</h3>
                  <p style={{ opacity: 0.9, fontSize: '1.1rem' }}>{st.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Culture */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem', alignItems: 'center' }}>
          <div className="text-center">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{aboutUsPage.cultureTitle || 'Çalışma Kültürümüz'}</h2>
            <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
              {aboutUsPage.cultureSubtitle || 'Sürekli öğrenen, yenilikleri kovalayan ve kod kalitesinden asla ödün vermeyen bir ekibiz.'}
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', width: '100%' }}>
            {culture.map((cul, idx) => (
              <div key={cul.id || idx} style={{ padding: '2rem', borderLeft: `4px solid ${idx % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)'}`, background: 'rgba(255,255,255,0.04)', borderRadius: '12px' }}>
                {getCultureIcon(cul.icon)}
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{cul.title}</h4>
                <p className="text-muted" style={{ fontSize: '0.9rem' }}>{cul.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;

