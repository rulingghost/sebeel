import React from 'react';
import { ShieldCheck, Zap, Globe, Users, Code, Target, Award } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import './About.css';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Globe: Globe,
  Users: Users,
  Code: Code,
  Target: Target,
  Award: Award
};

const getFeatureIcon = (iconName) => {
  const IconComponent = iconMap[iconName] || ShieldCheck;
  return <IconComponent className="feature-icon" />;
};

const About = () => {
  const { content } = useContent();
  const about = content?.about || {};
  const features = about.features || [];
  const stats = about.stats || [];
  const techStack = about.techStack || ['React', 'Node.js', 'WebRTC', 'Solidity'];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content animate-fade-in">
            <h2 className="section-title">
              {about.title || 'Neden'}{' '}
              <span className="text-gradient">{about.titleHighlight || 'Seebel Yazılım?'}</span>
            </h2>
            <p className="about-description">
              {about.description || "Biz sadece kod yazmıyoruz, dijital dünyada kalıcı izler bırakan, kullanıcıları kendine çeken deneyimler inşa ediyoruz. Yüksek performans, güvenlik ve göz alıcı tasarımlar DNA'mızda var."}
            </p>
            
            <div className="features-list">
              {features.map((item, index) => (
                <div key={item.id || index} className="feature-item glass-panel">
                  <div className="feature-icon-box">
                    {getFeatureIcon(item.icon)}
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-visual animate-fade-in animate-delay-2">
            <div className="about-image-wrapper glass-panel">
              {stats[0] && (
                <div className="stats-box sb-1 glass-panel">
                  <h3>{stats[0].value}</h3>
                  <p>{stats[0].label}</p>
                </div>
              )}
              {stats[1] && (
                <div className="stats-box sb-2 glass-panel">
                  <h3>{stats[1].value}</h3>
                  <p>{stats[1].label}</p>
                </div>
              )}
              <div className="circle-pattern"></div>
              {/* Teknoloji yığını (Tech Stack) */}
              <div className="tech-stack">
                {techStack.map((tech, i) => (
                  <div key={i} className="tech-logo">{tech}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

