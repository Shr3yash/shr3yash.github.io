import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'MyPortfolio',
  description: 'Portfolio of Shreyash Bhatkar',
  metadataBase: new URL('https://shr3yash.github.io'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Start in dark for the very first paint; suppress hydration mismatch warnings
    <html lang="en" className="h-full dark" suppressHydrationWarning>
      <head>
        {/* Default control colors for first paint (script updates this if user chose light) */}
        <meta name="color-scheme" content="dark light" />

        {/* Instant theme setter — runs before hydration */}
        <Script id="theme-init" strategy="beforeInteractive">{`
          try {
            var t = localStorage.getItem('theme');
            // Default to dark if user has no saved preference
            var dark = t ? (t === 'dark') : true;
            var c = document.documentElement.classList;
            dark ? c.add('dark') : c.remove('dark');

            // Keep native controls in sync
            var m = document.querySelector('meta[name="color-scheme"]');
            if (!m) {
              m = document.createElement('meta');
              m.setAttribute('name', 'color-scheme');
              document.head.appendChild(m);
            }
            m.setAttribute('content', dark ? 'dark light' : 'light dark');
          } catch (e) {}
        `}</Script>
      </head>

      <body className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
