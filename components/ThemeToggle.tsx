'use client';

import { useEffect, useCallback } from 'react';
import { Moon, Sun } from 'lucide-react';

/**
 * SSR-safe theme toggle:
 * - Renders both icons; CSS shows/hides (no SSR mismatch).
 * - Uses very high z-index + pointer-events-auto so it's always clickable.
 */
export default function ThemeToggle() {
  // Ensure the html class reflects stored/system preference on mount (belt & suspenders)
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      const next =
        stored === 'light' || stored === 'dark'
          ? stored
          : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

      const cls = document.documentElement.classList;
      next === 'dark' ? cls.add('dark') : cls.remove('dark');

      // Ensure color-scheme meta exists (affects form controls)
      let m = document.querySelector('meta[name="color-scheme"]') as HTMLMetaElement | null;
      if (!m) {
        m = document.createElement('meta');
        m.name = 'color-scheme';
        document.head.appendChild(m);
      }
      m.content = next === 'dark' ? 'dark light' : 'light dark';
    } catch {}
  }, []);

  const toggle = useCallback(() => {
    try {
      const isDark = document.documentElement.classList.contains('dark');
      const next = isDark ? 'light' : 'dark';
      const cls = document.documentElement.classList;
      next === 'dark' ? cls.add('dark') : cls.remove('dark');
      localStorage.setItem('theme', next);

      const m = document.querySelector('meta[name="color-scheme"]') as HTMLMetaElement | null;
      if (m) m.content = next === 'dark' ? 'dark light' : 'light dark';
    } catch {}
  }, []);

  const onKey = useCallback((e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  }, [toggle]);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggle}
      onKeyDown={onKey}
      className={[
        'inline-flex h-9 w-9 shrink-0 items-center justify-center',
        'rounded-xl border border-white/10 bg-white/5',
        'text-zinc-700 hover:bg-white/10 dark:text-zinc-200',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400',
        'pointer-events-auto relative z-[9999]', // <- make sure it’s on top and clickable
        'select-none',
      ].join(' ')}
    >
      {/* Render both icons so SSR/CSR markup is identical */}
      <span className="block dark:hidden" aria-hidden>
        <Moon className="h-4 w-4" />
      </span>
      <span className="hidden dark:block" aria-hidden>
        <Sun className="h-4 w-4" />
      </span>
    </button>
  );
}
