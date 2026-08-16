import React from 'react';
import { Globe, Hash, Mail } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Team = () => {
  const { content } = useContent();
  const team = content?.team || {};
  const teamMembers = team.members || [];

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h1 className="section-title">
            {team.title || 'Yenilikçi'}{' '}
            <span className="text-gradient">{team.titleHighlight || 'Ekibimiz'}</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>
            {team.subtitle || 'Yüzlerce başarılı projeye imza atan, kendi alanında uzman, yenilikçi ve tutkulu profesyonellerden oluşan dev bir aileyiz.'}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
          {teamMembers.map((member, idx) => (
            <div key={member.id || idx} className="glass-panel" style={{ padding: '2rem', textAlign: 'center', transition: 'transform 0.3s' }}>
              <img 
                src={member.image || 'https://i.pravatar.cc/150?img=11'} 
                alt={member.name} 
                style={{ width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 1.5rem', objectFit: 'cover', border: '3px solid var(--color-primary)' }} 
              />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.2rem' }}>{member.name}</h3>
              <p className="text-muted" style={{ marginBottom: '1rem', fontWeight: '500' }}>{member.role}</p>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                {member.website && member.website !== '#' && (
                  <a href={member.website} target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}><Globe size={18} /></a>
                )}
                {member.twitter && member.twitter !== '#' && (
                  <a href={member.twitter} target="_blank" rel="noreferrer" style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}><Hash size={18} /></a>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`} style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}><Mail size={18} /></a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

