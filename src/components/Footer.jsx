import { profileData } from '../data/profileData';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-glow"></div>

            <div className="container">
                <div className="footer-content">
                    {/* Logo */}
                    <div className="footer-logo">
                        <span className="logo-bracket">&lt;</span>
                        <span className="logo-text">HAIKAL</span>
                        <span className="logo-slash">/</span>
                        <span className="logo-bracket">&gt;</span>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>

                    {/* Social Links */}
                    <div className="footer-social">
                        <a href={`mailto:${profileData.email}`} className="social-link" aria-label="Email">
                            <span className="social-icon">📧</span>
                        </a>
                        <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <span className="social-icon">💼</span>
                        </a>
                        <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <span className="social-icon">💻</span>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer-divider"></div>

                {/* Copyright */}
                <div className="footer-bottom">
                    <p className="copyright">
                        <span className="copy-symbol">©</span> {currentYear} {profileData.name}. All rights reserved.
                    </p>
                    <p className="footer-tagline">
                        <span className="tagline-icon">⚡</span>
                        Network Engineer | Trainer | Author
                    </p>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="footer-decoration">
                <div className="deco-line left"></div>
                <div className="deco-line right"></div>
            </div>
        </footer>
    );
};

export default Footer;
