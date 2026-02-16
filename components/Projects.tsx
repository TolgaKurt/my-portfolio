'use client';

import { ScrollReveal } from './ScrollReveal';

const projects = [
  {
    title: 'ESP32 Smart Dashboard',
    description: 'IoT web control interface with real-time sensor monitoring and WiFi device control.',
    tags: ['ESP32', 'C/C++', 'JavaScript', 'WebSockets', 'REST API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/YOUR-USERNAME',
  },
  {
    title: 'Mobile App Prototype',
    description: 'Cross-platform iOS/Android app with UX research–informed design.',
    tags: ['iOS', 'Android', 'UI/UX', 'Figma'],
    liveUrl: '#',
    githubUrl: 'https://github.com/YOUR-USERNAME',
  },
  {
    title: '2D Game — Godot Engine',
    description: 'Complete game with custom physics, state management, and inventory systems.',
    tags: ['Godot', 'GDScript', 'Game Design'],
    liveUrl: '#',
    githubUrl: 'https://github.com/YOUR-USERNAME',
  },
  {
    title: 'Responsive Web Application',
    description: 'Full-stack web app with component architecture and API integrations.',
    tags: ['React', 'JavaScript', 'CSS', 'API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/YOUR-USERNAME',
  },
];

export function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading">
      <div className="container">
        <ScrollReveal>
          <p className="section-label mono">SELECTED WORK</p>
          <h2 id="projects-heading" className="section-title">Projects</h2>
        </ScrollReveal>
        <div className="projects-list">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 80}>
              <article className="project-card">
                {/* Replace with real screenshot: <img src="/path/to/screenshot.png" alt="" /> */}
                <div className="project-image">
                  <span className="project-image-placeholder">Screenshot / Demo GIF</span>
                </div>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag mono">{tag}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.liveUrl} className="project-link">Live Demo ↗</a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">GitHub ↗</a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <style jsx>{`
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
        }
        .project-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          box-shadow: var(--shadow-hover);
        }
        .project-image {
          height: 240px;
          background: radial-gradient(ellipse at center, var(--bg-elevated) 0%, var(--bg) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .project-image-placeholder {
          font-size: 0.9rem;
          color: var(--text-dim);
          font-family: var(--font-mono), monospace;
        }
        .project-body {
          padding: 1.5rem;
        }
        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text);
        }
        .project-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
          line-height: 1.55;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .project-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.6rem;
          background: var(--accent-muted);
          color: var(--accent);
          border-radius: 999px;
        }
        .project-links {
          display: flex;
          gap: 1rem;
        }
        .project-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--accent);
          transition: color var(--transition);
        }
        .project-link:hover {
          color: var(--accent-warm);
        }
      `}</style>
    </section>
  );
}
