import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, Users, CheckCircle } from 'lucide-react';
import successMeme from '../assets/photos/software_success_meme.png';

const About = () => {
  return (
    <main>
      <Helmet>
        <title>About Us | WebCultivation Technology - Global Business Transformation</title>
        <meta name="description" content="Learn about WebCultivation Technology's mission to bridge the gap between complex technology and business growth worldwide." />
      </Helmet>

      {/* Hero Section */}
      <section className="section" style={{ background: 'var(--bg-soft)', paddingTop: '180px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="row" style={{ alignItems: 'center', gap: '5rem' }}>
            <div style={{ flex: 1.2 }}>
              <div className="animate-fade" style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                THE MISSION
              </div>
              <h1 style={{ fontSize: '3.75rem', marginBottom: '1.5rem', fontWeight: '900' }}>
                Bridging the Gap between <span className="text-gradient">Tech & Growth</span>.
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
                At WebCultivation Technology, we believe in the power of systems. Our mission is to engineer the technical backbone for enterprises worldwide, ensuring they launch smarter and scale faster.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle size={24} style={{ color: 'var(--accent-green)' }} />
                    <span style={{ fontWeight: '600', color: 'var(--text)' }}>Engineered for Global Scale</span>
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <CheckCircle size={24} style={{ color: 'var(--accent-green)' }} />
                    <span style={{ fontWeight: '600', color: 'var(--text)' }}>Systems that never sleep</span>
                 </div>
              </div>
            </div>
            
            <div style={{ flex: 1, position: 'relative' }}>
               <div style={{ 
                 width: '100%', 
                 borderRadius: '40px', 
                 overflow: 'hidden', 
                 boxShadow: 'var(--shadow-xl)',
                 border: '8px solid white',
                 transform: 'rotate(2deg)',
                 transition: 'transform 0.3s ease'
               }}
               onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0deg)'}
               onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(2deg)'}
               >
                 <img src={successMeme} alt="Mission Accomplished" style={{ width: '100%', height: 'auto', display: 'block' }} />
               </div>
               {/* Meme-style floating badge */}
               <div style={{
                 position: 'absolute',
                 bottom: '-20px',
                 right: '-20px',
                 background: 'var(--primary)',
                 color: 'white',
                 padding: '1rem 2rem',
                 borderRadius: '20px',
                 fontWeight: '900',
                 fontSize: '1.2rem',
                 boxShadow: 'var(--shadow-lg)',
                 transform: 'rotate(-5deg)',
                 zIndex: 2
               }}>
                 POV: It just works. 🚀
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
