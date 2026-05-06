import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, Lightbulb, TrendingUp, Globe, Users, ShieldCheck } from 'lucide-react';
import teamPhoto from '../assets/photos/team_collaboration.png';

const About = () => {
  return (
    <main>
      <Helmet>
        <title>About Us | WebCultivation Technology - Global Business Transformation</title>
        <meta name="description" content="Learn about WebCultivation Technology's mission to bridge the gap between complex technology and business growth worldwide." />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'var(--bg-surface)', paddingTop: '180px', borderBottom: '1px solid var(--border-main)' }}>
        <div className="container">
          <div className="flex flex-col md-flex items-center gap-16">
            <div style={{ flex: 1 }}>
              <div className="animate-fade" style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '1rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                OUR MISSION
              </div>
              <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: '800' }}>Bridging the gap between <span style={{ color: 'var(--primary)' }}>Tech</span> & Growth.</h1>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                At WebCultivation Technology, we believe in the power of systems. Our mission is to engineer the technical backbone for enterprises worldwide, ensuring they launch smarter and scale faster.
              </p>
            </div>
            <div style={{ flex: 1 }}>
               <div style={{ 
                 width: '100%', 
                 aspectRatio: '4/3', 
                 borderRadius: '32px', 
                 overflow: 'hidden', 
                 boxShadow: 'var(--shadow-lg)' 
               }}>
                 <img src={teamPhoto} alt="WebCultivation Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
            </div>
          </div>
        </div>
      </section>


      {/* Global Stats */}
      <section className="section-padding" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-main)', borderBottom: '1px solid var(--border-main)' }}>
        <div className="container">
          <div className="grid grid-cols-2 md-grid-cols-4 gap-8 text-center">
            <div>
              <h2 style={{ fontSize: '3.5rem', color: 'var(--primary)', fontWeight: '800' }}>500+</h2>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Global Clients</p>
            </div>
            <div>
              <h2 style={{ fontSize: '3.5rem', color: 'var(--accent-green)', fontWeight: '800' }}>10+</h2>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Proprietary Products</p>
            </div>
            <div>
              <h2 style={{ fontSize: '3.5rem', color: 'var(--text-main)', fontWeight: '800' }}>15+</h2>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Countries Served</p>
            </div>
            <div>
              <h2 style={{ fontSize: '3.5rem', color: 'var(--primary)', fontWeight: '800' }}>24/7</h2>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Global Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* DNA */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-center" style={{ fontSize: '3rem', marginBottom: '5rem', fontWeight: '800' }}>The WebCultivation <span style={{ color: 'var(--primary)' }}>DNA</span></h2>
          <div className="grid grid-cols-1 md-grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div style={{ minWidth: '56px', height: '56px', borderRadius: '16px', background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}><Globe size={28} /></div>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Global-First Mindset</h4>
                <p style={{ color: 'var(--text-muted)' }}>Solutions engineered to compete on the world stage, regardless of where your business is based.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div style={{ minWidth: '56px', height: '56px', borderRadius: '16px', background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)' }}><Users size={28} /></div>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Distributed Talent</h4>
                <p style={{ color: 'var(--text-muted)' }}>Our remote global workforce brings the best technical minds together to solve your unique challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
