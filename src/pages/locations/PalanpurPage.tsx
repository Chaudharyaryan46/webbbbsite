import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Shield, Zap, Globe, Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

import webbillLogo from '../../assets/logos/webbill.jpg';
import webmartLogo from '../../assets/logos/webmart.png';
import webinvoiceLogo from '../../assets/logos/webinvoice.png';
import jatasaiLogo from '../../assets/logos/jatasai.png';

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
    },
    {
      name: 'Jatas AI',
      logo: jatasaiLogo,
      desc: 'Advanced AI Voice Agent technology for automated admissions and communication, used by leading educational institutions.',
      color: '#DC2626',
      link: '/products/jatas-ai'
    }
  ];

  const clientReviews = [
    {
      product: 'Jatas AI',
      client: 'Ganpat University',
      text: "Jatas AI has transformed our communication efficiency. The AI voice agents handle high volumes of inquiries perfectly, making it an essential tool for our institution.",
      rating: 5
    },
    {
      product: 'WebBill',
      client: 'Atithi Restaurant',
      text: "WebBill software hamare hotel ke orders aur inventory ko bahut efficiently manage karta hai. Palanpur mein best support milti hai.",
      rating: 5
    },
    {
      product: 'WebInvoice',
      client: 'Arbuda Cab',
      text: "Professional GST billing for our cab service has never been easier. WebInvoice is fast and very reliable for our daily operations.",
      rating: 5
    },
    {
      product: 'WebMart',
      client: 'Super Mall',
      text: "Managing a large inventory and barcode scanning at Super Mall is now seamless thanks to WebMart. Highly recommended for retail marts.",
      rating: 5
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
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', alignItems: 'center' }}>
              <Link to="/contact" className="btn btn-primary">Get Your Local Demo</Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ display: 'flex', color: '#FFB800' }}>
                   {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#FFB800" />)}
                </div>
                <span style={{ fontWeight: '700' }}>5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GMB Showcase */}
      <section style={{ padding: '3rem 0', background: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: '900' }}>5.0</div>
              <div style={{ display: 'flex', justifyContent: 'center', color: '#FFB800', marginBottom: '0.5rem' }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={24} fill="#FFB800" />)}
              </div>
              <div style={{ opacity: 0.9, fontWeight: '600' }}>Google Rating</div>
            </div>
            <div style={{ height: '60px', width: '1px', background: 'rgba(255,255,255,0.2)' }} className="hidden md-flex"></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: '900' }}>40+</div>
              <div style={{ opacity: 0.9, fontWeight: '600', marginTop: '0.5rem' }}>Verified Reviews</div>
            </div>
            <div style={{ height: '60px', width: '1px', background: 'rgba(255,255,255,0.2)' }} className="hidden md-flex"></div>
            <div style={{ maxWidth: '400px' }}>
               <p style={{ fontStyle: 'italic', fontSize: '1rem', opacity: 0.9 }}>
                 "WebBill from WebCultivation is an all-in-one solution for orders and inventory. Highly reliable support!"
               </p>
               <div style={{ fontWeight: '800', marginTop: '0.5rem', fontSize: '0.9rem' }}>— Verified Local Review</div>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Software Expertise */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>#1 Software Company in Palanpur</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>Specialized digital tools for the growing Palanpur marketplace.</p>
          </div>
          
          <div className="grid md-grid-cols-4 gap-6">
            {products.map((p) => (
              <div key={p.name} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', borderTop: `5px solid ${p.color}`, padding: '2rem' }}>
                <div style={{ height: '70px', display: 'flex', alignItems: 'center', background: '#fff', borderRadius: '12px', padding: '0.75rem', border: '1px solid var(--border)' }}>
                  <img src={p.logo} alt={p.name} style={{ height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800' }}>{p.name}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', flexGrow: 1, fontSize: '0.95rem' }}>{p.desc}</p>
                <Link to={p.link} style={{ color: p.color, fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                  View Full Product <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Client Reviews */}
      <section className="section" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Success Stories in <span className="text-gradient">Palanpur</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem' }}>Real feedback from local businesses powered by our systems.</p>
          </div>
          <div className="grid md-grid-cols-2 gap-8">
            {clientReviews.map((r) => (
              <div key={r.client} className="card" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.05 }}>
                  <Quote size={80} />
                </div>
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1.25rem', color: '#FFB800' }}>
                  {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#FFB800" />)}
                </div>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2rem', color: 'var(--text)', fontStyle: 'italic' }}>
                  "{r.text}"
                </p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                  <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>{r.client}</div>
                  <div style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                    Using {r.product}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="section">
        <div className="container">
          <div className="row" style={{ alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '2.75rem', marginBottom: '1.5rem' }}>Local Support, <span style={{ color: 'var(--primary)' }}>Real Impact</span></h2>
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
    </main>
  );
};

export default PalanpurPage;
