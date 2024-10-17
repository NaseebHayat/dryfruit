import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_vxr6f9o', 
            'template_5rz4j37', 
            e.target,         
            'uoCz3JjAjohDwnMfH'    
        )
        .then((result) => {
            alert('Message sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send message, please try again. ' + error.text);
        });

        // Reset form fields
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <>
            <Helmet>
                <title>Contact Us - Hikmat Dry Fruits</title>
                <meta name="description" content="Get in touch with Hikmat Dry Fruits for inquiries about our products and services. Reach us via email or WhatsApp." />
                <link rel="canonical" href="https://hikmatdryfruits.com/contact-us" />
            </Helmet>

            <h1>Contact Us</h1>
            <div className="contact-us">

                <div className="contact-details">
                    <p><strong>Phone:</strong> <a href="tel:+93700332876">+9370 033 2876</a></p>
                    <p><strong>Email:</strong> <a href="mailto:hikmat.kdr2876@gmail.com">hikmat.kdr2876@gmail.com</a></p>
                    <p><strong>Business Hours:</strong> 9 AM - 6 PM (Sat - Thu)</p>

                    
                </div>

                <div className="contact-form">
                    <h3>Send Us a Message</h3>
                    <form onSubmit={sendEmail}>
                        <div>
                            <label htmlFor="name">Name: </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email: </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message: </label>
                            <textarea 
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
