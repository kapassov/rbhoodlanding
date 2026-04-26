import Link from 'next/link';
import { ReactNode } from 'react';
import { ChevronLeft, Radar } from 'lucide-react';

type LegalShellProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export function LegalShell({ title, description, children }: LegalShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#0b0f0e_0%,#111715_48%,#0b0f0e_100%)] text-text">
      <div className="pointer-events-none absolute inset-0 bg-hero-grid bg-[size:72px_72px] opacity-[0.07]" />
      <div className="container-shell relative py-8 sm:py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-muted transition hover:border-primary/20 hover:text-text"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mt-10 max-w-4xl rounded-[32px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
              <Radar className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-semibold tracking-[0.18em] text-text">ROBINHOOD</div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted">Independent educational analytics platform</div>
            </div>
          </div>

          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">{title}</h1>
            <p className="mt-4 text-base leading-8 text-muted">{description}</p>
          </div>

          <div className="mt-10 space-y-6 text-sm leading-7 text-muted sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
