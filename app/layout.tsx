import type { Metadata } from 'next';
import { DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tolga Kurotglu — Full-Stack Developer & Designer',
  description: 'Portfolio of a self-taught developer and designer. Web, embedded, mobile, game dev, UI/UX.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: 'var(--font-sans)' }}>
        <div className="blob blob-1" aria-hidden />
        <div className="blob blob-2" aria-hidden />
        <div className="blob blob-3" aria-hidden />
        {children}
      </body>
    </html>
  );
}
