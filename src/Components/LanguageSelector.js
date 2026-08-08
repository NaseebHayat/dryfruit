import React, { useEffect, useRef } from 'react';

const LanguageSelector = () => {
    const isScriptLoaded = useRef(false);

    useEffect(() => {
        // Check if Google Translate script is already loaded
        if (document.querySelector('script[src*="translate.google.com"]')) {
            isScriptLoaded.current = true;
            return;
        }

        // Define the callback function globally
        window.googleTranslateElementInit = () => {
            if (window.google && window.google.translate) {
                try {
                    new window.google.translate.TranslateElement(
                        {
                            pageLanguage: 'en',
                            includedLanguages: 'ar,hi,ur,fa',
                            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                            autoDisplay: false,
                        },
                        'google_translate_element'
                    );
                } catch (error) {
                    console.log('Google Translate initialization error:', error);
                }
            }
        };

        // Load the Google Translate script
        try {
            const addScript = document.createElement('script');
            addScript.id = 'google-translate-script';
            addScript.setAttribute(
                'src',
                '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
            );
            addScript.async = true;
            document.body.appendChild(addScript);
            isScriptLoaded.current = true;
        } catch (error) {
            console.log('Google Translate script loading error:', error);
        }

        // Cleanup function
        return () => {
            // Don't remove the script on cleanup to avoid errors
        };
    }, []);

    return <div className="language" id="google_translate_element"></div>;
};

export default LanguageSelector;