import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const FAQ = () => {
  const { content } = useContent();
  const faq = content?.faq || {};
  const items = faq.items || [];
  const [openIndex, setOpenIndex] = useState(0);

  if (items.length === 0) return null;

  return (
    <section className="faq-section" style={{ padding: '6rem 0 8rem', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}>
            <HelpCircle size={14} /> {faq.badge || 'Merak Edilenler'}
          </div>
          <h2 className="section-title">
            {faq.title || 'Sıkça Sorulan'}{' '}
            <span className="text-gradient">{faq.titleHighlight || 'Sorular'}</span>
          </h2>
          <p className="section-subtitle">
            {faq.subtitle || 'Proje süreçlerimiz, teknolojilerimiz ve iş birliği modellerimiz hakkında en çok sorulan soruların yanıtları.'}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id || index}
                className="glass-panel"
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: isOpen ? '1px solid var(--color-border-glow)' : '1px solid var(--color-border)',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  style={{
                    width: '100%',
                    padding: '1.4rem 1.75rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '1.05rem',
                    fontWeight: '600',
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: isOpen ? '#60a5fa' : '#94a3b8',
                      flexShrink: 0,
                      marginLeft: '1rem'
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.75rem 1.5rem',
                      color: '#cbd5e1',
                      fontSize: '0.95rem',
                      lineHeight: '1.8',
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                      paddingTop: '1rem'
                    }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
