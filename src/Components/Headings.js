import React, { useState } from 'react';

export default function Heading({ scrollToSection, refs }) {
    const [activeButton, setActiveButton] = useState('home');

    const handleButtonClick = (sectionRef, buttonName) => {
        // 1. Scroll to the section
        scrollToSection(sectionRef);
        
        // 2. Update the active button state
        setActiveButton(buttonName);
        
        // 3. UPDATE THE URL HASH IN THE BROWSER
        if (window.history && window.history.pushState) {
            window.history.pushState(null, '', `#${buttonName}`);
        }
    };

    return (
        <>
            {/* Hero Section */}
            <div style={{ position: 'relative', width: '100%' }}>
                <img 
                    className='headerPhoto' 
                    src="/images/HeaderPhoto.jpg" 
                    alt="Premium Dry Fruits - Hikmat Dry Fruits" 
                />
                <h1 className='headerName'>
                    Hikmat: Premium Dry Fruits & Nuts
                </h1>
            </div>

            {/* Logo */}
            <img src="/images/logo2.png" alt="Hikmat Logo" className='logo' />

            {/* Navigation */}
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    {/* Home button */}
                    <button
                        className={`navbar-brand ${activeButton === 'home' ? 'active' : ''}`}
                        onClick={() => handleButtonClick(refs.homeRef, 'home')}
                        aria-label="Navigate to Home">
                        🏠 Home
                    </button>

                    {/* Hamburger menu */}
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Collapsible menu */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeButton === 'items' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick(refs.itemsRef, 'items')}
                                    aria-label="Navigate to Items">
                                    📦 Items
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeButton === 'services' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick(refs.servicesRef, 'services')}
                                    aria-label="Navigate to Services">
                                    ⚡ Services
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeButton === 'about' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick(refs.aboutUsRef, 'about')}
                                    aria-label="Navigate to About Us">
                                    👤 About Us
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className={`nav-link ${activeButton === 'contact' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick(refs.contactUsRef, 'contact')}
                                    aria-label="Navigate to Contact Us">
                                    📞 Contact Us
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}