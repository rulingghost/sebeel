import React from 'react';
import Services from '../components/Services';
import { useContent } from '../context/ContentContext';

const ServicesPage = () => {
  const { content } = useContent();
  const servicesPage = content?.servicesPage || {};

  return (
    <div style={{ paddingTop: '80px' }}>
      <div className="container text-center" style={{ paddingTop: '4rem' }}>
        <h1 className="section-title">
          {servicesPage.title || 'Tüm'}{' '}
          <span className="text-gradient">{servicesPage.titleHighlight || 'Hizmetlerimiz'}</span>
        </h1>
        <p className="section-subtitle" style={{ maxWidth: '800px', margin: '1rem auto 2rem' }}>
          {servicesPage.subtitle || 'Uçtan uca çözümler ürettiğimiz uygulama ekosistemlerini detaylıca inceleyin.'}
        </p>
      </div>
      <Services />
    </div>
  );
};

export default ServicesPage;

