import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--dark-surface)', borderTop: '1px solid var(--dark-border)', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-8" style={{ marginBottom: '4rem' }}>
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div style={{ width: '32px', height: '32px', background: 'var(--gradient-blue)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white' }}>W</div>
              <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>WebCultivation</span>
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Think. Build. Transform. Your global partner for software, AI, and business growth.
            </p>
            <div className="flex gap-4" style={{ marginTop: '1rem' }}>
              <a href="#" style={{ color: 'var(--text-muted)' }}><Globe size={20} /></a>
              <a href="#" style={{ color: 'var(--text-muted)' }}><Mail size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Solutions</h4>
            <Link to="/products/webbill" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>WebBill POS</Link>
            <Link to="/products/webinvoice" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>WebInvoice</Link>
            <Link to="/products/webmart" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>WebMart</Link>
            <Link to="/products/jatas-ai" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Jatas AI</Link>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Services</h4>
            <Link to="/services/web-development" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Web Development</Link>
            <Link to="/services/seo" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Digital Marketing</Link>
            <Link to="/services/compliance" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Business Compliance</Link>
            <Link to="/services/operations" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Tax & Accounting</Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Contact</h4>
            <div className="flex items-center gap-2" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <Mail size={16} /> info@webcultivation.com
            </div>
            <div className="flex items-center gap-2" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <Phone size={16} /> +91 8200858112
            </div>
            <div className="flex items-start gap-2" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              <MapPin size={16} style={{ marginTop: '4px' }} /> Palanpur, Gujarat, India
            </div>
          </div>
        </div>

        {/* Local SEO Footer Links */}
        <div style={{ borderTop: '1px solid var(--dark-border)', paddingTop: '2rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '1rem' }}>
            Serving Businesses in: 
            <Link to="/software-company-palanpur" style={{ margin: '0 5px' }}>Palanpur</Link> | 
            <Link to="/software-company-mehsana" style={{ margin: '0 5px' }}>Mehsana</Link> | 
            <Link to="/software-company-ahmedabad" style={{ margin: '0 5px' }}>Ahmedabad</Link> | 
            <Link to="/software-company-gandhinagar" style={{ margin: '0 5px' }}>Gandhinagar</Link> | 
            <Link to="/software-company-surat" style={{ margin: '0 5px' }}>Surat</Link>
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            &copy; {currentYear} WebCultivation Technology. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
