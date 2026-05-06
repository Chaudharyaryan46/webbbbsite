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
                <div style={{ marginBottom: '2.5rem', background: '#ffffff', padding: '1.5rem', borderRadius: '16px', display: 'inline-block', border: '1px solid var(--border)', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                  <img src={logo} alt={`${name} logo`} style={{ height: '75px', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                </div>
              )}
              <div className="label" style={{ color: color, marginBottom: '1rem', fontWeight: '800' }}>{name} Ecosystem</div>
              <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', color: 'var(--text)', letterSpacing: '-0.02em' }}>{name}</h1>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: '500', lineHeight: '1.5' }}>{tagline}</h2>
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

    </main>
  );
};

export default ProductPage;
