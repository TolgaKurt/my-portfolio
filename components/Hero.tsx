'use client';

import { ScrollReveal } from './ScrollReveal';

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="container hero-inner">
        <ScrollReveal delay={0}>
          <p className="hero-eyebrow mono">Full-Stack Developer · UI/UX Designer · Maker</p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h1 className="hero-title">
            I build things that <span className="gradient">bridge hardware & software</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="hero-subtitle">
            Self-taught developer and designer with a focus on turning ideas into working products — from web apps and mobile prototypes to embedded systems and games.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="https://github.com/YOUR-USERNAME" target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              GitHub ↗
            </a>
          </div>
        </ScrollReveal>
      </div>
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 64px;
        }
        .hero-inner {
          max-width: 720px;
        }
        .hero-eyebrow {
          font-size: clamp(0.8rem, 1.5vw, 0.9rem);
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
        .hero-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 1.25rem;
          color: var(--text);
        }
        .gradient {
          background: linear-gradient(135deg, var(--accent), var(--accent-warm));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: var(--text-muted);
          margin-bottom: 2rem;
          max-width: 540px;
        }
        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
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
