import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CityLandingPage from './pages/locations/CityLandingPage';
import ProductPage from './pages/products/ProductPage';
import WhatsAppButton from './components/WhatsAppButton';

// Logos
import webbillLogo from './assets/logos/webbill.jpg';
import webmartLogo from './assets/logos/webmart.png';
import webinvoiceLogo from './assets/logos/webinvoice.png';
import jatasaiLogo from './assets/logos/jatasai.png';

// Previews
import webbillPreview from './assets/photos/webbill_promo.png';
import jatasaiPreview from './assets/photos/jatas_ai_preview.png';
import webmartPreview from './assets/photos/webmart_preview.png';
import webinvoicePreview from './assets/photos/webinvoice_promo.png';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Home />} />

              {/* Individual Product Pages */}
              <Route path="/products/webbill" element={
                <ProductPage 
                  name="WebBill" 
                  tagline="Smart Billing for Smart Restaurants" 
                  description="A comprehensive Restaurant POS system with table management, KOT, CRM, and integrated billing for a seamless dining experience."
                  features={['Table Management & KOT', 'QR Code Digital Menu', 'Integrated Inventory', 'Detailed Sales Analytics']}
                  color="var(--primary-blue)"
                  logo={webbillLogo}
                  image={webbillPreview}
                />
              } />
              <Route path="/products/webinvoice" element={
                <ProductPage 
                  name="WebInvoice" 
                  tagline="Simple Billing for Every Business" 
                  description="Professional, customizable billing software designed for retailers and wholesalers to manage their finances with ease."
                  features={['Unlimited Professional Invoices', 'GST-Ready Templates', 'Expense Tracking', 'Customer Ledger Management']}
                  color="#FFD700"
                  logo={webinvoiceLogo}
                  image={webinvoicePreview}
                />
              } />
              <Route path="/products/webmart" element={
                <ProductPage 
                  name="WebMart" 
                  tagline="Har Dukaan Ka Smart System" 
                  description="Optimized POS for Grocery and Kirana stores with advanced inventory tracking and barcode integration."
                  features={['Fast Barcode Scanning', 'Inventory Expiry Alerts', 'Profit/Loss Reporting', 'Supplier Management']}
                  color="var(--accent-green)"
                  logo={webmartLogo}
                  image={webmartPreview}
                />
              } />
              <Route path="/products/jatas-ai" element={
                <ProductPage 
                  name="Jatas AI" 
                  tagline="Automate Communication. Scale Operations." 
                  description="The future of sales automation — AI voice agents that handle inbound/outbound calls and lead verification."
                  features={['Natural AI Voice Calling', 'Lead Scoring & Verification', 'Automated Sales Analytics', 'Multi-Language Support']}
                  color="var(--jatas-red)"
                  logo={jatasaiLogo}
                  image={jatasaiPreview}
                />
              } />

              {/* City Landing Pages */}
              <Route path="/locations/palanpur" element={<CityLandingPage city="Palanpur" />} />
              <Route path="/locations/mehsana" element={<CityLandingPage city="Mehsana" />} />
              <Route path="/locations/ahmedabad" element={<CityLandingPage city="Ahmedabad" />} />
              <Route path="/locations/gandinagar" element={<CityLandingPage city="Gandhinagar" />} />
              <Route path="/locations/surat" element={<CityLandingPage city="Surat" />} />
            </Routes>
          </div>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
