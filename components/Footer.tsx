'use client';

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <p className="footer-text">
          Built with care · Tolga Kurotglu · 2026
        </p>
      </div>
      <style jsx>{`
        .footer {
          border-top: 1px solid var(--border);
          padding: 1.5rem 0;
        }
        .footer-text {
          text-align: center;
          font-size: 0.9rem;
          color: var(--text-dim);
        }
      `}</style>
    </footer>
  );
}
