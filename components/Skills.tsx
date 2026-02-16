'use client';

import { ScrollReveal } from './ScrollReveal';

const skills = [
  {
    title: 'Web Development',
    description: 'HTML, CSS, JavaScript, React, responsive design, component architecture.',
    icon: '◇',
  },
  {
    title: 'UI/UX Design',
    description: 'Wireframing, prototyping, user flows, turning complex systems into intuitive interfaces.',
    icon: '◆',
  },
  {
    title: 'Embedded / IoT',
    description: 'ESP32, Arduino, sensor integration, firmware, web dashboards for hardware.',
    icon: '◈',
  },
  {
    title: 'Mobile Prototyping',
    description: 'iOS and Android app prototypes, cross-platform development.',
    icon: '◎',
  },
  {
    title: 'Game Development',
    description: 'Godot, Cocos2d, state management, physics systems, rendering optimization.',
    icon: '✦',
  },
  {
    title: 'AI-Assisted Development',
    description: 'Claude, GitHub Copilot, AI tools for rapid prototyping and debugging.',
    icon: '◉',
  },
];

export function Skills() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-heading">
      <div className="container">
        <ScrollReveal>
          <p className="section-label">What I work with</p>
          <h2 id="skills-heading" className="section-title">Technical Skills</h2>
        </ScrollReveal>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <ScrollReveal key={skill.title} stagger staggerIndex={i} delay={i * 60}>
              <article className="skill-card">
                <div className="skill-icon mono">{skill.icon}</div>
                <h3 className="skill-title">{skill.title}</h3>
                <p className="skill-desc">{skill.description}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .skill-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          transition: transform var(--transition), border-color var(--transition), box-shadow var(--transition);
        }
        .skill-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          box-shadow: var(--shadow-hover);
        }
        .skill-icon {
          font-size: 1.5rem;
          color: var(--accent);
          margin-bottom: 0.75rem;
        }
        .skill-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: var(--text);
        }
        .skill-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.55;
        }
      `}</style>
    </section>
  );
}
