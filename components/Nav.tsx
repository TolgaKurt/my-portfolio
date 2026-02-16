'use client';

import { useState } from 'react';

const links = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="nav"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="nav-inner container">
        <a href="#" className="nav-logo mono" aria-label="Home">
          [Tolga]
        </a>
        <button
          type="button"
          className="nav-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label="Toggle menu"
        >
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
          <span className={open ? 'open' : ''} />
        </button>
        <ul id="nav-menu" className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(10, 10, 12, 0.7);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          transition: var(--transition);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .nav-logo {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--accent);
        }
        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          padding: 8px;
        }
        .nav-toggle span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text);
          transition: var(--transition);
        }
        .nav-toggle span:nth-child(1) {
          transform: translateY(0);
        }
        .nav-toggle span.open:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .nav-toggle span:nth-child(2) {
          opacity: 1;
        }
        .nav-toggle span.open:nth-child(2) {
          opacity: 0;
        }
        .nav-toggle span:nth-child(3) {
          transform: translateY(0);
        }
        .nav-toggle span.open:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
        .nav-links {
          display: flex;
          list-style: none;
          gap: 2rem;
        }
        .nav-links a {
          color: var(--text-muted);
          font-size: 0.95rem;
          transition: color var(--transition);
        }
        .nav-links a:hover {
          color: var(--accent);
        }
        @media (max-width: 768px) {
          .nav-toggle {
            display: flex;
          }
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background: rgba(10, 10, 12, 0.95);
            backdrop-filter: blur(12px);
            padding: 1rem;
            gap: 0;
            border-bottom: 1px solid var(--border);
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            transition: max-height 0.3s ease, opacity 0.2s ease;
          }
          .nav-links.open {
            max-height: 280px;
            opacity: 1;
          }
          .nav-links li {
            padding: 0.75rem 0;
            border-bottom: 1px solid var(--border);
          }
          .nav-links li:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </nav>
  );
}
