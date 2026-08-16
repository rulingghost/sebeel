import React, { useState, useEffect } from 'react';
import { ArrowRight, Smartphone, Shield, Radio, Sparkles, Zap, Globe, Gamepad2, ChevronRight, ChevronLeft } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import './Hero.css';

const iconMap = {
  Smartphone: Smartphone,
  Shield: Shield,
  Radio: Radio,
  Sparkles: Sparkles,
  Zap: Zap,
  Globe: Globe,
  Gamepad2: Gamepad2
};

const getSlideIcon = (iconName) => {
  const IconComponent = iconMap[iconName] || Smartphone;
  return <IconComponent className="slide-icon" />;
};

const Hero = () => {
  const { content } = useContent();
  const slides = content?.hero?.slides || [];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const nextSlide = () => {
    if (isAnimating || slides.length <= 1) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating || slides.length <= 1) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev <= 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const setSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  if (!slides || slides.length === 0) return null;
  const activeSlide = slides[currentSlide] || slides[0];

  return (
    <section id="hero" className={`hero theme-${activeSlide.theme || 'blue'}`}>
      <div className="hero-background-slider">
        <div className="glow-sphere sphere-1"></div>
        <div className="glow-sphere sphere-2"></div>
        <div className="grid-overlay"></div>
      </div>
      
      <div className="container hero-container">
        {slides.map((slide, index) => {
          const slideIcon = getSlideIcon(slide.icon);
          return (
            <div 
              key={slide.id || index}
              className={`slide-content ${index === currentSlide ? 'active' : ''} ${isAnimating && index !== currentSlide ? 'exiting' : ''}`}
            >
              <div className="hero-text-content">
                <div className="badge animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <span className="badge-dot"></span>
                  {slide.badge}
                </div>
                
                <h1 className="hero-title animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  {(slide.title || '').split(' ').map((word, i, arr) => {
                    if (i >= arr.length - 2) {
                      return <span key={i} className="text-gradient"> {word}</span>;
                    }
                    return <span key={i}> {word}</span>;
                  })}
                </h1>
                
                <p className="hero-subtitle animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  {slide.subtitle}
                </p>
                
                <div className="hero-actions animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <a href={slide.primaryButtonUrl || '#services'} className="btn btn-primary">
                    {slide.primaryButton || 'Hemen Başlayın'} <ArrowRight size={20} />
                  </a>
                  <a href={slide.secondaryButtonUrl || '#contact'} className="btn btn-outline">
                    {slide.secondaryButton || 'İletişim'}
                  </a>
                </div>
                
                <div className="hero-stats animate-slide-up" style={{ animationDelay: '0.5s' }}>
                  {slide.stats?.map((stat, i) => (
                    <div key={i} className="stat-item">
                      <div className="stat-icon-wrapper">
                        {i === 0 ? slideIcon : <div className="stat-dot"></div>}
                      </div>
                      <div>
                        <h4>{stat.value}</h4>
                        <p>{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-visual animate-fade-in-right">
                {slide.image ? (
                  <div className="slider-mockup glass-panel" style={{ overflow: 'hidden', padding: 0 }}>
                    <img src={slide.image} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                ) : (
                  <div className="slider-mockup glass-panel">
                    <div className="mockup-header">
                      <div className="mockup-dot red"></div>
                      <div className="mockup-dot yellow"></div>
                      <div className="mockup-dot green"></div>
                    </div>
                    <div className="mockup-inner">
                      <div className="mockup-icon-large glass-panel">
                        {slideIcon}
                      </div>
                      <div className="mockup-lines">
                        <div className="m-line w-3/4"></div>
                        <div className="m-line w-full"></div>
                        <div className="m-line w-1/2"></div>
                      </div>
                      <div className="mockup-cards-mini">
                        <div className="m-card"></div>
                        <div className="m-card"></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="floating-badge fb-1 glass-panel">
                  <span className="fb-dot"></span> {slide.badge1Text || 'Özel Çözümler'}
                </div>
                <div className="floating-badge fb-2 glass-panel">
                  <span className="fb-dot"></span> {slide.badge2Text || 'App Store Ready'}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {slides.length > 1 && (
        <div className="slider-controls">
          <button className="slider-arrow" onClick={prevSlide} aria-label="Önceki">
            <ChevronLeft size={24} />
          </button>
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button 
                key={index} 
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setSlide(index)}
                aria-label={`Slayt ${index + 1}`}
              ></button>
            ))}
          </div>
          <button className="slider-arrow" onClick={nextSlide} aria-label="Sonraki">
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Hero;

