'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Blog', href: '/blog' },
  { label: 'Now', href: '/now' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-[200] w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav
          className={[
            'mt-4 mb-4 flex items-center justify-between rounded-2xl',
            'border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200',
            'backdrop-blur-md ring-1 ring-inset ring-white/5',
            'relative isolate pointer-events-auto', // <- create a stacking context & ensure clicks are allowed
          ].join(' ')}
        >
          {/* Brand */}
          <Link
            href="/"
            className="rounded-xl px-2 py-1 font-medium text-zinc-100 hover:bg-white/5"
          >
            Shreyash&apos; Portfolio
          </Link>

          {/* Center links */}
          <div className="hidden gap-1 sm:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={[
                    'rounded-xl px-3 py-1.5',
                    active
                      ? 'bg-white/10 text-white'
                      : 'text-zinc-200 hover:bg-white/10',
                  ].join(' ')}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/Shr3yash"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl px-3 py-1.5 text-zinc-200 hover:bg-white/10 sm:inline-block"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shr3yash/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl px-3 py-1.5 text-zinc-200 hover:bg-white/10 sm:inline-block"
            >
              LinkedIn
            </a>

            {/* Force the toggle above any stray overlays */}
            <div className="relative z-[300] pointer-events-auto">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
