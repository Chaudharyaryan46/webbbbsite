import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Shield, Zap, Globe, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import webbillLogo from '../../assets/logos/webbill.jpg';
import webmartLogo from '../../assets/logos/webmart.png';
import webinvoiceLogo from '../../assets/logos/webinvoice.png';

const PalanpurPage = () => {
  const products = [
    {
      name: 'WebBill',
      logo: webbillLogo,
      desc: 'Premium Restaurant POS & Billing Software designed for the food industry in Palanpur. Manage KOT, tables, and inventory with ease.',
      color: '#1A3FA8',
      link: '/products/webbill'
    },
    {
      name: 'WebInvoice',
      logo: webinvoiceLogo,
      desc: 'Professional Billing & GST Invoice Software for retailers and wholesalers in Palanpur. Keep your business compliant and organized.',
      color: '#D97706',
      link: '/products/webinvoice'
    },
    {
      name: 'WebMart',
      logo: webmartLogo,
      desc: 'The Smart Retail Management System for grocery and supermarts in Palanpur. Integrated inventory and sales tracking.',
      color: '#16A34A',
      link: '/products/webmart'
    }
  ];

  return (
    <main>
      <Helmet>
        <title>Software Company in Palanpur | Leading Billing Software Provider</title>
        <meta name="description" content="WebCultivation Technology is the leading software company in Palanpur, Gujarat. We provide top-tier billing software solutions including WebBill, WebInvoice, and WebMart." />
      </Helmet>

      {/* Hero Section */}
      <section style={{ background: 'var(--bg-soft)', paddingTop: '160px', paddingBottom: '100px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center animate-fade">
            <div className="badge" style={{ marginBottom: '1.5rem' }}>Local Excellence • Global Standards</div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', maxWidth: '900px', margin: '0 auto 1.5rem' }}>
              The Leading <span className="text-gradient">Software Company</span> in Palanpur
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
              WebCultivation Technology is dedicated to empowering businesses in Palanpur with world-class billing, ERP, and AI solutions.
            </p>
            <Link to="/contact" className="btn btn-primary">Get Your Local Demo</Link>
          </div>
        </div>
      </section>

      {/* Billing Software Expertise */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>#1 Billing Software Company in Palanpur</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>Specialized digital tools for the growing Palanpur marketplace.</p>
          </div>
          
          <div className="grid md-grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.name} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', borderTop: `5px solid ${p.color}` }}>
                <div style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
                  <img src={p.logo} alt={p.name} style={{ height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800' }}>{p.name}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', flexGrow: 1 }}>{p.desc}</p>
                <Link to={p.link} style={{ color: p.color, fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Full Product <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="section" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '2.75rem', marginBottom: '1.5rem' }}>Why Businesses in <span style={{ color: 'var(--primary)' }}>Palanpur</span> Choose Us</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  'Local Support Team available on-site in Palanpur.',
                  'Software customized for local Gujarati business needs.',
                  'Quick 24-hour setup and implementation.',
                  'Free training for your staff at your location.'
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ color: 'var(--accent-green)' }}><CheckCircle size={24} /></div>
                    <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-muted)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="stat-box" style={{ background: '#fff' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)' }}>100+</div>
                  <div style={{ color: 'var(--text-muted)', fontWeight: '700' }}>Palanpur Clients</div>
                </div>
                <div className="stat-box" style={{ background: '#fff' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--accent-green)' }}>#1</div>
                  <div style={{ color: 'var(--text-muted)', fontWeight: '700' }}>Local Rating</div>
                </div>
                <div className="stat-box" style={{ background: '#fff' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--jatas-red)' }}>24/7</div>
                  <div style={{ color: 'var(--text-muted)', fontWeight: '700' }}>Local Support</div>
                </div>
                <div className="stat-box" style={{ background: '#fff' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)' }}>10yr</div>
                  <div style={{ color: 'var(--text-muted)', fontWeight: '700' }}>Expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Reviews / Trust */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Trusted by Palanpur's Best</h2>
          </div>
          <div className="grid md-grid-cols-2 gap-8">
            <div className="card" style={{ background: 'var(--bg-soft)', border: 'none' }}>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem', color: '#FFB800' }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#FFB800" />)}
              </div>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                "WebBill has completely changed how we handle orders at our restaurant. Being a local company in Palanpur, their support is amazing."
              </p>
              <div style={{ fontWeight: '700' }}>— Local Restaurant Owner, Palanpur</div>
            </div>
            <div className="card" style={{ background: 'var(--bg-soft)', border: 'none' }}>
              <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem', color: '#FFB800' }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#FFB800" />)}
              </div>
              <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                "We needed a billing software that could handle GST and local inventory for our mart. WebMart was the perfect solution."
              </p>
              <div style={{ fontWeight: '700' }}>— Supermarket Manager, Palanpur</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PalanpurPage;
