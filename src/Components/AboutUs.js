import React from 'react';

export default function AboutUs() {
  return (
    <section id="about" className="aboutus">
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>

        {/* CEO Photo at the top of About Us */}
        <div style={{ marginBottom: '20px' }}>
          <img
            src="/images/ceo.jpeg"
            alt="Founder & CEO - Hikmat Dry Fruits"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #b8860b',
              boxShadow: '0 8px 30px rgba(0,0,0,0.3)'
            }}
          />
          <h3 style={{
            color: '#f5e6c8',
            marginTop: '12px',
            fontSize: '1.2rem',
            fontWeight: '600'
          }}>
            Founder & CEO
          </h3>
        </div>

        <h2>👤 About Hikmat Dry Fruits</h2>

        <div style={{
          width: '60px',
          height: '3px',
          background: '#b8860b',
          margin: '10px auto 20px',
          borderRadius: '2px'
        }}></div>

        <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: '#d0c8d8' }}>
          "Our mission is simple: to bring the finest quality dry fruits from Afghanistan's
          best farms to customers worldwide."
        </p>

        <p style={{ marginTop: '20px' }}>
          <strong>Hikmat Dry Fruits</strong> was founded with a passion for quality and
          a commitment to excellence. With over <strong>8 years of experience</strong>,
          we've built lasting relationships with farmers and suppliers, ensuring that
          every product meets our strict quality standards.
        </p>

        <div className="about-stats">
          <div className="stat-box">
            <h3>8+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-box">
            <h3>🌍</h3>
            <p>International Exporters</p>
          </div>
          <div className="stat-box">
            <h3>100%</h3>
            <p>Quality Guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  );
}