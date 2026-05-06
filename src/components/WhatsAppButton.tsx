import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/918200858112";

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 1000, display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <div className="hidden md-flex" style={{ 
        background: 'white', 
        padding: '0.5rem 1rem', 
        borderRadius: '12px', 
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
        fontWeight: '700', 
        fontSize: '0.9rem', 
        color: '#128C7E', 
        border: '1px solid #25D366' 
      }}>
        Chat with us
      </div>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          width: '60px',
          height: '60px',
          background: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
          transition: 'transform 0.3s ease',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.15)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
      >
        <MessageSquare size={30} fill="white" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
