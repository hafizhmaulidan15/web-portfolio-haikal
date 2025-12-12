import { projects } from '../data/profileData';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Projects & Publications</h2>
                <p className="section-subtitle">Technical books and publications authored</p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={`project-card ${project.status}`}
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            {/* Status Badge */}
                            <div className={`project-status ${project.status}`}>
                                {project.status === 'ongoing' ? '🔄 In Progress' : '✅ Completed'}
                            </div>

                            {/* Book Cover Placeholder */}
                            <div className="project-cover">
                                <div className="cover-design">
                                    <div className="cover-lines">
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="cover-line" style={{ '--line-delay': `${i * 0.1}s` }}></div>
                                        ))}
                                    </div>
                                    <div className="cover-icon">📚</div>
                                    <span className="cover-type">{project.type}</span>
                                </div>
                                <div className="cover-glow"></div>
                            </div>

                            {/* Project Info */}
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-period">
                                    <span className="period-icon">🗓️</span>
                                    {project.period}
                                </p>
                                <p className="project-description">{project.description}</p>

                                {/* Tags */}
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="project-decoration">
                                <svg className="circuit-corner" viewBox="0 0 50 50">
                                    <path d="M0,50 L0,30 L10,20 L30,20" fill="none" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="35" cy="20" r="3" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Banner */}
                <div className="projects-stats">
                    <div className="stat-banner">
                        <div className="banner-item">
                            <span className="banner-number">5+</span>
                            <span className="banner-label">Books Published</span>
                        </div>
                        <div className="banner-divider"></div>
                        <div className="banner-item">
                            <span className="banner-number">2000+</span>
                            <span className="banner-label">Pages Written</span>
                        </div>
                        <div className="banner-divider"></div>
                        <div className="banner-item">
                            <span className="banner-number">4</span>
                            <span className="banner-label">Technologies Covered</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
