import React from 'react';

import { Helmet } from 'react-helmet';

const Services = () => {
  

 
  return (
    <>
      
      <Helmet>
        <title>Hikmat Dry Fruits - Our Services</title>
        <meta name="description" content="Discover the services offered by Hikmat Dry Fruits, specializing in sourcing and exporting high-quality dry fruits." />
        <link rel="canonical" href="https://hikmatdryfruits.com/services" />
      </Helmet>

      <h1>Our Services</h1>
      <div className='container'>

      <div className='itemcard'>
          <img className='card-img' src="images/Sourcing.jpg" alt="" />
          <div className="card-content">
            <h2>Sourcing</h2>
            <div className="card-description">
              <p>At Hikmat Dry Fruits, we pride ourselves on finding the best items at the most affordable prices.
                 Our team is dedicated to sourcing high-quality products that meet your needs without breaking the bank.
                  Whether you're looking for everyday essentials or something unique,
                   we go the extra mile to ensure you get the best value for your money. 
                   With a focus on both quality and cost-efficiency,
                    we make it easier for you to enjoy premium items without compromising your budget.
                     Trust us to bring you the best deals, every time. 
                     </p>
            </div>
          </div>
        </div>

        <div className='itemcard'>
          <img className='card-img' src="images/packing.jpg" alt="Packing" />
          <div className="card-content">
            <h2>Packing</h2>
            <div className="card-description">
              <p> At Hikmat Dry Fruits, we prioritize the safety of your goods by offering premium packing services.
                  We use high-quality, eco-friendly materials to ensure that every item is securely packed,
                  minimizing the risk of damage during transit. Our team carefully wraps and cushions each item,
                  whether fragile or durable, to provide maximum protection. With years of experience in packaging logistics,
                  we guarantee that your products are handled with care from start to finish, 
                  giving you peace of mind knowing that your shipments will arrive safely at their destination.
                    </p>
            </div>
          </div>
        </div>

        <div className='itemcard'>
          <img className='card-img' src="images/Transit.jpg" alt="Transit" />
          <div className="card-content">
            <h2>Transit</h2>
            <div className="card-description">
              <p> With a commitment to efficient delivery,
                 we utilize a combination of road and air transportation to ensure our products reach destinations across the globe. 
                 Whether navigating highways or flying across borders,
                  we carefully select the best transit method for each shipment.
                   This flexibility allows us to balance speed and cost,
                    ensuring your goods arrive on time and in excellent condition.
                     By leveraging both land and air routes,
                      we offer a seamless transit solution that meets the unique needs of international logistics.
                      </p>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Services;
