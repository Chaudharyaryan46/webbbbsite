import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <main>
      <Helmet>
        <title>Contact Us | WebCultivation Technology Global Support</title>
        <meta name="description" content="Get in touch with WebCultivation Technology for enterprise software solutions, AI automation, and global business transformation." />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding" style={{ background: 'var(--bg-surface)', paddingTop: '180px', borderBottom: '1px solid var(--border-main)' }}>
        <div className="container">
          <div className="text-center animate-fade">
            <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', fontWeight: '800' }}>Get in <span style={{ color: 'var(--primary-blue)' }}>Touch</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto' }}>
              Ready to transform your business? Our global engineering team is here to build your next big idea.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg-grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="flex flex-col gap-10">
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontWeight: '800' }}>Global Headquarters</h2>
                <div className="flex flex-col gap-8">
                  <div className="flex gap-6">
                    <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)', border: '1px solid var(--border-main)' }}>
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.25rem' }}>Location</h4>
                      <p style={{ color: 'var(--text-muted)' }}>1st Floor, Krishna Complex, Opposite Joravar Palace, Palanpur, Gujarat 385001</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)', border: '1px solid var(--border-main)' }}>
                      <Mail size={28} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.25rem' }}>Email</h4>
                      <p style={{ color: 'var(--text-muted)' }}>info@webcultivation.com</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-blue)', border: '1px solid var(--border-main)' }}>
                      <Phone size={28} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.25rem' }}>Call Us</h4>
                      <p style={{ color: 'var(--text-muted)' }}>+91 8200858112</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--bg-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)', border: '1px solid var(--border-main)' }}>
                      <Globe size={28} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.25rem' }}>Global Markets</h4>
                      <p style={{ color: 'var(--text-muted)' }}>India | USA | UK | UAE | Australia | Canada</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card" style={{ padding: '3.5rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: '800' }}>Schedule a Consultation</h3>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md-grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Full Name</label>
                    <input type="text" placeholder="John Doe" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-main)', background: 'var(--bg-surface)', outline: 'none' }} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Email Address</label>
                    <input type="email" placeholder="john@company.com" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-main)', background: 'var(--bg-surface)', outline: 'none' }} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Product / Service Interest</label>
                  <select style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-main)', background: 'var(--bg-surface)', outline: 'none' }}>
                    <option>SaaS Development</option>
                    <option>AI Automation (Jatas AI)</option>
                    <option>POS Systems (WebBill / WebMart)</option>
                    <option>Digital Marketing & SEO</option>
                    <option>Business Compliance</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Message</label>
                  <textarea placeholder="Tell us about your business goals..." rows={5} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border-main)', background: 'var(--bg-surface)', outline: 'none', resize: 'none' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ padding: '1.2rem', borderRadius: '12px', justifyContent: 'center', marginTop: '1rem' }}>
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Contact;
