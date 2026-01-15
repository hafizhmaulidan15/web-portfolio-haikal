import { skills } from '../data/profileData';
import './Skills.css';

const Skills = () => {
    // Get vendor-based skills and other categories
    const vendorSkills = Object.entries(skills).filter(([key]) => 
        !['design', 'softSkills', 'languages'].includes(key)
    );

    // Icon mapping for vendors
    const iconMap = {
        'Cisco (CCNA)': '🌐',
        'MikroTik (MTCNA, MTCRE)': '📡',
        'Fortinet (FortiGate)': '🔥',
        'Tools & Technologies': '🔧'
    };

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>

                <div className="skills-grid">
                    {/* Vendor-based Skills (Cisco, MikroTik, Fortinet, Tools) */}
                    {vendorSkills.map(([vendor, skillList], catIndex) => (
                        <div key={catIndex} className="skill-category">
                            <div className="category-header">
                                <span className="category-icon">{iconMap[vendor] || '⚡'}</span>
                                <h3 className="category-title">{vendor}</h3>
                            </div>
                            <div className="skill-list">
                                {skillList.map((skill, index) => (
                                    <div 
                                        key={index} 
                                        className="skill-item" 
                                        style={{ '--delay': `${index * 0.05}s` }}
                                    >
                                        <span className="skill-bullet">▹</span>
                                        <span className="skill-name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Design Tools */}
                    <div className="skill-category tools-category">
                        <div className="category-header">
                            <span className="category-icon">🎨</span>
                            <h3 className="category-title">Design</h3>
                        </div>
                        <div className="tools-grid">
                            {skills.design.map((tool, index) => (
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
