import React, { useState } from 'react';

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
                <img className='headerPhoto' src="/images/HeaderPhoto.jpg" alt="Dry Figs" />
                <h1 className='headerName'>Hikmat: Your Gateway to Quality Dry Fruits</h1>
            </div>

            <img src="/images/logo2.png" alt="Logo" className='logo' />

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button 
                        className={`navbar-brand ${activeButton === 'home' ? 'active' : ''}`} 
                        onClick={() => handleButtonClick(refs.homeRef, 'home')}
                    >
                        Home
                    </button>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button 
                                    className={`nav-link ${activeButton === 'items' ? 'active' : ''}`} 
                                    onClick={() => handleButtonClick(refs.itemsRef, 'items')}
                                >
                                    Items
                                </button>
                            </li>

                            <li className="nav-item">
                                <button 
                                    className={`nav-link ${activeButton === 'services' ? 'active' : ''}`} 
                                    onClick={() => handleButtonClick(refs.servicesRef, 'services')}
                                >
                                    Services
                                </button>
                            </li>

                            <li className="nav-item">
                                <button 
                                    className={`nav-link ${activeButton === 'about' ? 'active' : ''}`} 
                                    onClick={() => handleButtonClick(refs.aboutUsRef, 'about')}
                                >
                                    About Us
                                </button>
                            </li>

                            <li className="nav-item">
                                <button 
                                    className={`nav-link ${activeButton === 'contact' ? 'active' : ''}`} 
                                    onClick={() => handleButtonClick(refs.contactUsRef, 'contact')}
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
