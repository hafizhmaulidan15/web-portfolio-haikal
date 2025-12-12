import { useState, useEffect } from 'react';
import { navLinks } from '../data/profileData';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.href.substring(1));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
                    <span className="logo-bracket">&lt;</span>
                    <span className="logo-text">HAIKAL</span>
                    <span className="logo-slash">/</span>
                    <span className="logo-bracket">&gt;</span>
                </a>

                <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            <span className="nav-link-text">{link.name}</span>
                            <span className="nav-link-line"></span>
                        </a>
                    ))}
                </div>

                <button
                    className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
