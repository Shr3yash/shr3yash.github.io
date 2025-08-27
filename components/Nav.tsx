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
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav
          className={[
            'mt-4 mb-4 flex items-center justify-between rounded-2xl px-3 py-2 text-sm backdrop-blur-md ring-1 ring-inset',
            // light mode
            'border-zinc-900/10 bg-white/60 text-zinc-800 ring-black/5',
            // dark mode
            'dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:ring-white/5',
          ].join(' ')}
        >
          {/* Brand */}
          <Link
            href="/"
            className="rounded-xl px-2 py-1 font-medium text-zinc-900 hover:bg-zinc-900/5 dark:text-zinc-100 dark:hover:bg-white/10"
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
                      ? 'bg-zinc-900/10 text-zinc-900 dark:bg-white/10 dark:text-white'
                      : 'text-zinc-700 hover:bg-zinc-900/5 dark:text-zinc-200 dark:hover:bg-white/10',
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
              className="hidden rounded-xl px-3 py-1.5 text-zinc-700 hover:bg-zinc-900/5 dark:text-zinc-200 dark:hover:bg-white/10 sm:inline-block"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shr3yash/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-xl px-3 py-1.5 text-zinc-700 hover:bg-zinc-900/5 dark:text-zinc-200 dark:hover:bg-white/10 sm:inline-block"
            >
              LinkedIn
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
