import React from 'react';

export default function Home() {
  return (
    <>
      <div className='container'>
        <div className="homecard">
          <div className="logo-wrapper">
            <img 
              src="/images/logo2.png" 
              alt="Hikmat Dry Fruits Logo" 
              className="homecard-img" 
            />
          </div>
          <div className="homecard-content card-content">
            <h2 className="card-title">Premium Dry Fruits Since 2018</h2>
            <p className="card-description">
              <strong>Hikmat Dry Fruits</strong> is your trusted partner for sourcing, 
              packing, and exporting <strong>premium-quality dry fruits</strong> to 
              international buyers. We deliver the finest nuts, seeds, and dried fruits 
              at <strong>competitive prices</strong>, ensuring freshness and quality 
              that your customers will love.
            </p>
            <p className="card-description" style={{ marginTop: '10px' }}>
              ✅ <strong>100% Premium Quality</strong> &nbsp;|&nbsp; 
              ✅ <strong>Competitive Pricing</strong> &nbsp;|&nbsp; 
              ✅ <strong>Worldwide Shipping</strong>
            </p>
            <div style={{ 
              marginTop: '18px', 
              display: 'flex', 
              gap: '10px', 
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              <a href="#items" className="btn-primary">
                🛒 Explore Products
              </a>
              <a href="#contact" className="btn-secondary">
                📞 Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}