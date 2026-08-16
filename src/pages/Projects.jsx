import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const { content } = useContent();
  const projectsData = content?.projects || {};
  const projects = projectsData.items || [];
  const categories = projectsData.categories || [
    { id: 'all', label: 'Tümü' },
    { id: 'live', label: 'Canlı Yayın' },
    { id: 'crypto', label: 'Kripto & Fintek' },
    { id: 'game', label: 'Oyun' },
    { id: 'voice', label: 'Sesli Sohbet' },
    { id: 'chat', label: 'Mesajlaşma' }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h1 className="section-title">
            {projectsData.sectionTitle || 'Tamamlanan'}{' '}
            <span className="text-gradient">{projectsData.sectionTitleHighlight || 'Projelerimiz'}</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {projectsData.sectionSubtitle || 'Farklı sektörlerde, global standartlarda geliştirip yayınladığımız bazı örnek mobil uygulama projelerimizi inceleyin.'}
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          {categories.map(f => (
            <button 
              key={f.id} 
              onClick={() => setFilter(f.id)}
              className={`btn ${filter === f.id ? 'btn-primary' : 'btn-outline'}`}
              style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {filteredProjects.map((project, idx) => (
            <div key={project.id || idx} className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                {project.image ? (
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="project-img" />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(59,130,246,0.1), rgba(236,72,153,0.1))' }} />
                )}
              </div>
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p className="text-muted" style={{ marginBottom: '1.5rem', flex: 1 }}>{project.desc}</p>
                
                {project.link?.startsWith('http') ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {project.buttonText || 'Projeyi İncele'} <ExternalLink size={16} />
                  </a>
                ) : (
                  <Link
                    to={project.link || '/iletisim'}
                    className="btn btn-outline"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    {project.buttonText || 'Projeyi İncele'} <ExternalLink size={16} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .project-img:hover { transform: scale(1.05); }
      `}</style>
    </div>
  );
};

export default Projects;

