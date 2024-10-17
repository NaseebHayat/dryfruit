import React from 'react';
import { Helmet } from 'react-helmet';

export default function AboutUs() {
  return (
    <>
    
      <Helmet>
        <title>Hikmat: The Ultimate Choice for Quality Dry Fruits</title>
        <meta name="description" content="Learn about Hikmat Dry Fruits, a trusted provider of logistics solutions specializing in dry fruit sourcing, packing, and shipping." />
        <link rel="canonical" href="https://hikmatdryfruits.com/about-us" /> 
      </Helmet>

      <div className="aboutus">
        <h1>About Us</h1>
        <p>
          At <b>Hikmat Dry Fruits</b>, we specialize in providing comprehensive logistics solutions, from sourcing the best products to securely packing and shipping them through Afghanistan's trusted transit routes. Founded in <b>2018</b>, our mission has always been to deliver outstanding service while ensuring the utmost care for our clients' goods.
       
          Driven by our core values of integrity, quality, and customer satisfaction, we’ve grown into a trusted partner for businesses and individuals seeking reliable supply chain services. Our experienced team brings decades of combined expertise, making sure every step of the process—from packing to delivery—is handled with precision and care. Whether it's small personal shipments or large-scale commercial orders, we are committed to exceeding your expectations. Let us be the trusted bridge between you and your customers.
        </p>
     
      </div> 
    </>
  );
}
