'use client';

import { useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

/**
 * SSR-safe theme toggle:
 * - Render both icons; CSS (dark:) shows/hides, so SSR/CSR markup matches.
 * - Keep <html> class + localStorage in sync.
 */
export default function ThemeToggle() {
  // Ensure DOM has the correct class immediately on mount (backup to the init script)
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      const next =
        stored === 'light' || stored === 'dark'
          ? stored
          : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const cls = document.documentElement.classList;
      next === 'dark' ? cls.add('dark') : cls.remove('dark');

      // Optional: help native UI colors
      let m = document.querySelector('meta[name="color-scheme"]') as HTMLMetaElement | null;
      if (!m) {
        m = document.createElement('meta');
        m.name = 'color-scheme';
        document.head.appendChild(m);
      }
      m.content = next === 'dark' ? 'dark light' : 'light dark';
    } catch {}
  }, []);

  const toggle = () => {
    try {
      const isDark = document.documentElement.classList.contains('dark');
      const next = isDark ? 'light' : 'dark';
      const cls = document.documentElement.classList;
      next === 'dark' ? cls.add('dark') : cls.remove('dark');
      localStorage.setItem('theme', next);

      const m = document.querySelector('meta[name="color-scheme"]') as HTMLMetaElement | null;
      if (m) m.content = next === 'dark' ? 'dark light' : 'light dark';
    } catch {}
  };

  return (
    <button
      type="button"                                  // ensure it never submits forms
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border
                 border-zinc-900/10 bg-white/50 text-zinc-800 hover:bg-white/70
                 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10
                 pointer-events-auto relative z-50"
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
