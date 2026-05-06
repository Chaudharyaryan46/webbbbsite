import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoMain from '../assets/logos/logo_main.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={scrolled ? 'nav-fixed nav-scrolled' : 'nav-fixed nav-transparent'}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img src={logoMain} alt="WebCultivation Technology" style={{ height: '44px', width: 'auto', objectFit: 'contain' }} />
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="md-flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="nav-link"
                style={{ color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-muted)' }}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            style={{ display: 'none', background: 'none', color: 'var(--text)', padding: '0.5rem' }}
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 2000,
          background: 'var(--bg)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: '2rem',
        }}>
          <button onClick={() => setIsOpen(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', color: 'var(--text)' }}>
            <X size={30} />
          </button>
          <Link to="/" style={{ marginBottom: '1rem' }}>
            <img src={logoMain} alt="WebCultivation Technology" style={{ height: '40px' }} />
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{ fontSize: '1.75rem', fontWeight: '800', color: location.pathname === link.path ? 'var(--primary)' : 'var(--text)' }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem 3rem' }}>
            Get Started
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
