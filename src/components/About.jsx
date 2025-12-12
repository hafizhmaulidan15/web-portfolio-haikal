import { profileData, education } from '../data/profileData';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>

                <div className="about-grid">
                    {/* Profile Card */}
                    <div className="about-profile">
                        <div className="profile-frame">
                            <div className="frame-corner top-left"></div>
                            <div className="frame-corner top-right"></div>
                            <div className="frame-corner bottom-left"></div>
                            <div className="frame-corner bottom-right"></div>
                            <div className="profile-image">
                                <div className="profile-placeholder">
                                    <span className="initials">MHR</span>
                                </div>
                                <div className="profile-scan-line"></div>
                            </div>
                        </div>
                        <div className="profile-info">
                            <h3 className="profile-name">{profileData.name}</h3>
                            <p className="profile-title">{profileData.title}</p>
                            <div className="profile-location">
                                <span className="location-icon">📍</span>
                                <span>{profileData.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* About Content */}
                    <div className="about-content">
                        <div className="terminal-window">
                            <div className="terminal-header">
                                <div className="terminal-buttons">
                                    <span className="btn-red"></span>
                                    <span className="btn-yellow"></span>
                                    <span className="btn-green"></span>
                                </div>
                                <span className="terminal-title">haikal@portfolio:~</span>
                            </div>
                            <div className="terminal-body">
                                <p className="terminal-command">
                                    <span className="prompt">$</span> cat about.txt
                                </p>
                                <p className="terminal-output">{profileData.about}</p>
                                <p className="terminal-command">
                                    <span className="prompt">$</span> <span className="cursor-blink">_</span>
                                </p>
                            </div>
                        </div>

                        {/* Education */}
                        <div className="education-section">
                            <h3 className="subsection-title">
                                <span className="title-icon">🎓</span>
                                Education
                            </h3>
                            {education.map((edu) => (
                                <div key={edu.id} className="education-card cyber-card">
                                    <div className="edu-header">
                                        <h4 className="edu-institution">{edu.institution}</h4>
                                        <span className="edu-period">{edu.period}</span>
                                    </div>
                                    <p className="edu-degree">{edu.degree}</p>
                                    <p className="edu-description">{edu.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Quick Contact */}
                        <div className="quick-contact">
                            <a href={`mailto:${profileData.email}`} className="contact-chip">
                                <span className="chip-icon">📧</span>
                                <span>{profileData.email}</span>
                            </a>
                            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="contact-chip">
                                <span className="chip-icon">💼</span>
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
