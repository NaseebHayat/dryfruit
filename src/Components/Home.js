import React from 'react';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      {/* SEO Head */}
      <Helmet>
        <title>Hikmat Dry Fruits - Quality Sourcing and Export</title>
        <meta name="description" content="Hikmat Dry Fruits specializes in sourcing and exporting top-quality dry fruits, nuts, and seeds. Your trusted partner for quality products at competitive prices." />
        <link rel="canonical" href="https://www.hikmatdryfruits.com/home" /> {/* Update with the actual URL after deployment */}
      </Helmet>

      <h1>Home</h1>
      <div className='container'>
        <div className="homecard">
          <img src="/images/logo.png" alt="Hikmat Dry Fruits Logo" className="homecard-img" />
          <div className="homecard-content card-content">
            <h2 className="card-title">Hikmat Dry Fruits</h2>
            <p className="card-description">
              We specialize in sourcing, packing, and exporting top-quality dry fruits to meet the needs of international buyers.
              Our clients trust us to provide the finest nuts, seeds, and dried fruits at competitive prices,
              allowing them to resell in their local markets with confidence. We focus on delivering fresh,
              high-quality products that meet the demands of businesses looking for the best value. With a commitment to efficient service and timely shipping,
              we are your reliable partner for sourcing premium dry fruits at unbeatable prices.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
