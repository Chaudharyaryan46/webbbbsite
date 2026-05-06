import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Globe, Cpu, TrendingUp, Shield, Smartphone, Code, BarChart, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      title: "Core Software Engineering",
      icon: <Code size={40} />,
      services: [
        "SaaS Product Development",
        "Enterprise ERP & CRM Systems",
        "Custom Web & Mobile Apps",
        "Cloud Infrastructure Setup"
      ]
    },
    {
      title: "AI & Automation",
      icon: <Cpu size={40} />,
      services: [
        "AI Voice Agent Integration",
        "Process Automation Workflows",
        "Natural Language Processing",
        "Predictive Sales Analytics"
      ]
    },
    {
      title: "Digital Growth & SEO",
      icon: <TrendingUp size={40} />,
      services: [
        "Global SEO Strategy",
        "Local Search Domination",
        "Performance Marketing",
        "Conversion Funnel Optimization"
      ]
    },
    {
      title: "Business Compliance",
      icon: <Shield size={40} />,
      services: [
        "Company Registration",
        "Trademark & FSSAI",
        "GST & Financial Setup",
        "Legal Tech Consulting"
      ]
    }
  ];

  return (
    <main>
      <Helmet>
        <title>Our Services | Global Software Engineering & Business Growth</title>
        <meta name="description" content="Explore WebCultivation Technology's comprehensive suite of services, from SaaS development and AI automation to digital marketing and global compliance." />
      </Helmet>

      {/* Hero */}
      <section className="section-padding" style={{ background: 'var(--bg-surface)', paddingTop: '180px', borderBottom: '1px solid var(--border-main)' }}>
        <div className="container">
          <div className="text-center animate-fade">
            <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: '800' }}>Comprehensive <span style={{ color: 'var(--primary-blue)' }}>Solutions</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto' }}>
              We build the systems that help modern enterprises launch smarter, operate better, and scale faster.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md-grid-cols-2 gap-8">
            {serviceCategories.map((cat, i) => (
              <div key={i} className="glass-card" style={{ padding: '4rem' }}>
                <div style={{ color: 'var(--primary-blue)', marginBottom: '2rem' }}>{cat.icon}</div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '800' }}>{cat.title}</h3>
                <ul className="flex flex-col gap-4">
                  {cat.services.map((s, j) => (
                    <li key={j} className="flex items-center gap-3" style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-green)' }}></div>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-padding" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-main)' }}>
        <div className="container">
          <h2 className="text-center" style={{ fontSize: '3rem', marginBottom: '5rem', fontWeight: '800' }}>The WebCultivation <span style={{ color: 'var(--primary-blue)' }}>Method</span></h2>
          <div className="grid grid-cols-1 md-grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy", desc: "Deep market and technical analysis." },
              { step: "02", title: "Design", desc: "User-centric UI/UX and architecture." },
              { step: "03", title: "Build", desc: "Agile, high-performance engineering." },
              { step: "04", title: "Scale", desc: "Continuous optimization and growth." }
            ].map((m, i) => (
              <div key={i} className="text-center">
                <div style={{ fontSize: '4rem', fontWeight: '800', color: 'var(--primary-blue)', opacity: 0.1, marginBottom: '-1rem' }}>{m.step}</div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>{m.title}</h4>
                <p style={{ color: 'var(--text-muted)' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container">
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-main)', padding: '5rem', borderRadius: '40px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>Need a custom solution?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem' }}>Let's build a dedicated engineering team for your unique business needs.</p>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 4rem', borderRadius: '50px' }}>Schedule Consultation</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
