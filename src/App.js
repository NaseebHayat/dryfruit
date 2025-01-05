import './App.css';
import React, { useRef } from 'react';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Heading from './Components/Headings';
import Home from './Components/Home';
import Items from './Components/Items';
import LanguageSelector from './Components/LanguageSelector';
import Services from './Components/Services';
import { Helmet } from 'react-helmet';
function App() {
    // Create refs for each section
    const homeRef = useRef(null);
    const itemsRef = useRef(null);
    const servicesRef = useRef(null);
    const aboutUsRef = useRef(null);
    const contactUsRef = useRef(null);

    // Scroll function
    const scrollToSection = (ref) => {
        if (ref.current) {
            const offset = 80; // Adjust this value to match your navbar height
            const elementPosition = ref.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>

            <Helmet>
                <title>Afghanistan Dry Fruits</title>
                <meta name="description" content="Description of your one-page website." />
                <link rel="canonical" href="https://hikmatdryfruits.com/" />
            </Helmet>
            <Heading
                scrollToSection={scrollToSection}
                refs={{ homeRef, itemsRef, servicesRef, aboutUsRef, contactUsRef }}
            />
            <LanguageSelector />
            <div ref={homeRef}><Home /></div>
            <div ref={itemsRef}><Items /></div>
            <div ref={servicesRef}><Services /></div>
            <div ref={aboutUsRef}><AboutUs /></div>
            <div ref={contactUsRef}><ContactUs /></div>
        </>
    );
}

export default App;
