import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Globe, Zap, Shield, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Schema from '../components/Schema';

import webbillLogo from '../assets/logos/webbill.jpg';
import webmartLogo from '../assets/logos/webmart.png';
import webinvoiceLogo from '../assets/logos/webinvoice.png';
import jatasaiLogo from '../assets/logos/jatasai.png';
import globalNetwork from '../assets/photos/global_network.png';
import googleLogo from '../assets/photos/google_logo.svg';

const Home = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "WebCultivation Technology",
    "url": "https://www.webcultivation.com",
    "logo": "https://www.webcultivation.com/logo.png",
    "contactPoint": { "@type": "ContactPoint", "telephone": "+91 8200858112", "contactType": "customer service" }
  };

  const products = [
    { name: 'WebBill', tagline: 'Restaurant POS', color: '#1A3FA8', logo: webbillLogo, id: 'webbill' },
    { name: 'WebMart', tagline: 'Retail Smart System', color: '#16A34A', logo: webmartLogo, id: 'webmart' },
    { name: 'WebInvoice', tagline: 'Universal Billing', color: '#D97706', logo: webinvoiceLogo, id: 'webinvoice' },
    { name: 'Jatas AI', tagline: 'AI Voice Agents', color: '#DC2626', logo: jatasaiLogo, id: 'jatas-ai' },
  ];

  const services = [
    { icon: <Globe size={32} />, color: '#1A3FA8', title: 'SaaS Development', desc: 'Scalable, multi-tenant cloud architectures for global software products.' },
    { icon: <Zap size={32} />, color: '#16A34A', title: 'AI & Automation', desc: 'LLM-powered voice agents that automate complex business communication.' },
    { icon: <Shield size={32} />, color: '#1A3FA8', title: 'Global Compliance', desc: 'GST, Trademark, FSSAI, and international business infrastructure.' },
  ];

  return (
    <main>
      <Helmet>
        <title>WebCultivation Technology | Global Software & AI Transformation Company</title>
        <meta name="description" content="Leading software company delivering SaaS, AI, ERP and digital growth solutions globally from Gujarat, India." />
      </Helmet>
      <Schema data={schema} />

      {/* ── HERO ── */}
      <section style={{ background: 'var(--bg-soft)', paddingTop: '140px', paddingBottom: '100px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="row" style={{ alignItems: 'center', gap: '4rem' }}>

            {/* Left */}
            <div style={{ flex: '1.1' }} className="animate-fade">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16A34A' }}></div>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                  Gujarat, India — Serving 15+ Countries
                </span>
              </div>
              <h1 style={{ fontSize: '3.75rem', marginBottom: '1.5rem' }}>
                Engineering <span className="text-gradient">Business</span><br />Infrastructure
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '540px' }}>
                We build high-performance software and AI systems that empower global enterprises to operate at scale.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1rem' }}>
                  Book Free Demo <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn btn-secondary" style={{ fontSize: '1rem' }}>
                  Get Consultation
                </Link>
              </div>

              {/* GMB Rating Badge */}
              <div style={{ marginTop: '2.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'white', padding: '0.75rem 1.25rem', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)' }}>
                  <img src={googleLogo} alt="Google" style={{ height: '20px' }} />
                  <div style={{ height: '24px', width: '1px', background: 'var(--border)' }}></div>
                  <div style={{ display: 'flex', color: '#FFB800' }}>
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#FFB800" />)}
                  </div>
                  <span style={{ fontWeight: '800', fontSize: '0.9rem' }}>5.0 Rating</span>
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '600' }}>
                  40+ Verified Reviews
                </div>
              </div>

              <div style={{ marginTop: '2.5rem', display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
                {[['500+', 'Global Clients'], ['15+', 'Countries'], ['4', 'Products']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--primary)' }}>{n}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – global network photo */}
            <div style={{ flex: '1', position: 'relative' }}>
              <div style={{
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid var(--border)',
                lineHeight: 0,
              }}>
                <img src={globalNetwork} alt="WebCultivation Global Transformation Network" style={{ width: '100%', height: 'auto' }} />
              </div>
              {/* Floating badge */}
              <div style={{
                position: 'absolute', bottom: '24px', right: '-20px',
                background: 'var(--primary)', color: '#fff',
                padding: '0.75rem 1.25rem', borderRadius: '14px',
                fontWeight: '700', fontSize: '0.85rem',
                boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: '0.5rem'
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80', animation: 'fadeIn 1.5s ease infinite alternate' }}></div>
                Global Delivery
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <div className="label" style={{ marginBottom: '0.75rem' }}>What We Do</div>
            <h2 style={{ fontSize: '2.75rem', marginBottom: '1rem' }}>Enterprise <span className="text-gradient">Solutions</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '560px', margin: '0 auto' }}>
              Specialized engineering for modern business transformation.
            </p>
          </div>
          <div className="grid md-grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: `${s.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '800' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="section" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div className="label" style={{ marginBottom: '0.75rem' }}>Our Software</div>
              <h2 style={{ fontSize: '2.75rem' }}>The Product <span className="text-gradient">Ecosystem</span></h2>
            </div>
            <Link to="/products" className="btn btn-secondary">Explore All <ArrowRight size={16} /></Link>
          </div>
          <div className="grid md-grid-cols-4 gap-6">
            {products.map((p) => (
              <Link to={`/products/${p.id}`} key={p.id} className="card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', borderTop: `4px solid ${p.color}`, transition: 'transform 0.3s ease' }}>
                <div style={{ background: '#ffffff', borderRadius: '12px', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '120px', border: '1px solid var(--border)' }}>
                  <img src={p.logo} alt={p.name} style={{ height: '70px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '0.25rem' }}>{p.name}</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{p.tagline}</p>
                </div>
                <div style={{ color: p.color, fontWeight: '700', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  Learn More <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section">
        <div className="container">
          <div className="row" style={{ gap: '5rem' }}>
            <div style={{ flex: '1' }}>
              <div className="label" style={{ marginBottom: '0.75rem' }}>Why WebCultivation</div>
              <h2 style={{ fontSize: '2.75rem', marginBottom: '1.5rem' }}>Local Roots,<br /><span className="text-gradient">Global Reach</span></h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                From our HQ in Palanpur, Gujarat, we serve clients across 15+ countries with world-class engineering, AI automation, and business growth strategies.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['ISO-grade engineering practices', 'Dedicated account managers', '24/7 global support', 'Multi-language customer service'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ color: 'var(--accent-green)', flexShrink: 0 }}><CheckCircle size={20} /></div>
                    <span style={{ fontWeight: '600', color: 'var(--text-muted)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: '1' }}>
              <div className="grid grid-cols-2 gap-4">
                {[['500+', 'Clients Served', '#EEF3FF', 'var(--primary)'], ['15+', 'Countries', '#F0FDF4', '#16A34A'], ['4', 'Products', '#EEF3FF', 'var(--primary)'], ['24/7', 'Support', '#FFF7ED', '#D97706']].map(([n, l, bg, col]) => (
                  <div key={l} style={{ background: bg, borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: '900', color: col, letterSpacing: '-0.04em' }}>{n}</div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '0 0 96px' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, #2B5CE6 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '5rem 4rem',
            textAlign: 'center',
            color: '#fff',
            boxShadow: 'var(--shadow-xl)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '320px', height: '320px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
            <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '240px', height: '240px', background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: '3rem', marginBottom: '1.25rem', color: '#fff' }}>Ready to Scale Your Business?</h2>
              <p style={{ fontSize: '1.2rem', opacity: 0.85, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                Join 500+ enterprises using WebCultivation systems to power their growth.
              </p>
              <Link to="/contact" className="btn" style={{ background: '#fff', color: 'var(--primary)', fontWeight: '800', padding: '1rem 3rem', fontSize: '1.05rem', boxShadow: '0 4px 14px rgba(0,0,0,0.15)' }}>
                Get Started Today <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
