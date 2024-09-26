import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      <h1>Services</h1>
      <div className='container'>
        {services.length > 0 ? (
          services.map((service) => (
            <div className='itemcard' key={service.id}>
                <img 
                className='card-img'
                  src={`http://localhost:1337${service.Pictures.url}`} 
                  alt="Our services"
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
