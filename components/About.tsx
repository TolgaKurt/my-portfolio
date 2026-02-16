'use client';

import { ScrollReveal } from './ScrollReveal';

const timeline = [
  { year: '2024', title: 'AI-Augmented Development', desc: 'Integrating AI tools into daily workflow.' },
  { year: '2023', title: 'Mobile App Prototyping', desc: 'iOS and Android prototype projects.' },
  { year: '2022', title: 'Game Development', desc: 'Godot and game design fundamentals.' },
  { year: '2021', title: 'IoT & Embedded Systems', desc: 'ESP32, sensors, and firmware.' },
  { year: '2020', title: 'Web Dev & UI/UX Design', desc: 'Foundations in web and design.' },
];

export function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-heading">
      <div className="container">
        <ScrollReveal>
          <p className="section-label mono">ABOUT</p>
          <h2 id="about-heading" className="section-title">About Me</h2>
        </ScrollReveal>
        <div className="about-grid">
          <ScrollReveal delay={0}>
            <div className="about-text">
              <p>
                [I'm a self-taught developer and designer based in Taiwan. I've spent the last several years learning across web development, embedded systems, mobile prototyping, and game dev — not to check boxes, but because I like taking ideas from zero to a working product.]
              </p>
              <p>
                [I believe the best developers understand design, and the best products come from people who can move between hardware and software, code and pixels. My work tends to sit at that intersection.]
              </p>
              <p>
                [Open to roles where I can ship real things, work with smart people, and keep learning. Especially interested in forward-deployed and full-stack opportunities that value versatility.]
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="timeline">
              {timeline.map((item) => (
                <div key={item.year} className="timeline-item">
                  <span className="timeline-year mono">{item.year}</span>
                  <div className="timeline-content">
                    <strong className="timeline-title">{item.title}</strong>
                    <span className="timeline-desc">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .about-text p {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          line-height: 1.65;
        }
        .about-text p:last-child {
          margin-bottom: 0;
        }
        .timeline {
          border-left: 2px solid var(--border);
          padding-left: 1.5rem;
          position: relative;
        }
        .timeline-item {
          position: relative;
          padding-bottom: 1.5rem;
        }
        .timeline-item:last-child {
          padding-bottom: 0;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -1.5rem;
          top: 0.25rem;
          transform: translateX(-50%);
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--accent);
        }
        .timeline-year {
          display: block;
          font-size: 0.8rem;
          color: var(--accent);
          margin-bottom: 0.25rem;
        }
        .timeline-title {
          display: block;
          color: var(--text);
          font-size: 1rem;
          margin-bottom: 0.15rem;
        }
        .timeline-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
