import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Shield, FileText, ArrowLeft, Clock } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Legal = () => {
  const { slug } = useParams();
  const { content } = useContent();
  const legal = content?.legal || {};

  // Map slug to legal key
  let legalKey = 'kvkk';
  if (slug === 'cerez-politikasi' || slug === 'cerez') legalKey = 'cookies';
  else if (slug === 'gizlilik-politikasi' || slug === 'gizlilik') legalKey = 'privacy';
  else if (slug === 'kullanim-sartlari' || slug === 'kullanim') legalKey = 'terms';
  else if (slug === 'kvkk') legalKey = 'kvkk';

  const doc = legal[legalKey] || legal.kvkk || {};

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '6rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--color-primary)', marginBottom: '2rem', fontSize: '0.9rem', fontWeight: '600' }}>
          <ArrowLeft size={16} /> Ana Sayfaya Dön
        </Link>

        <div className="text-center" style={{ marginBottom: '3.5rem' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}>
            <Shield size={14} /> Yasal & Kurumsal
          </div>
          <h1 className="section-title">{doc.title || 'Yasal Bilgilendirme'}</h1>
          <p className="section-subtitle">{doc.subtitle || 'Kişisel verilerinizin ve yasal haklarınızın korunmasına ilişkin bildirim.'}</p>
          {doc.lastUpdated && (
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}>
              <Clock size={14} /> Son Güncelleme: {doc.lastUpdated}
            </p>
          )}
        </div>

        {/* Document Navigation Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3rem' }}>
          <Link to="/yasal/kvkk" className={`btn ${legalKey === 'kvkk' ? 'btn-primary' : 'btn-outline'}`} style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
            KVKK
          </Link>
          <Link to="/yasal/gizlilik-politikasi" className={`btn ${legalKey === 'privacy' ? 'btn-primary' : 'btn-outline'}`} style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
            Gizlilik Politikası
          </Link>
          <Link to="/yasal/cerez-politikasi" className={`btn ${legalKey === 'cookies' ? 'btn-primary' : 'btn-outline'}`} style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
            Çerez Politikası
          </Link>
          <Link to="/yasal/kullanim-sartlari" className={`btn ${legalKey === 'terms' ? 'btn-primary' : 'btn-outline'}`} style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
            Kullanım Şartları
          </Link>
        </div>

        {/* Content Box */}
        <div className="glass-panel" style={{ padding: '3rem', whiteSpace: 'pre-line', lineHeight: '1.9', fontSize: '1rem', color: '#cbd5e1' }}>
          {doc.content}
        </div>
      </div>
    </div>
  );
};

export default Legal;
