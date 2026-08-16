import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Testimonials = () => {
  const { content } = useContent();
  const testimonials = content?.testimonials || {};
  const items = testimonials.items || [];

  if (items.length === 0) return null;

  return (
    <section className="testimonials-section" style={{ padding: '6rem 0 8rem', position: 'relative' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}>
            <MessageSquareQuote size={14} /> {testimonials.badge || 'Referans Görüşleri'}
          </div>
          <h2 className="section-title">
            {testimonials.title || 'Müşterilerimiz'}{' '}
            <span className="text-gradient">{testimonials.titleHighlight || 'Ne Diyor?'}</span>
          </h2>
          <p className="section-subtitle">
            {testimonials.subtitle || 'Birlikte global başarılara imza attığımız iş ortaklarımızın ve girişimcilerin deneyimleri.'}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
          {items.map((item, index) => (
            <div
              key={item.id || index}
              className="glass-panel"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '18px'
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', color: '#f59e0b', marginBottom: '1.25rem' }}>
                {[...Array(item.rating || 5)].map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" />
                ))}
              </div>

              {/* Comment */}
              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: '1.75', marginBottom: '2rem', fontStyle: 'italic' }}>
                "{item.comment}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.25rem' }}>
                <img
                  src={item.avatar || 'https://i.pravatar.cc/150'}
                  alt={item.name}
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--color-primary)' }}
                />
                <div>
                  <h4 style={{ fontSize: '1.05rem', margin: 0, color: '#ffffff' }}>{item.name}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0.15rem 0 0' }}>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
