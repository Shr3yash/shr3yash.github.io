import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Shreyash Bhatkar — Portfolio',
  description: 'Portfolio of Shreyash Bhatkar',
  metadataBase: new URL('https://shr3yash.github.io'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        {/* Runs before React hydrates; avoids flash & hydration mismatch */}
        <Script id="theme-init" strategy="beforeInteractive">{`
          try {
            var t = localStorage.getItem('theme');
            var dark = t ? (t === 'dark') : window.matchMedia('(prefers-color-scheme: dark)').matches;
            var c = document.documentElement.classList;
            dark ? c.add('dark') : c.remove('dark');
          } catch (e) {}
        `}</Script>

        {children}
      </body>
    </html>
  )
}
