import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { SkipLink } from './components/ui/skip-link'
import Script from 'next/script'
import { cx } from './utils/utils'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Benedikt Sperl',
    template: '%s | Benedikt Sperl',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'Benedikt Sperl',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'Benedikt Sperl',
    locale: 'de_DE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'scroll-smooth bg-white text-black dark:bg-black dark:text-white',
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <body className="mx-4 mt-8 max-w-3xl antialiased lg:mx-auto">
        <SkipLink />
        <main className="flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
        </main>
        {process.env.NODE_ENV === 'production' && (
          <Script
            defer
            src="https://cloud.umami.is/script.js"
            data-website-id="e5a9dd7b-f9a8-41f0-82bd-8c7a5a911239"
          />
        )}
      </body>
    </html>
  )
}
