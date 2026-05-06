import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, FileText, ShoppingCart, Cpu } from 'lucide-react';

import webbillLogo from '../assets/logos/webbill.jpg';
import webmartLogo from '../assets/logos/webmart.png';
import webinvoiceLogo from '../assets/logos/webinvoice.png';
import jatasaiLogo from '../assets/logos/jatasai.png';

const Products = () => {
  const products = [
    {
      id: 'webbill',
      name: 'WebBill',
      tagline: 'Smart Billing for Smart Restaurants',
      desc: 'Complete restaurant management from KOT to billing.',
      icon: <Utensils size={32} />,
      color: '#1A43A3',
      logo: webbillLogo
    },
    {
      id: 'webinvoice',
      name: 'WebInvoice',
      tagline: 'Simple Billing for Every Business',
      desc: 'Professional, customizable invoices for all industries.',
      icon: <FileText size={32} />,
      color: '#FFD700',
      logo: webinvoiceLogo
    },
    {
      id: 'webmart',
      name: 'WebMart',
      tagline: 'Har Dukaan Ka Smart System',
      desc: 'Grocery and retail POS with advanced inventory tracking.',
      icon: <ShoppingCart size={32} />,
      color: '#1EB200',
      logo: webmartLogo
    },
    {
      id: 'jatas-ai',
      name: 'Jatas AI',
      tagline: 'Automate Communication. Scale Operations.',
      desc: 'AI-powered voice agents for sales and support.',
      icon: <Cpu size={32} />,
      color: 'var(--jatas-red)',
      logo: jatasaiLogo
    }
  ];

  return (
    <main>
      <Helmet>
        <title>Our Products | WebCultivation Technology Ecosystem</title>
        <meta name="description" content="Explore our proprietary SaaS ecosystem designed to automate and scale your business operations." />
      </Helmet>

      <section className="section-padding" style={{ background: 'var(--bg-surface)', paddingTop: '180px', borderBottom: '1px solid var(--border-main)' }}>
        <div className="container text-center">
          <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: '800' }}>The WebCultivation <span style={{ color: 'var(--primary)' }}>Ecosystem</span></h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto' }}>
            Proprietary software solutions built to solve real-world business challenges.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md-grid-cols-2 gap-8">
            {products.map((p) => (
              <div key={p.id} className="glass-card flex flex-col gap-6" style={{ borderLeft: `6px solid ${p.color}` }}>
                <div style={{ width: '150px' }}>
                  <img src={p.logo} alt={p.name} style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{p.name}</h2>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-green)', fontWeight: '600', marginBottom: '1rem' }}>{p.tagline}</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{p.desc}</p>
                  <Link to={`/products/${p.id}`} className="btn btn-outline" style={{ fontSize: '0.9rem' }}>
                    View Product Details <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
