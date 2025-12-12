import { experiences } from '../data/profileData';
import './Experience.css';

const Experience = () => {
    const getTypeColor = (type) => {
        const colors = {
            internship: 'var(--neon-cyan)',
            freelance: 'var(--neon-green)',
            trainer: 'var(--neon-magenta)',
            competition: 'var(--neon-yellow)'
        };
        return colors[type] || 'var(--neon-cyan)';
    };

    const getTypeLabel = (type) => {
        const labels = {
            internship: 'INTERNSHIP',
            freelance: 'FREELANCE',
            trainer: 'TRAINER',
            competition: 'COMPETITION'
        };
        return labels[type] || type.toUpperCase();
    };

    return (
        <section id="experience" className="section experience">
            <div className="container">
                <h2 className="section-title">Experience</h2>

                <div className="experience-timeline">
                    <div className="timeline-line"></div>

                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                            style={{ '--accent-color': getTypeColor(exp.type) }}
                        >
                            <div className="timeline-node">
                                <div className="node-outer">
                                    <div className="node-inner"></div>
                                </div>
                            </div>

                            <div className="timeline-content cyber-card">
                                <div className="exp-type-badge" style={{
                                    borderColor: getTypeColor(exp.type),
                                    color: getTypeColor(exp.type)
                                }}>
                                    {getTypeLabel(exp.type)}
                                </div>

                                <h3 className="exp-title">{exp.title}</h3>
                                <p className="exp-company">
                                    <span className="company-icon">🏢</span>
                                    {exp.company}
                                </p>
                                <p className="exp-period">
                                    <span className="period-icon">📅</span>
                                    {exp.period}
                                </p>
                                <p className="exp-description">{exp.description}</p>

                                <div className="exp-decoration">
                                    <div className="deco-line"></div>
                                    <div className="deco-dot"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
