import { useEffect, useState } from 'react';
import { profileData } from '../data/profileData';
import './Hero.css';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const fullText = profileData.title;

    useEffect(() => {
        let index = 0;
        let timer;

        const typeText = () => {
            if (index < fullText.length) {
                setDisplayText(fullText.slice(0, index + 1));
                index++;
                timer = setTimeout(typeText, 100);
            } else {
                setIsTyping(false);
            }
        };

        timer = setTimeout(typeText, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="home" className="hero">
            {/* Animated Background Elements */}
            <div className="hero-bg">
                <div className="cyber-grid"></div>
                <div className="floating-particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`
                        }}></div>
                    ))}
                </div>
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
                <div className="glow-orb orb-3"></div>
            </div>

            <div className="hero-container">
                <div className="hero-content">
                    {/* Status Badge */}
                    <div className="status-badge">
                        <span className="status-dot"></span>
                        <span className="status-text">Available for Opportunities</span>
                    </div>

                    {/* Name with Glitch Effect */}
                    <h1 className="hero-name">
                        <span className="greeting">Hello, I'm</span>
                        <span className="name glitch" data-text={profileData.name}>
                            {profileData.name}
                        </span>
                    </h1>

                    {/* Typing Effect Title */}
                    <div className="hero-title">
                        <span className="title-prefix">&gt;&gt;</span>
                        <span className="title-text">{displayText}</span>
                        <span className={`cursor ${isTyping ? 'blink' : ''}`}>_</span>
                    </div>

                    {/* Tagline */}
                    <p className="hero-tagline">{profileData.tagline}</p>

                    {/* CTA Buttons */}
                    <div className="hero-buttons">
                        <a href="#contact" className="neon-button primary">
                            <span className="btn-icon">⚡</span>
                            <span>Get In Touch</span>
                        </a>
                        <a href="#projects" className="neon-button secondary">
                            <span className="btn-icon">📚</span>
                            <span>View Projects</span>
                        </a>
                    </div>

                    {/* Quick Stats */}
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">7+</span>
                            <span className="stat-label">Certifications</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Books Written</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">7+</span>
                            <span className="stat-label">Training Sessions</span>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="hero-decoration">
                    <div className="hex-grid">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="hexagon" style={{ animationDelay: `${i * 0.2}s` }}></div>
                        ))}
                    </div>
                    <div className="circuit-lines">
                        <svg viewBox="0 0 200 200" className="circuit-svg">
                            <path className="circuit-path" d="M10,100 L50,100 L60,80 L80,80 L90,100 L130,100" />
                            <path className="circuit-path" d="M10,120 L40,120 L50,140 L90,140 L100,120 L150,120" />
                            <circle cx="50" cy="100" r="3" className="circuit-node" />
                            <circle cx="90" cy="100" r="3" className="circuit-node" />
                            <circle cx="50" cy="140" r="3" className="circuit-node" />
                            <circle cx="100" cy="120" r="3" className="circuit-node" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="scroll-indicator">
                <span className="scroll-text">Scroll Down</span>
                <div className="scroll-line">
                    <div className="scroll-dot"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
