'use client';

import { ScrollReveal } from './ScrollReveal';

export function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container contact-inner">
        <ScrollReveal>
          <p className="section-label mono">GET IN TOUCH</p>
          <h2 id="contact-heading" className="section-title">Let&apos;s Build Something</h2>
          <p className="contact-subtitle">
            Open to opportunities, collaborations, and interesting conversations.
          </p>
          <div className="contact-buttons">
            <a href="mailto:kurtoglu.tolga@gmail.com" className="btn btn-primary">
              Email Me
            </a>
            <a href="https://github.com/YOUR-USERNAME" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/YOUR-PROFILE" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              LinkedIn ↗
            </a>
          </div>
        </ScrollReveal>
      </div>
      <style jsx>{`
        .contact-inner {
          text-align: center;
          max-width: 560px;
          margin: 0 auto;
        }
        .contact-subtitle {
          font-size: 1rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          line-height: 1.6;
        }
        .contact-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius);
          font-weight: 600;
          font-size: 0.95rem;
          transition: all var(--transition);
        }
        .btn-primary {
          background: var(--accent);
          color: var(--bg);
        }
        .btn-primary:hover {
          filter: brightness(1.1);
          box-shadow: 0 0 24px rgba(79, 209, 197, 0.3);
        }
        .btn-ghost {
          border: 1px solid var(--border);
          color: var(--text);
        }
        .btn-ghost:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}
