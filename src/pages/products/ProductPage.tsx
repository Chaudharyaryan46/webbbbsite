import React from 'react';
import { Zap, CheckCircle, ArrowRight, Play, Download } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

interface ProductPageProps {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  color: string;
  logo?: string;
  image?: string;
}

const ProductPage: React.FC<ProductPageProps> = ({ name, tagline, description, features, color, logo, image }) => {
  return (
    <main>
      <Helmet>
        <title>{name} | WebCultivation Technology</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* ── HERO ── */}
      <section style={{ background: 'var(--bg-soft)', paddingTop: '140px', paddingBottom: '80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="row" style={{ alignItems: 'center', gap: '4rem' }}>

            {/* Left: text */}
            <div style={{ flex: '1.1' }} className="animate-fade">
              {logo && (
                <div style={{ marginBottom: '2rem' }}>
                  <img src={logo} alt={`${name} logo`} style={{ height: '52px', objectFit: 'contain' }} />
                </div>
              )}
              <div className="label" style={{ color: color, marginBottom: '1rem' }}>{name} Ecosystem</div>
              <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--text)' }}>{name}</h1>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: '500', lineHeight: '1.5' }}>{tagline}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.75', marginBottom: '2.5rem', maxWidth: '520px' }}>{description}</p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary" style={{ background: color, boxShadow: `0 6px 18px ${color}33` }}>
                  Book a Free Demo <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Sales
                </Link>
              </div>
            </div>

            {/* Right: product photo */}
            <div style={{ flex: '1', position: 'relative' }}>
              <div style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                lineHeight: 0,
              }}>
                {image ? (
                  <img
                    src={image}
                    alt={`${name} interface preview`}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                ) : (
                  <div style={{ padding: '6rem 3rem', textAlign: 'center', color: 'var(--text-muted)', fontWeight: '600' }}>
                    [ {name} Interface Preview ]
                  </div>
                )}
              </div>
              {/* Accent badge */}
              <div style={{
                position: 'absolute', bottom: '24px', left: '-24px',
                background: color, color: '#fff',
                padding: '0.75rem 1.25rem', borderRadius: '14px',
                fontWeight: '700', fontSize: '0.8rem',
                boxShadow: 'var(--shadow-lg)',
              }}>
                ✓ Certified Enterprise Solution
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              Why <span style={{ color: color }}>{name}</span> Stands Out
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Engineered for performance, built for your growth.</p>
          </div>
          <div className="grid md-grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', borderLeft: `4px solid ${color}` }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: color, flexShrink: 0 }}>
                  <CheckCircle size={22} />
                </div>
                <span style={{ fontSize: '1.05rem', fontWeight: '600', color: 'var(--text)' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ paddingBottom: '96px' }}>
        <div className="container">
          <div style={{
            background: 'var(--bg-soft)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            padding: '5rem 3rem',
            textAlign: 'center',
          }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>Get Started with {name}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
              Join hundreds of businesses scaling with our smart solutions. No credit card required.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ background: color, boxShadow: `0 6px 18px ${color}33` }}>
                Schedule a Demo
              </Link>
              <button className="btn btn-secondary">
                <Download size={17} /> Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
