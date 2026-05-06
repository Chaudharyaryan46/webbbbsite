import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, Phone, MapPin } from 'lucide-react';
import logoMain from '../assets/logos/logo_main.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: '#FFFFFF', borderTop: '1px solid var(--border)', paddingTop: '6rem', paddingBottom: '3rem', color: 'var(--text-muted)' }}>
      <div className="container">
        <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-12" style={{ marginBottom: '4rem' }}>
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center">
              <img src={logoMain} alt="WebCultivation" style={{ height: '64px', width: 'auto' }} />
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '300px' }}>
              Your global partner for software engineering, AI automation, and comprehensive business transformation.
            </p>
            <div className="flex gap-4">
              <a href="mailto:info@webcultivation.com" className="footer-link" style={{ background: 'var(--bg-soft)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}><Mail size={18} /></a>
              <a href="https://wa.me/918200858112" className="footer-link" style={{ background: 'var(--bg-soft)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)' }}><Globe size={18} /></a>
            </div>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-5">
            <h4 style={{ color: 'var(--text)', fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem' }}>Solutions</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/products/webbill" className="footer-link">WebBill POS</Link></li>
              <li><Link to="/products/webinvoice" className="footer-link">WebInvoice</Link></li>
              <li><Link to="/products/webmart" className="footer-link">WebMart</Link></li>
              <li><Link to="/products/jatas-ai" className="footer-link">Jatas AI</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-5">
            <h4 style={{ color: 'var(--text)', fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem' }}>Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services" className="footer-link">Web Development</Link></li>
              <li><Link to="/services" className="footer-link">Digital Marketing</Link></li>
              <li><Link to="/services" className="footer-link">Business Compliance</Link></li>
              <li><Link to="/services" className="footer-link">Tax & Accounting</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h4 style={{ color: 'var(--text)', fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem' }}>Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:info@webcultivation.com" className="flex items-center gap-3 footer-link">
                <Mail size={18} style={{ color: 'var(--primary)' }} /> 
                <span>info@webcultivation.com</span>
              </a>
              <div className="flex items-center gap-3">
                <Phone size={18} style={{ color: 'var(--primary)' }} /> 
                <div className="flex flex-col">
                  <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>India</span>
                  <a href="tel:+918200858112" className="footer-link" style={{ fontSize: '1rem' }}>+91 8200858112</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} style={{ color: 'var(--primary)' }} /> 
                <div className="flex flex-col">
                  <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>USA</span>
                  <a href="tel:+13479600694" className="footer-link" style={{ fontSize: '1rem' }}>+1 (347) 960-0694</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} style={{ color: 'var(--primary)', marginTop: '4px' }} /> 
                <span style={{ lineHeight: '1.5', fontSize: '0.95rem' }}>Dairy Road, Palanpur,<br />Gujarat - 385001</span>
              </div>
            </div>
          </div>

        </div>

        {/* Localized Bottom */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2.5rem', marginTop: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {['Palanpur', 'Mehsana', 'Ahmedabad', 'Gandhinagar', 'Surat'].map(city => (
                <Link key={city} to="/software-company-in-palanpur" className="footer-link" style={{ fontSize: '0.85rem' }}>Software Company in {city}</Link>
              ))}
            </div>
            <div style={{ fontSize: '0.85rem', opacity: 0.6 }}>
              &copy; {currentYear} WebCultivation Technology. Built for the Global Enterprise.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
