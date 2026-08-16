import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useContent } from '../context/ContentContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { content } = useContent();

  const general = content?.general || {};
  const navigation = content?.navigation || [];
  const ctaButton = content?.ctaButton || { label: 'İletişime Geç', path: '/iletisim' };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const announcement = general.announcement || {};

  return (
    <>
      {announcement.enabled && announcement.text && (
        <div className="announcement-bar">
          <div className="container announcement-container">
            <span className="announcement-text">{announcement.text}</span>
            {announcement.buttonText && (
              <Link to={announcement.buttonUrl || '/projelerimiz'} className="announcement-link">
                {announcement.buttonText} →
              </Link>
            )}
          </div>
        </div>
      )}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${announcement.enabled && announcement.text ? 'has-announcement' : ''}`}>
        <div className="container nav-container">
        <Link to="/" className="logo">
          {general.logoImage ? (
            <img src={general.logoImage} alt={general.siteName || 'SEEBEL'} className="logo-image" style={{ height: '38px', objectFit: 'contain' }} />
          ) : (
            <>
              <span className="logo-text">{general.logoText || 'SEEBEL'}</span>
              <span className="logo-dot">{general.logoDot || '.'}</span>
            </>
          )}
        </Link>
        
        {/* Desktop Links */}
        <ul className="nav-links">
          {navigation.map((item) => {
            if (item.isDropdown && item.children && item.children.length > 0) {
              const isAnyChildActive = item.children.some((c) => location.pathname === c.path || (c.path !== '/' && location.pathname.startsWith(c.path)));
              return (
                <li key={item.id} className="dropdown-container">
                  <Link
                    to={item.path || '#'}
                    className={`dropdown-trigger ${isAnyChildActive || location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label} <ChevronDown size={16} className="dropdown-icon" />
                  </Link>
                  <ul className="dropdown-menu glass-panel">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link to={child.path} className={location.pathname === child.path ? 'active' : ''}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return (
              <li key={item.id}>
                <Link to={item.path} className={location.pathname === item.path ? 'active' : ''}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        
        <div className="nav-actions">
          <Link to={ctaButton.path || '/iletisim'} className="btn btn-primary">
            {ctaButton.label || 'İletişime Geç'}
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle-btn"
          aria-label="Menüyü Aç/Kapat"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {navigation.map((item) => (
            <div key={item.id}>
              <Link to={item.path} className="mobile-nav-link">
                {item.label}
              </Link>
              {item.isDropdown && item.children && item.children.length > 0 && (
                <div className="mobile-submenu-box">
                  {item.children.map((child) => (
                    <Link key={child.id} to={child.path} className="mobile-sub-link">
                      • {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to={ctaButton.path || '/iletisim'}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '1rem', textAlign: 'center' }}
          >
            {ctaButton.label || 'İletişime Geç'}
          </Link>
        </div>
      )}
      </nav>
    </>
  );
};

export default Navbar;


