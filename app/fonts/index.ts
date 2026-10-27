import localFont from 'next/font/local'

/** Display serif — optical sizes for headlines and the wordmark. */
export const newsreader = localFont({
  src: [
    {
      path: './newsreader/Newsreader-Variable.woff2',
      style: 'normal',
    },
    {
      path: './newsreader/Newsreader-Italic-Variable.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-newsreader',
  display: 'swap',
  weight: '200 800',
})

/** Geist via `next/font/local` so we can tune display + fallback metrics (package export is minimal). */
export const geistSans = localFont({
  src: '../../node_modules/geist/dist/fonts/geist-sans/Geist-Variable.woff2',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
})

export const geistMono = localFont({
  src: '../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
  fallback: [
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ],
})
