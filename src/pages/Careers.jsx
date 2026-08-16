import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Careers = () => {
  const { content } = useContent();
  const careers = content?.careers || {};
  const jobs = careers.jobs || [];

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h1 className="section-title">
            {careers.title || 'Geleceği Birlikte'}{' '}
            <span className="text-gradient">{careers.titleHighlight || 'Kodlayalım'}</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {careers.subtitle || 'Teknolojinin sınırlarını zorlayan projelerde yer almak ve küresel çapta etki yaratacak mobil uygulamalar geliştirmek istiyorsanız, Seebel Yazılım ailesine katılın.'}
          </p>
        </div>

        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>{careers.positionsTitle || 'Açık Pozisyonlar'}</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {jobs.map((job, idx) => (
              <div key={job.id || idx} className="glass-panel" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '0.8rem', color: 'var(--color-text-main)' }}>{job.title}</h3>
                  <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Briefcase size={16} /> {job.type}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><MapPin size={16} /> {job.location}</span>
                    {job.department && (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>• {job.department}</span>
                    )}
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Clock size={16} /> {job.timeText || 'Aktif İlan'}</span>
                  </div>
                </div>
                <a
                  href={`mailto:${careers.applyEmail || 'kariyer@seebelyazilim.com'}?subject=Basvuru: ${encodeURIComponent(job.title)}`}
                  className="btn btn-outline"
                >
                  {careers.applyButtonText || 'Başvur'} <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;

