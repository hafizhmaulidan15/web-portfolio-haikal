import { skills } from '../data/profileData';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>

                <div className="skills-grid">
                    {/* Networking Skills */}
                    <div className="skill-category">
                        <div className="category-header">
                            <span className="category-icon">🌐</span>
                            <h3 className="category-title">Networking & Cisco</h3>
                        </div>
                        <div className="skill-bars">
                            {skills.networking.map((skill, index) => (
                                <div key={index} className="skill-bar-item">
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-level">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress"
                                            style={{
                                                '--progress': `${skill.level}%`,
                                                '--delay': `${index * 0.1}s`
                                            }}
                                        >
                                            <div className="progress-glow"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* MikroTik Skills */}
                    <div className="skill-category">
                        <div className="category-header">
                            <span className="category-icon">📡</span>
                            <h3 className="category-title">MikroTik</h3>
                        </div>
                        <div className="skill-bars">
                            {skills.mikrotik.map((skill, index) => (
                                <div key={index} className="skill-bar-item">
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-level">{skill.level}%</span>
                                    </div>
                                    <div className="skill-bar">
                                        <div
                                            className="skill-progress magenta"
                                            style={{
                                                '--progress': `${skill.level}%`,
                                                '--delay': `${index * 0.1}s`
                                            }}
                                        >
                                            <div className="progress-glow"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="skill-category tools-category">
                        <div className="category-header">
                            <span className="category-icon">🔧</span>
                            <h3 className="category-title">Tools & Technologies</h3>
                        </div>
                        <div className="tools-grid">
                            {skills.tools.map((tool, index) => (
                                <div key={index} className="tool-chip" style={{ '--delay': `${index * 0.1}s` }}>
                                    <span className="tool-indicator"></span>
                                    <span className="tool-name">{tool}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="skill-category soft-category">
                        <div className="category-header">
                            <span className="category-icon">💡</span>
                            <h3 className="category-title">Soft Skills</h3>
                        </div>
                        <div className="soft-skills-grid">
                            {skills.softSkills.map((skill, index) => (
                                <div key={index} className="soft-skill-item" style={{ '--delay': `${index * 0.1}s` }}>
                                    <div className="soft-skill-hexagon">
                                        <span className="soft-skill-number">{String(index + 1).padStart(2, '0')}</span>
                                    </div>
                                    <span className="soft-skill-name">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="skill-category languages-category">
                        <div className="category-header">
                            <span className="category-icon">🗣️</span>
                            <h3 className="category-title">Languages</h3>
                        </div>
                        <div className="languages-grid">
                            {skills.languages.map((lang, index) => (
                                <div key={index} className="language-card">
                                    <div className="lang-flag">
                                        {lang.name === 'Indonesian' ? '🇮🇩' : '🇬🇧'}
                                    </div>
                                    <div className="lang-info">
                                        <span className="lang-name">{lang.name}</span>
                                        <span className="lang-level">{lang.level}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
