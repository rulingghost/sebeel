import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Contact = () => {
  const { content } = useContent();
  const contact = content?.contact || {};
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Lütfen adınızı ve e-posta adresinizi giriniz.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    }, 5000);
  };

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '5rem', position: 'relative' }}>
      
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '40vw', height: '40vw', background: 'var(--color-primary-glow)', filter: 'blur(100px)', borderRadius: '50%', zIndex: -1, opacity: 0.5 }}></div>

      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}><span className="badge-dot"></span> {contact.badge || 'Bize Ulaşın'}</div>
          <h1 className="section-title">
            {contact.title || 'Projelerinizi'}{' '}
            <span className="text-gradient">{contact.titleHighlight || 'Hayata Geçirelim'}</span>
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
            {contact.subtitle || "Yeni nesil mobil uygulama fikriniz mi var? Seebel Yazılım'ın uzman ekibiyle iletişime geçin, teknolojinin sınırlarını birlikte aşalım."}
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'stretch' }}>
          
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="glass-panel" style={{ padding: '2.5rem', flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>İletişim Bilgileri</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {contact.email && (
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '12px', color: '#60a5fa' }}>
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem' }}>E-Posta</h4>
                      <p className="text-muted">Proje teklifleri ve destek için:</p>
                      <p style={{ fontWeight: '600', marginTop: '0.3rem' }}>{contact.email}</p>
                    </div>
                  </div>
                )}
                
                {contact.phone && (
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '12px', color: '#60a5fa' }}>
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem' }}>Telefon</h4>
                      <p className="text-muted">Doğrudan arayabilir veya mesaj bırakabilirsiniz:</p>
                      <p style={{ fontWeight: '600', marginTop: '0.3rem' }}>{contact.phone}</p>
                    </div>
                  </div>
                )}
                
                {contact.address && (
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '12px', color: '#60a5fa' }}>
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem' }}>Merkez Ofis</h4>
                      <p className="text-muted">Ziyaretinizden memnuniyet duyarız:</p>
                      <p style={{ fontWeight: '600', marginTop: '0.3rem' }}>{contact.address}</p>
                    </div>
                  </div>
                )}

                {contact.workingHours && (
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '12px', color: '#60a5fa' }}>
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.3rem', fontSize: '1.1rem' }}>Çalışma Saatleri</h4>
                      <p className="text-muted">Mesai aralığı:</p>
                      <p style={{ fontWeight: '600', marginTop: '0.3rem' }}>{contact.workingHours}</p>
                    </div>
                  </div>
                )}
              </div>
                 {/* Contact Form */}
          <div className="glass-panel" style={{ padding: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <MessageSquare style={{ color: '#60a5fa' }} />
              <h3 style={{ fontSize: '1.5rem' }}>{contact.form?.title || 'Mesaj Gönderin'}</h3>
            </div>

            {submitted ? (
              <div style={{ padding: '2.5rem 1.5rem', textAlign: 'center', background: 'rgba(16,185,129,0.15)', borderRadius: '14px', border: '1px solid rgba(16,185,129,0.3)', animation: 'fadeIn 0.4s ease' }}>
                <h4 style={{ color: '#34d399', fontSize: '1.3rem', marginBottom: '0.5rem' }}>{contact.form?.successTitle || '✓ Mesajınız Başarıyla Alındı!'}</h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{contact.form?.successSubtitle || 'Ekibimiz en kısa sürede sizinle iletişime geçecektir. Teşekkür ederiz.'}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Ad Soyad *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Adınız Soyadınız"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Telefon</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+90 555 000 0000"
                      style={inputStyle}
                    />
                  </div>
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>E-Posta Adresi *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ornek@sirket.com"
                    style={inputStyle}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>İlgilendiğiniz Hizmet</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{ ...inputStyle, background: '#0f172a' }}
                  >
                    <option value="">Lütfen seçiniz</option>
                    {(contact.form?.servicesList || ['Canlı Yayın Platformu', 'Kripto ve Fintek', 'Mobil Oyun', 'Sesli Sohbet / Chat', 'Diğer']).map((srvName, sIdx) => (
                      <option key={sIdx} value={srvName}>{srvName}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Proje Detayları</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Projenizden veya ihtiyacınızdan kısaca bahsedin..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '0.5rem' }}>
                  {contact.form?.buttonText || 'Mesajı Gönder'} <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '0.85rem 1rem',
  borderRadius: '10px',
  border: '1px solid rgba(255,255,255,0.12)',
  background: 'rgba(15,23,42,0.8)',
  color: '#ffffff',
  fontFamily: 'inherit',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.3s, box-shadow 0.3s'
};

export default Contact;


