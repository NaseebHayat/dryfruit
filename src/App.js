import './App.css';
import React, { useRef, useEffect } from 'react';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Heading from './Components/Headings';
import Home from './Components/Home';
import Items from './Components/Items';
import LanguageSelector from './Components/LanguageSelector';
import Services from './Components/Services';
import { Helmet } from 'react-helmet';

function App() {
    const homeRef = useRef(null);
    const itemsRef = useRef(null);
    const servicesRef = useRef(null);
    const aboutUsRef = useRef(null);
    const contactUsRef = useRef(null);

    const scrollToSection = (ref) => {
        if (ref.current) {
            const offset = 80;
            const elementPosition = ref.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    // ⬇️ NEW: Handle URL hash on page load ⬇️
    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const refMap = {
                home: homeRef,
                items: itemsRef,
                services: servicesRef,
                about: aboutUsRef,
                contact: contactUsRef
            };
            const targetRef = refMap[hash];
            if (targetRef && targetRef.current) {
                setTimeout(() => {
                    scrollToSection(targetRef);
                }, 500); // Small delay to ensure page is fully loaded
            }
        }
    }, []);

    return (
        <>
            <Helmet>
                {/* Google Search Console Verification */}
                <meta name="google-site-verification" content="YOUR_UNIQUE_CODE_HERE" />

                {/* Primary Meta Tags - IMPROVED */}
                <title>Premium Dry Fruits Exporters – Hikmat Dry Fruits | Afghanistan</title>
                <meta name="title" content="Premium Dry Fruits Exporters – Hikmat Dry Fruits | Afghanistan" />
                <meta name="description" content="Hikmat Dry Fruits – Premium dry fruits &amp; nuts exporters. Sourced from Afghanistan's finest farms. Worldwide shipping available. Contact us for bulk orders!" />
                <meta name="keywords" content="dry fruits, premium dry fruits, Afghanistan dry fruits, dry fruits exporters, dry figs, nuts, almonds, black raisins, basil seeds, tukmaria, golden raisins, wholesale dry fruits, bulk dry fruits" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://hikmatdryfruits.com/" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hikmatdryfruits.com/" />
                <meta property="og:title" content="Premium Dry Fruits Exporters – Hikmat Dry Fruits | Afghanistan" />
                <meta property="og:description" content="Hikmat Dry Fruits – Premium dry fruits &amp; nuts exporters. Sourced from Afghanistan's finest farms. Worldwide shipping available." />
                <meta property="og:image" content="https://hikmatdryfruits.com/images/logo2.png" />
                
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://hikmatdryfruits.com/" />
                <meta property="twitter:title" content="Premium Dry Fruits Exporters – Hikmat Dry Fruits | Afghanistan" />
                <meta property="twitter:description" content="Hikmat Dry Fruits – Premium dry fruits &amp; nuts exporters. Sourced from Afghanistan's finest farms. Worldwide shipping available." />
                <meta property="twitter:image" content="https://hikmatdryfruits.com/images/logo2.png" />
                
                {/* Schema.org JSON-LD for SEO - IMPROVED */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Hikmat Dry Fruits",
                            "url": "https://hikmatdryfruits.com",
                            "logo": "https://hikmatdryfruits.com/images/logo2.png",
                            "description": "Premium dry fruits and nuts exporter from Afghanistan",
                            "email": "info@hikmatdryfruits.com",
                            "telephone": "+93700332876",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "Kandahar",
                                "addressCountry": "AF"
                            },
                            "sameAs": [
                                "https://wa.me/93700332876"
                            ],
                            "openingHours": "Sat-Thu 09:00-18:00",
                            "priceRange": "$$"
                        }
                    `}
                </script>
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