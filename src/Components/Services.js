import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/services?populate=*')  // Ensure the image field is populated
      .then((response) => {
        setServices(response.data.data);
      })
      .catch((err) => {
        console.error('Error fetching data: ', err);
      });
  }, []);

  return (
    <>
      {/* SEO Head */}
      <Helmet>
        <title>Hikmat Dry Fruits - Our Services</title>
        <meta name="description" content="Discover the services offered by Hikmat Dry Fruits, specializing in sourcing and exporting high-quality dry fruits." />
        <link rel="canonical" href="https://www.hikmatdryfruits.com/services" /> {/* Update with the actual URL after deployment */}
      </Helmet>

      <h1>Our Services</h1>
      <div className='container'>
        {services.length > 0 ? (
          services.map((service) => (
            <div className='itemcard' key={service.id}>
              <img 
                className='card-img'
                src={`http://localhost:1337${service.Pictures.url}`} 
                alt={service.Pictures.alternativeText || `Service: ${service.titles}`} // Use meaningful alt text
              />
              <div className="card-content">
                <h2>{service.titles}</h2>
                {service.Description && service.Description.map((desc, idx) => (
                  <div className='card-description' key={idx}>
                    {desc.children && desc.children.map((child, idx) => (
                      <p key={idx}>{child.text}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No services found</p>
        )}
      </div>
    </>
  );
};

export default Services;
