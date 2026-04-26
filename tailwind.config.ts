import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0F0E',
        panel: '#111715',
        panelStrong: '#151A18',
        primary: '#00D084',
        primaryDark: '#00B875',
        text: '#F5F7F6',
        muted: '#9BA8A3',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.05), 0 24px 80px rgba(0, 208, 132, 0.14)',
      },
      backgroundImage: {
        'hero-grid': 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
