import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, ArrowRight, CheckCircle, Globe, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CityLandingPageProps {
  city: string;
}

const CityLandingPage: React.FC<CityLandingPageProps> = ({ city }) => {
  return (
    <main>
      <Helmet>
        <title>Best Software Company in {city}, Gujarat | WebCultivation Technology</title>
        <meta name="description" content="Leading software company in {city}, Gujarat. Expert in SaaS, AI, ERP, CRM, website development, and business growth. Local expertise with global delivery." />
      </Helmet>

      {/* Hero */}
      <section className="section-padding" style={{ background: 'var(--bg-surface)', paddingTop: '180px', borderBottom: '1px solid var(--border-main)' }}>
        <div className="container">
          <div className="flex flex-col md-flex justify-between items-center gap-12">
            <div style={{ flex: 1 }}>
              <div style={{ color: 'var(--primary-blue)', fontWeight: '700', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                LOCAL EXPERTISE | GLOBAL DELIVERY
              </div>
              <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: '800' }}>The Leading <span style={{ color: 'var(--primary-blue)' }}>Software</span> Company in {city}</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
                Empowering businesses in {city} with world-class software engineering, AI automation, and digital growth strategies.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem', borderRadius: '50px' }}>Book Free Demo</Link>
                <Link to="/contact" className="btn btn-outline" style={{ padding: '1.2rem 3rem', borderRadius: '50px', background: 'white' }}>Contact Local Office</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in City */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800' }}>Specialized for <span style={{ color: 'var(--primary-blue)' }}>{city}</span></h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>We help local businesses dominate their local and global markets.</p>
          </div>
          <div className="grid grid-cols-1 md-grid-cols-3 gap-8">
            <div className="glass-card">
              <div style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem' }}><Zap size={40} /></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>Local SEO & GMB</h3>
              <p style={{ color: 'var(--text-muted)' }}>We make your business rank #1 in {city} for your industry, driving local high-intent leads.</p>
            </div>
            <div className="glass-card">
              <div style={{ color: 'var(--accent-green)', marginBottom: '1.5rem' }}><Globe size={40} /></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>E-commerce & SaaS</h3>
              <p style={{ color: 'var(--text-muted)' }}>Launch your own software or retail platform and scale from {city} to the global stage.</p>
            </div>
            <div className="glass-card">
              <div style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem' }}><Shield size={40} /></div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>Compliance & Tech</h3>
              <p style={{ color: 'var(--text-muted)' }}>GST, Trademark, and end-to-end technical support for businesses in the {city} region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <div style={{ background: 'var(--primary-blue)', borderRadius: '32px', padding: '5rem', textAlign: 'center', color: 'white' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1.5rem' }}>Ready to Scale from {city}?</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 3rem' }}>
              Book a free consultation today and get a customized digital transformation roadmap.
            </p>
            <Link to="/contact" className="btn btn-outline" style={{ background: 'white', color: 'var(--primary-blue)', border: 'none', padding: '1.2rem 4rem', borderRadius: '50px' }}>
              Schedule Call Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CityLandingPage;
