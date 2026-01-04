import './global.css'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Desktop } from './components/ui/desktop'
import { Dock } from './components/ui/dock'
import { MenuBar } from './components/ui/menu-bar'
import { SkipLink } from './components/ui/skip-link'
import { baseUrl } from './sitemap'
import { cx } from './utils/cx'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Benedikt Sperl',
    template: '%s | Benedikt Sperl',
  },
  description:
    'Frontend Architect / Frontend Lead with a passion for web development, UX design, accessibility, performance optimization and automation. I love building user interfaces and products people like to interact with.',
  openGraph: {
    title: 'Benedikt Sperl',
    description:
      'Benedikt Sperl is a Frontend Architect / Frontend Lead with a passion for web development, UX design, accessibility, performance optimization and automation. He loves building user interfaces and products people like to interact with.',
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
      className={cx('scroll-smooth', GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <needed for structured data>
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              '@id': 'https://www.benedikt-sperl.de/#person',
              name: 'Benedikt Sperl',
              jobTitle: 'Frontend Architect / Frontend Lead',
              description:
                'Frontend Architect / Frontend Lead with a passion for web development, UX design, accessibility, performance optimization and automation.',
              url: baseUrl,
              image: `${baseUrl}/images/bene.jpg`,
              sameAs: [
                'https://github.com/benebene84',
                'https://www.linkedin.com/in/benedikt-sperl/',
                'https://www.npmjs.com/~benebene84',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'benedikt.sperl@gmail.com',
                contactType: 'personal',
                availableLanguage: ['en', 'de'],
              },
              worksFor: [
                {
                  '@type': 'Organization',
                  name: 'WOLF',
                  jobTitle: 'Frontend Lead',
                  startDate: '2024-03',
                  description:
                    'Managing and leading the development of the frontend',
                },
                {
                  '@type': 'Organization',
                  name: 'BSH Home Appliances',
                  jobTitle: 'Frontend Architect',
                  startDate: '2019-01',
                  endDate: '2024-02',
                  description:
                    'Managed the transformation of a monolith e-commerce architecture into a modern multi application frontend based on React and Next.Js',
                },
              ],
              knowsAbout: [
                'Web Development',
                'Frontend Architecture',
                'React',
                'Next.js',
                'UX Design',
                'Accessibility',
                'Performance Optimization',
                'Automation',
              ],
              knowsLanguage: ['en', 'de'],
            }),
          }}
        />
        {/* Theme initialization script - runs before React hydration to prevent flash */}
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <needed for script tag>
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else if (systemDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <SkipLink />

        {/* OS Menu Bar - fixed at top */}
        <MenuBar />

        {/* Desktop Environment */}
        <Desktop>{children}</Desktop>

        {/* OS Dock - fixed at bottom */}
        <Dock />

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
