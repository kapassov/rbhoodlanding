import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Robinhood | Independent Educational Analytics Platform',
  description:
    'Robinhood is an independent educational analytics platform for traders focused on market learning, structured analysis, and risk-aware decision support.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
