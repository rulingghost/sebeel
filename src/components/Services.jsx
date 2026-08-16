import React from 'react';
import { Link } from 'react-router-dom';
import { Play, TrendingUp, Gamepad2, Mic, MessageSquare, Code, Shield, ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import './Services.css';

const iconMap = {
  Play: Play,
  TrendingUp: TrendingUp,
  Gamepad2: Gamepad2,
  Mic: Mic,
  MessageSquare: MessageSquare,
  Code: Code,
  Shield: Shield
};

const getServiceIcon = (iconName) => {
  const IconComponent = iconMap[iconName] || Code;
  return <IconComponent className="service-icon" />;
};

const Services = () => {
  const { content } = useContent();
  const servicesData = content?.services || {};
  const items = servicesData.items || [];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">
            {servicesData.sectionTitle || 'Uzmanlık'}{' '}
            <span className="text-gradient">{servicesData.sectionTitleHighlight || 'Alanlarımız'}</span>
          </h2>
          <p className="section-subtitle">
            {servicesData.sectionSubtitle || 'Sektördeki en zorlu ve rekabetçi alanlarda, küresel standartlarda mobil ürünler geliştiriyoruz.'}
          </p>
        </div>

        <div className="services-grid">
          {items.map((service, index) => {
            const cardColor = service.color || '#3b82f6';
            return (
              <div 
                key={service.id || index} 
                className="service-card glass-panel animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-image-container">
                  <div className="service-overlay" style={{ background: `linear-gradient(to top, var(--color-bg-base) 0%, transparent 100%)` }}></div>
                  {service.image ? (
                    <img src={service.image} alt={service.title} className="service-image" />
                  ) : (
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))' }} />
                  )}
                  <div className="service-icon-wrapper" style={{ boxShadow: `0 0 20px ${cardColor}40`, color: cardColor }}>
                    {getServiceIcon(service.icon)}
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  {service.path && (
                    <Link to={service.path} className="service-link" style={{ marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: cardColor, fontSize: '0.9rem', fontWeight: '600', textDecoration: 'none' }}>
                      Detayları Gör <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

