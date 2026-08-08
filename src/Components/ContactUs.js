import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Toast notification state
    const [toast, setToast] = useState({
        show: false,
        message: '',
        type: '', // 'success' or 'error'
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const showToast = (message, type) => {
        setToast({ show: true, message, type });
        // Auto-hide after 5 seconds
        setTimeout(() => {
            setToast({ show: false, message: '', type: '' });
        }, 5000);
    };

    const closeToast = () => {
        setToast({ show: false, message: '', type: '' });
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
            showToast('✅ Message sent successfully! We will get back to you soon.', 'success');
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        }, (error) => {
            console.log(error.text);
            showToast('❌ Failed to send message. Please try again or contact us directly.', 'error');
        });
    };

    return (
        <section id="contact" className="contact-us">
            {/* Toast Notification */}
            {toast.show && (
                <div className={`toast-notification ${toast.type}`}>
                    <div className="toast-content">
                        <span className="toast-icon">
                            {toast.type === 'success' ? '✅' : '❌'}
                        </span>
                        <span className="toast-message">{toast.message}</span>
                    </div>
                    <button className="toast-close" onClick={closeToast}>✕</button>
                </div>
            )}

            {/* Contact Details - LEFT SIDE */}
            <div className="contact-details">
                <h2>📞 Get in Touch</h2>
                <p className="contact-subtitle">
                    Have questions about our products or services? We'd love to hear from you.
                </p>

                <div className="contact-info">
                    <p className="contact-item">
                        <span className="contact-icon">📱</span>
                        <a href="tel:+93700332876" className="contact-link">
                            +93 70 033 2876
                        </a>
                    </p>
                    <p className="contact-item">
                        <span className="contact-icon">📧</span>
                        <a href="mailto:info@hikmatdryfruits.com" className="contact-link">
                            info@hikmatdryfruits.com
                        </a>
                    </p>
                    <p className="contact-item">
                        <span className="contact-icon">📍</span>
                        <span className="contact-text">Kandahar, Afghanistan</span>
                    </p>
                    <p className="contact-item">
                        <span className="contact-icon">🕐</span>
                        <span className="contact-text">9 AM - 5 PM (Sat - Thu)</span>
                    </p>
                </div>

                {/* WhatsApp Button */}
                <div style={{ marginTop: '20px' }}>
                    <a
                        href="https://wa.me/93700332876?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20products."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-btn"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            padding: '12px 30px',
                            background: '#25D366',
                            color: 'white',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: '700',
                            transition: 'all 0.3s ease',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 211, 102, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <img 
                            src="/images/whatsapp.png" 
                            alt="WhatsApp" 
                            style={{ 
                                width: '24px', 
                                height: '24px',
                            }} 
                        />
                        WhatsApp
                    </a>
                </div>

                {/* ⬇️ Google Map - SMALLER & AFTER WHATSAPP ⬇️ */}
                <div style={{ 
                    marginTop: '20px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid rgba(184, 134, 11, 0.15)',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.06)',
                    maxWidth: '100%'
                }}>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.2295930214627!2d65.81109307438786!3d31.57275127418999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed677c3ccbda28d%3A0xd22c11d23a0248a1!2sHikmat%20dry%20fruits!5e0!3m2!1sen!2s!4v1786145935208!5m2!1sen!2s" 
                        width="100%" 
                        height="180" 
                        style={{ 
                            border: 0,
                            display: 'block'
                        }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Hikmat Dry Fruits Location Map"
                    ></iframe>
                </div>
            </div>

            {/* Contact Form - RIGHT SIDE */}
            <div className="contact-form">
                <h3 className="contact-form-title">
                    Send Us a Message
                </h3>
                <form onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Your Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your full name"
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email address"
                            className="form-input"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Your Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows="5"
                            placeholder="Tell us how we can help..."
                            className="form-textarea"
                        />
                    </div>

                    <button type="submit" className="submit-btn">
                        📤 Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}