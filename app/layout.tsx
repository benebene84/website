import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { SkipLink } from './components/ui/skip-link'
import Script from 'next/script'
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
      className={cx(
        'scroll-smooth bg-white text-black dark:bg-black dark:text-white',
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <head>
        <script
          type="application/ld+json"
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
      </head>
      <body className="mx-4 mt-8 w-full max-w-3xl antialiased lg:mx-auto">
        <SkipLink />
        <div className="flex min-w-0 flex-auto flex-col px-2 md:px-0">
          <Navbar />
          {children}
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
