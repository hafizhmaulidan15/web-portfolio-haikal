import { certifications, achievements } from '../data/profileData';
import './Certifications.css';

const Certifications = () => {
    return (
        <section id="certifications" className="section certifications">
            <div className="container">
                <h2 className="section-title">Certifications & Achievements</h2>

                {/* Certifications Grid */}
                <div className="cert-section">
                    <h3 className="subsection-heading">
                        <span className="heading-icon">🏆</span>
                        Professional Certifications
                    </h3>

                    <div className="cert-grid">
                        {certifications.map((cert, index) => (
                            <div
                                key={cert.id}
                                className="cert-card"
                                style={{
                                    '--accent': cert.color,
                                    '--delay': `${index * 0.1}s`
                                }}
                            >
                                <div className="cert-badge">
                                    <div className="badge-outer">
                                        <div className="badge-inner">
                                            <span className="badge-icon">🎖️</span>
                                        </div>
                                    </div>
                                    <div className="badge-glow"></div>
                                </div>

                                <div className="cert-content">
                                    <h4 className="cert-name">{cert.name}</h4>
                                    <div className="cert-meta">
                                        <span className="cert-issuer">
                                            <span className="meta-icon">🏢</span>
                                            {cert.issuer}
                                        </span>
                                        <span className="cert-date">
                                            <span className="meta-icon">📅</span>
                                            {cert.date}
                                        </span>
                                    </div>
                                    {cert.description && (
                                        <p className="cert-description">{cert.description}</p>
                                    )}
                                </div>

                                <div className="cert-decoration">
                                    <div className="deco-corner"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements Section */}
                <div className="achievements-section">
                    <h3 className="subsection-heading">
                        <span className="heading-icon">🌟</span>
                        Competitions & Awards
                    </h3>

                    <div className="achievements-grid">
                        {achievements.map((achievement, index) => (
                            <div
                                key={achievement.id}
                                className="achievement-card"
                                style={{ '--delay': `${index * 0.15}s` }}
                            >
                                <div className="achievement-medal">
                                    <span className="medal-emoji">{achievement.icon}</span>
                                </div>

                                <div className="achievement-content">
                                    <h4 className="achievement-title">{achievement.title}</h4>
                                    <p className="achievement-event">{achievement.event}</p>
                                    <span className="achievement-date">{achievement.date}</span>
                                </div>

                                <div className="achievement-shine"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
