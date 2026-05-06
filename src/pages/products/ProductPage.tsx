import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Zap, Globe, Play, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductProps {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  color: string;
  logo: string;
  image?: string;
}

const ProductPage: React.FC<ProductProps> = ({ name, tagline, description, features, color, logo, image }) => {
  return (
    <main>
      <Helmet>
        <title>{name} | {tagline} | WebCultivation Technology</title>
        <meta name="description" content={description} />
      </Helmet>

      {/* ── HERO SECTION ── */}
      <section className="section" style={{ background: 'var(--bg-soft)', paddingTop: '180px', paddingBottom: '100px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="row" style={{ alignItems: 'center', gap: '5rem' }}>
            
            {/* Left Content */}
            <div style={{ flex: '1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '64px', height: '64px', background: '#fff', borderRadius: '16px', padding: '0.75rem', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={logo} alt={name} style={{ height: '100%', objectFit: 'contain' }} />
                </div>
                <div>
                  <div style={{ color: color, fontWeight: '800', fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>PRODUCT</div>
                  <h1 style={{ fontSize: '3rem', fontWeight: '900' }}>{name}</h1>
                </div>
              </div>
              <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text)', marginBottom: '1rem', lineHeight: '1.3' }}>{tagline}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>{description}</p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn btn-primary" style={{ background: color, borderColor: color }}>Get Started Now</Link>
                <Link to="/contact" className="btn btn-secondary">Request Demo</Link>
              </div>
            </div>

            {/* Right Image */}
            <div style={{ flex: '1.2' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ 
                  borderRadius: '24px', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid var(--border)',
                  background: '#fff'
                }}>
                  {image ? (
                    <img src={image} alt={`${name} preview`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  ) : (
                    <div style={{ padding: '6rem 3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                      [ {name} Interface Preview ]
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FEATURES SECTION ── */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why <span style={{ color: color }}>{name}</span> Stands Out</h2>
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
      <section className="section">
        <div className="container">
          <div className="card text-center" style={{ padding: '5rem 3rem', background: 'var(--bg-soft)', border: `2px dashed ${color}33` }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to implement {name}?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Join the growing list of enterprises optimizing their operations with our {name} ecosystem.
            </p>
            <Link to="/contact" className="btn btn-primary" style={{ background: color, borderColor: color, padding: '1rem 3rem' }}>Deploy {name} Today</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
