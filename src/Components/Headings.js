import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Heading({ scrollToSection, refs }) {
    // State to track the active button
    const [activeButton, setActiveButton] = useState('home'); // Default to 'home'

    // Function to handle button click and set active button
    const handleButtonClick = (sectionRef, buttonName) => {
        scrollToSection(sectionRef);
        setActiveButton(buttonName); // Set the active button
    };

    return (
        <>
            <div className='headerPhoto'>
                <img className='headerPhoto' src="/images/HeaderPhoto.jpg" alt="Dry Figs showcase" />
                <h1 className='headerName'>Hikmat: Your Gateway to Quality Dry Fruits</h1>
            </div>

            <img src="/images/logo2.png" alt="Hikmat Logo" className='logo' />

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button
                        className={`navbar-brand ${activeButton === 'home' ? 'active' : ''}`}
                        onClick={() => handleButtonClick(refs.homeRef, 'home')}
                        aria-label="Navigate to Home">
                        Home
                    </button>

                  
                        <div className="whatsapp-button">
                            <a className='whatsapp-icon'
                                href="https://wa.me/93700332876?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20services."
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src="/images/whatsapp.png" alt="WhatsApp" />
                                <button className="whatsapp">
                                    WhatsApp
                                </button>
                            </a>
                        </div>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeButton === 'items' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick(refs.itemsRef, 'items')}
                                    aria-label="Navigate to Items"
                                >
                                    Items
                                </button>
                            </li>

                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeButton === 'services' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick(refs.servicesRef, 'services')}
                                    aria-label="Navigate to Services"
                                >
                                    Services
                                </button>
                            </li>

                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeButton === 'about' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick(refs.aboutUsRef, 'about')}
                                    aria-label="Navigate to About Us"
                                >
                                    About Us
                                </button>
                            </li>

                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeButton === 'contact' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick(refs.contactUsRef, 'contact')}
                                    aria-label="Navigate to Contact Us"
                                >
                                    Contact Us
                                </button>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    );
}
