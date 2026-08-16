import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import { renderSocialIcon } from './common/SocialIcons';
import './Footer.css';


const Footer = () => {
  const { content } = useContent();
  const general = content?.general || {};
  const footer = content?.footer || {};
  const contact = content?.contact || {};
  const socialLinks = contact?.socialLinks || [];
  const columns = footer?.columns || [];
  const legalLinks = footer?.legalLinks || [];

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              {general.logoImage ? (
                <img src={general.logoImage} alt={general.siteName || 'SEEBEL'} className="logo-image" style={{ height: '36px', objectFit: 'contain' }} />
              ) : (
                <>
                  <span className="logo-text">{general.logoText || 'SEEBEL'}</span>
                  <span className="logo-dot">{general.logoDot || '.'}</span>
                </>
              )}
            </Link>
            <p className="footer-description">
              {footer.description || 'Yenilikçi, güvenli ve performans odaklı premium mobil uygulamalar geliştiren, geleceği şekillendiren teknoloji partneriniz.'}
            </p>
            <div className="social-links">
              {socialLinks.map((soc, idx) => (
                <a
                  key={soc.id || idx}
                  href={soc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  title={soc.label}
                >
                  {renderSocialIcon(soc.icon || soc.platform)}
                </a>
              ))}
            </div>
          </div>
          
          {columns.map((col, colIdx) => (
            <div key={col.id || colIdx} className="footer-links">
              <h4>{col.title}</h4>
              <ul>
                {col.links?.map((lnk, lnkIdx) => (
                  <li key={lnk.id || lnkIdx}>
                    {lnk.url.startsWith('/') ? (
                      <Link to={lnk.url}>{lnk.label}</Link>
                    ) : (
                      <a href={lnk.url}>{lnk.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          <div className="footer-contact">
            <h4>İletişim</h4>
            {contact.email && (
              <div className="contact-item">
                <Mail className="contact-icon" size={18} />
                <span>{contact.email}</span>
              </div>
            )}
            {contact.phone && (
              <div className="contact-item">
                <Phone className="contact-icon" size={18} />
                <span>{contact.phone}</span>
              </div>
            )}
            {contact.address && (
              <div className="contact-item">
                <MapPin className="contact-icon" size={18} />
                <span>{contact.address}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {footer.copyright || 'Seebel Yazılım. Tüm hakları saklıdır.'}</p>
          <div className="footer-bottom-links">
            {legalLinks.map((leg, idx) => (
              <React.Fragment key={leg.id || idx}>
                {idx > 0 && <span className="divider">|</span>}
                {leg.url?.startsWith('/') ? (
                  <Link to={leg.url}>{leg.label}</Link>
                ) : (
                  <a href={leg.url}>{leg.label}</a>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

