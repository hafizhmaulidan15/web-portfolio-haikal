import { profileData } from '../data/profileData';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-subtitle">
                    Have a project in mind or want to collaborate? Let's connect!
                </p>

                <div className="contact-content">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <div className="info-header">
                            <div className="info-icon-wrapper">
                                <span className="info-main-icon">📨</span>
                            </div>
                            <h3 className="info-title">Contact Information</h3>
                            <p className="info-desc">Feel free to reach out through any of these channels</p>
                        </div>

                        <div className="info-items">
                            <a href={`mailto:${profileData.email}`} className="info-item">
                                <div className="item-icon">
                                    <span>📧</span>
                                </div>
                                <div className="item-content">
                                    <span className="item-label">Email</span>
                                    <span className="item-value">{profileData.email}</span>
                                </div>
                                <div className="item-arrow">→</div>
                            </a>

                            <a href={`tel:${profileData.phone}`} className="info-item">
                                <div className="item-icon">
                                    <span>📱</span>
                                </div>
                                <div className="item-content">
                                    <span className="item-label">Phone</span>
                                    <span className="item-value">{profileData.phone}</span>
                                </div>
                                <div className="item-arrow">→</div>
                            </a>

                            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="info-item">
                                <div className="item-icon">
                                    <span>💼</span>
                                </div>
                                <div className="item-content">
                                    <span className="item-label">LinkedIn</span>
                                    <span className="item-value">Muhammad Haikal Ramadhika</span>
                                </div>
                                <div className="item-arrow">→</div>
                            </a>

                            <div className="info-item location">
                                <div className="item-icon">
                                    <span>📍</span>
                                </div>
                                <div className="item-content">
                                    <span className="item-label">Location</span>
                                    <span className="item-value">{profileData.location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Circuit */}
                        <div className="info-circuit">
                            <svg viewBox="0 0 200 100" className="circuit-svg">
                                <path d="M0,50 L30,50 L40,30 L60,30 L70,50 L100,50" className="circuit-path" />
                                <path d="M100,50 L130,50 L140,70 L160,70 L170,50 L200,50" className="circuit-path" />
                                <circle cx="40" cy="30" r="4" className="circuit-node" />
                                <circle cx="100" cy="50" r="4" className="circuit-node" />
                                <circle cx="160" cy="70" r="4" className="circuit-node" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
