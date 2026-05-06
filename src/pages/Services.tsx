import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Cpu, TrendingUp, Shield, Code, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState('Web Development');

  const serviceCategories = [
    {
      id: 'Web Development',
      title: "Web & Software Development",
      icon: <Code size={32} />,
      iconLarge: <Code size={64} />,
      color: 'var(--primary)',
      description: "We build high-performance, scalable web applications and enterprise software systems tailored to your business goals.",
      features: [
        "Custom SaaS Architecture",
        "Enterprise ERP & CRM Systems",
        "E-commerce Marketplaces",
        "Progressive Web Apps (PWA)",
        "API Integration & Development",
        "Cloud Infrastructure (AWS/Azure)"
      ],
      detailedDesc: "Our engineering team follows agile methodologies to deliver robust code. Whether you need a startup MVP or a complex enterprise transformation, we ensure your software is built for scale, security, and speed."
    },
    {
      id: 'Digital Marketing',
      title: "Digital Growth & Marketing",
      icon: <TrendingUp size={32} />,
      iconLarge: <TrendingUp size={64} />,
      color: '#16A34A',
      description: "Data-driven marketing strategies that drive high-intent traffic, increase conversions, and scale your brand globally.",
      features: [
        "Global & Local SEO",
        "Performance Marketing (PPC)",
        "Social Media Domination",
        "Conversion Rate Optimization",
        "Content Marketing Strategy",
        "Marketing Automation"
      ],
      detailedDesc: "We don't just drive traffic; we drive revenue. Our marketing stack combines deep SEO expertise with advanced analytics to ensure every marketing dollar translates into measurable business growth."
    },
    {
      id: 'AI Automation',
      title: "AI & Process Automation",
      icon: <Cpu size={32} />,
      iconLarge: <Cpu size={64} />,
      color: 'var(--jatas-red)',
      description: "Leverage the power of Artificial Intelligence to automate complex workflows and handle customer communication at scale.",
      features: [
        "AI Voice Agent Integration",
        "NLP & Chatbot Workflows",
        "Predictive Sales Analytics",
        "Automated Lead Scoring",
        "Business Process Automation",
        "Custom LLM Implementations"
      ],
      detailedDesc: "The future of business is automated. Our AI solutions help you reduce operational overhead and improve customer response times through intelligent voice and text agents that work 24/7."
    },
    {
      id: 'Business Compliance',
      title: "Business & Legal Compliance",
      icon: <Shield size={32} />,
      iconLarge: <Shield size={64} />,
      color: '#D97706',
      description: "End-to-end technical and legal support to ensure your business infrastructure is compliant with global and local standards.",
      features: [
        "Company Registration (Pvt Ltd/LLP)",
        "Trademark & IP Protection",
        "GST & Financial Setup",
        "FSSAI & Industrial Licenses",
        "Legal Tech Consulting",
        "Export/Import Documentation"
      ],
      detailedDesc: "Focus on your product while we handle the paperwork. From initial incorporation to complex international compliance, we provide the legal and financial backbone for your enterprise."
    }
  ];

  const activeService = serviceCategories.find(s => s.id === activeTab) || serviceCategories[0];

  return (
    <main>
      <Helmet>
        <title>Our Services | Global Software Engineering & Business Growth</title>
        <meta name="description" content="Explore WebCultivation Technology's comprehensive suite of services, from SaaS development and AI automation to digital marketing and global compliance." />
      </Helmet>

      {/* Hero */}
      <section style={{ background: 'var(--bg-soft)', paddingTop: '160px', paddingBottom: '80px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center animate-fade">
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: '900' }}>
              Comprehensive <span className="text-gradient">Services</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
              We provide the complete technical, marketing, and legal infrastructure required to build and scale a modern enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className="section">
        <div className="container">
          
          {/* Service Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`btn ${activeTab === cat.id ? 'btn-primary' : 'btn-secondary'}`}
                style={{ 
                  padding: '1rem 2rem', 
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '1.05rem',
                  border: activeTab === cat.id ? 'none' : '1.5px solid var(--border)'
                }}
              >
                <span style={{ opacity: activeTab === cat.id ? 1 : 0.6 }}>{cat.icon}</span>
                {cat.id}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="animate-fade" key={activeTab}>
            <div className="card" style={{ padding: '4rem', display: 'flex', flexDirection: 'column', gap: '3rem', borderLeft: `8px solid ${activeService.color}` }}>
              <div className="row" style={{ alignItems: 'flex-start', gap: '5rem' }}>
                
                {/* Left: Description */}
                <div style={{ flex: '1.2' }}>
                  <div style={{ color: activeService.color, marginBottom: '1.5rem' }}>
                    {activeService.iconLarge}
                  </div>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{activeService.title}</h2>
                  <p style={{ fontSize: '1.25rem', color: 'var(--text)', marginBottom: '1.5rem', fontWeight: '500' }}>
                    {activeService.description}
                  </p>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                    {activeService.detailedDesc}
                  </p>
                  <div style={{ marginTop: '3rem' }}>
                     <Link to="/contact" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
                        Inquire about {activeTab} <ArrowRight size={20} />
                     </Link>
                  </div>
                </div>

                {/* Right: Features Grid */}
                <div style={{ flex: '1', background: 'var(--bg-soft)', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--border)' }}>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '2rem', fontWeight: '800', color: 'var(--primary)' }}>What's Included:</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {activeService.features.map((f) => (
                      <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ color: activeService.color }}><CheckCircle size={24} /></div>
                        <span style={{ fontWeight: '600', color: 'var(--text-muted)', fontSize: '1.05rem' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Methodology */}
      <section className="section" style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '5rem' }}>The WebCultivation <span className="text-gradient">Method</span></h2>
          <div className="grid md-grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy", desc: "Deep market and technical analysis to define clear objectives." },
              { step: "02", title: "Design", desc: "User-centric UI/UX and scalable technical architecture." },
              { step: "03", title: "Build", desc: "Agile, high-performance engineering with rigorous testing." },
              { step: "04", title: "Scale", desc: "Continuous optimization, marketing, and global growth." }
            ].map((m, i) => (
              <div key={i} className="text-center">
                <div style={{ fontSize: '4rem', fontWeight: '900', color: 'var(--primary)', opacity: 0.1, marginBottom: '-1.5rem' }}>{m.step}</div>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1rem' }}>{m.title}</h4>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <div style={{ 
            background: 'var(--primary)', 
            borderRadius: 'var(--radius-xl)', 
            padding: '5rem', 
            textAlign: 'center', 
            color: 'white',
            boxShadow: 'var(--shadow-xl)' 
          }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'white' }}>Ready to transform your business?</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 3rem' }}>
              Let's build a dedicated team for your unique engineering and marketing needs.
            </p>
            <Link to="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)', border: 'none', padding: '1.2rem 4rem' }}>
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
