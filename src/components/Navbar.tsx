import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logoMain from '../assets/logos/logo_main.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { 
    setIsOpen(false); 
    setActiveDropdown(null);
  }, [location.pathname]);

  const products = [
    { name: 'WebBill POS', path: '/products/webbill' },
    { name: 'WebInvoice', path: '/products/webinvoice' },
    { name: 'WebMart', path: '/products/webmart' },
    { name: 'Jatas AI', path: '/products/jatas-ai' },
  ];

  const services = [
    { name: 'Web Development', path: '/services' },
    { name: 'Digital Marketing', path: '/services' },
    { name: 'AI Automation', path: '/services' },
    { name: 'Business Compliance', path: '/services' },
  ];

  return (
    <>
      <nav className={scrolled ? 'nav-fixed nav-scrolled' : 'nav-fixed nav-transparent'}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoMain} alt="WebCultivation" style={{ height: '48px', width: 'auto' }} />
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="md-flex">
            <Link to="/" className="nav-link">Home</Link>
            
            {/* Products Dropdown */}
            <div 
              style={{ position: 'relative' }} 
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '4px', border: 'none', background: 'none', cursor: 'pointer' }}>
                Products <ChevronDown size={14} />
              </button>
              {activeDropdown === 'products' && (
                <div style={{
                  position: 'absolute', top: '100%', left: '0', background: '#fff', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '12px', padding: '1rem',
                  minWidth: '200px', display: 'flex', flexDirection: 'column', gap: '0.5rem',
                  border: '1px solid var(--border)', zIndex: 100
                }}>
                  {products.map(p => (
                    <Link key={p.name} to={p.path} className="nav-dropdown-link">{p.name}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              style={{ position: 'relative' }} 
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '4px', border: 'none', background: 'none', cursor: 'pointer' }}>
                Services <ChevronDown size={14} />
              </button>
              {activeDropdown === 'services' && (
                <div style={{
                  position: 'absolute', top: '100%', left: '0', background: '#fff', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)', borderRadius: '12px', padding: '1rem',
                  minWidth: '220px', display: 'flex', flexDirection: 'column', gap: '0.5rem',
                  border: '1px solid var(--border)', zIndex: 100
                }}>
                  {services.map(s => (
                    <Link key={s.name} to={s.path} className="nav-dropdown-link">{s.name}</Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="nav-link">About</Link>
            <Link to="/software-company-in-palanpur" className="nav-link">Palanpur</Link>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem' }}>Get Started</Link>
          </div>

          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{ position: 'fixed', inset: 0, background: '#fff', zIndex: 2000, padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3rem' }}>
            <img src={logoMain} alt="WebCultivation" style={{ height: '40px' }} />
            <button onClick={() => setIsOpen(false)}><X size={30} /></button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <Link to="/" className="mobile-nav-link">Home</Link>
            <Link to="/products" className="mobile-nav-link">Products</Link>
            <Link to="/services" className="mobile-nav-link">Services</Link>
            <Link to="/about" className="mobile-nav-link">About</Link>
            <Link to="/software-company-in-palanpur" className="mobile-nav-link">Palanpur</Link>
            <Link to="/contact" className="btn btn-primary" style={{ textAlign: 'center', marginTop: '1rem' }}>Get Started</Link>
          </div>
        </div>
      )}

      <style>{`
        .nav-dropdown-link {
          padding: 0.75rem 1rem;
          border-radius: 8px;
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s;
        }
        .nav-dropdown-link:hover {
          background: var(--bg-soft);
          color: var(--primary);
        }
        .mobile-nav-link {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text);
        }
      `}</style>
    </>
  );
};

export default Navbar;
