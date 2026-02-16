'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
  staggerIndex?: number;
};

export function ScrollReveal({ children, className = '', delay = 0, stagger, staggerIndex = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const d = stagger ? staggerIndex * 80 : delay;
            setTimeout(() => setVisible(true), d);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, stagger, staggerIndex]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        transitionDelay: visible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
}
