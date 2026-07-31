import './global.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { Footer } from './components/ui/footer'
import { Header } from './components/ui/header'
import { SkipLink } from './components/ui/skip-link'
import { geistMono, geistSans } from './fonts'
import { baseUrl } from './sitemap'
import { cx } from './utils/cx'

const jobTitle = 'Software Architect and Engineering Lead'

const bio = `${jobTitle} based in Munich, Germany, with a passion for web development, UX design, accessibility, performance optimization and automation.`

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Benedikt Sperl',
    template: '%s | Benedikt Sperl',
  },
  description: `${bio} I love building user interfaces and products people like to interact with.`,
  openGraph: {
    title: 'Benedikt Sperl',
    description: `Benedikt Sperl is a ${bio} He loves building user interfaces and products people like to interact with.`,
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
      className={cx('scroll-smooth', geistSans.variable, geistMono.variable)}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
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
              jobTitle,
              description: `Benedikt Sperl is a ${bio}`,
              url: baseUrl,
              image: `${baseUrl}/images/bene.jpg`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Munich',
                addressRegion: 'Bavaria',
                addressCountry: 'DE',
              },
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
              worksFor: {
                '@type': 'OrganizationRole',
                roleName: 'Engineering Lead Frontend',
                startDate: '2024-03',
                description:
                  'Managing and leading the development of the frontend',
                worksFor: {
                  '@type': 'Organization',
                  name: 'WOLF GmbH',
                },
              },
              alumniOf: [
                {
                  '@type': 'OrganizationRole',
                  roleName: 'Frontend Architect',
                  startDate: '2020-06',
                  endDate: '2024-02',
                  description:
                    'Managed the transformation of a monolith e-commerce architecture into a modern multi application frontend based on React and Next.Js',
                  alumniOf: {
                    '@type': 'Organization',
                    name: 'BSH Home Appliances',
                  },
                },
                {
                  '@type': 'CollegeOrUniversity',
                  name: 'Ludwig-Maximilians-Universität München',
                  sameAs: 'https://www.lmu.de/',
                },
              ],
              knowsAbout: [
                'Web Development',
                'Frontend Architecture',
                'TypeScript',
                'React',
                'Next.js',
                'Node.js',
                'Astro',
                'UX Design',
                'Accessibility',
                'Performance Optimization',
                'Automation',
                'CI/CD',
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
      <body className="min-h-screen font-sans antialiased">
        <SkipLink />
        <Header />
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
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
