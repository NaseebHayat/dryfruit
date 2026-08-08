import React from 'react';

export default function Services() {
  const services = [
    {
      icon: "🚢",
      title: "Worldwide Shipping",
      description: "Fast and reliable shipping to over 50 countries with tracking."
    },
    {
      icon: "✅",
      title: "Quality Guarantee",
      description: "100% satisfaction guaranteed. We stand behind every product."
    },
    {
      icon: "📦",
      title: "Bulk Export",
      description: "Special pricing for bulk orders. Perfect for retailers."
    },
    {
      icon: "🌱",
      title: "Fresh Sourcing",
      description: "Direct from farms to ensure maximum freshness and flavor."
    }
  ];

  return (
    <section id="services" className="services-section">
      <h2 style={{ 
        fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
        textAlign: 'center',
        color: '#2d2a3e',
        marginBottom: '8px',
        fontWeight: '800'
      }}>
        ⚡ Our Services
      </h2>
      <p style={{
        textAlign: 'center',
        color: '#6a6588',
        fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
        marginBottom: '30px',
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0 15px'
      }}>
        We provide end-to-end solutions for your dry fruit business needs
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}