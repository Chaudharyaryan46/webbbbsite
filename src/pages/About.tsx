import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, Users, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <main>
      <Helmet>
        <title>About Us | WebCultivation Technology - Global Business Transformation</title>
        <meta name="description" content="Learn about WebCultivation Technology's mission to bridge the gap between complex technology and business growth worldwide." />
      </Helmet>

      {/* Centered Hero Section */}
      <section className="section" style={{ background: 'var(--bg-soft)', paddingTop: '220px', paddingBottom: '120px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center animate-fade">
            <div style={{ color: 'var(--primary)', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '1rem' }}>
              THE MISSION
            </div>
            <h1 style={{ fontSize: '4.5rem', marginBottom: '2rem', fontWeight: '900', lineHeight: '1.1' }}>
              Bridging the Gap between <br /><span className="text-gradient">Tech & Growth</span>.
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.5rem', lineHeight: '1.7', marginBottom: '3.5rem', maxWidth: '800px', margin: '0 auto 3.5rem' }}>
              At WebCultivation Technology, we believe in the power of systems. Our mission is to engineer the technical backbone for enterprises worldwide, ensuring they launch smarter and scale faster.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={28} style={{ color: 'var(--accent-green)' }} />
                  <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text)' }}>Engineered for Global Scale</span>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={28} style={{ color: 'var(--accent-green)' }} />
                  <span style={{ fontWeight: '700', fontSize: '1.1rem', color: 'var(--text)' }}>Systems that never sleep</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid md-grid-cols-4 gap-8">
            {[
              { label: 'Global Clients', val: '500+', col: 'var(--primary)' },
              { label: 'Proprietary Products', val: '10+', col: 'var(--accent-green)' },
              { label: 'Countries Served', val: '15+', col: 'var(--text)' },
              { label: 'Success Rate', val: '100%', col: 'var(--primary)' }
            ].map(s => (
              <div key={s.label} className="text-center">
                <div style={{ fontSize: '3rem', fontWeight: '900', color: s.col, marginBottom: '0.5rem' }}>{s.val}</div>
                <div style={{ fontWeight: '700', color: 'var(--text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DNA */}
      <section className="section">
        <div className="container">
          <h2 className="text-center" style={{ fontSize: '2.75rem', marginBottom: '5rem' }}>The WebCultivation <span className="text-gradient">DNA</span></h2>
          <div className="grid md-grid-cols-2 gap-12">
            <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--bg-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}><Globe size={32} /></div>
              <div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.75rem' }}>Global-First Mindset</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>Solutions engineered to compete on the world stage, regardless of where your business is based. We think global from day one.</p>
              </div>
            </div>
            <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'var(--bg-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)', flexShrink: 0 }}><Users size={32} /></div>
              <div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.75rem' }}>Distributed Excellence</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>Our remote global workforce brings the best technical minds together to solve your unique challenges with speed and precision.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
