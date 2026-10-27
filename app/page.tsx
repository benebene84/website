import { BlogPosts } from 'app/components/posts'
import { PageContainer } from 'app/components/ui/page-container'
import beneImage from 'app/images/bene.jpg'
import { baseUrl } from 'app/sitemap'
import { createMetadata, siteName } from 'app/utils/metadata'
import type { Metadata } from 'next'
import Image from 'next/image'
import { ViewTransition } from 'react'
import { Headline, SectionHeading } from './components/ui'

export const metadata: Metadata = createMetadata({
  title: 'Benedikt Sperl – Software Architect & Lead Engineer, Munich',
  description:
    'Benedikt Sperl is a Software Architect and Lead Engineer based in Munich, Germany, with a passion for web development, UX design, accessibility, performance optimization and automation.',
  path: '/',
  absoluteTitle: true,
  image: '/images/benedikt-sperl.jpg',
})

const professionalExperience = [
  {
    company: 'WOLF GmbH',
    role: 'Lead Engineer Frontend',
    duration: '03/2024 – present',
    description: 'Managing and leading the development of the frontend',
    highlights: [
      'Technical Leadership: Define the architecture for the frontend, choosing frameworks, libraries, and best practices for scalability, performance, and maintainability.',
      'Collaboration with UX/UI: Work closely with UX/UI designers to ensure that the frontend is aligned with the design vision and user experience and that the design system is followed.',
      'Accessibility: Ensure that the frontend is accessible and compliant with accessibility guidelines, such as WCAG 2.1 AA.',
      'Performance Optimization: Optimize the frontend for performance, using tools like Lighthouse, WebPageTest, and utilise proper caching.',
    ],
  },
  {
    company: 'BSH Home Appliances',
    role: 'Frontend Architect',
    duration: '06/2020 – 02/2024',
    description:
      'Managed the transformation of a monolith e-commerce architecture into a modern multi application frontend based on React and Next.Js',
    highlights: [
      'Key player in the global relaunch of 14 e-commerce brands across 30 countries',
      'Creating a new frontend architecture target picture to split up a monolith e-commerce system into microservices with different frontend applications',
      'Choosing the technology stack for the new frontend with special focus on performance optimizations',
      'Creation of a reusable multibrand component library',
    ],
  },
]

const whatIDo = [
  {
    title: '(Frontend) Architecture',
    description:
      'Scalable architectures for complex web platforms, built for delivery speed and maintainability.',
  },
  {
    title: 'Microfrontends & Design Systems',
    description:
      'Modular frontends and multi-brand component libraries that let large teams ship in parallel.',
  },
  {
    title: 'Performance Engineering',
    description:
      'Measurable gains in load time, runtime performance and Core Web Vitals.',
  },
  {
    title: 'DX',
    description:
      'Monorepos, tooling and CI/CD that make engineering teams faster, calmer and happier.',
  },
  {
    title: 'AI-Assisted Engineering',
    description:
      'LLM integration and AI-driven workflows that accelerate prototyping and raise code quality.',
  },
]

export default function Page() {
  return (
    <ViewTransition>
      <main className="page-animate-in" id="main">
        <PageContainer wide className="flex flex-col gap-16 sm:gap-20">
          <script
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <needed for structured data>
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'ProfilePage',
                '@id': `${baseUrl}/#profile`,
                url: baseUrl,
                name: `${siteName} – Software Architect & Lead Engineer`,
                mainEntity: { '@id': `${baseUrl}/#person` },
              }),
            }}
          />
          {/* Hero */}
          <section className="flex flex-col gap-8 sm:flex-row-reverse sm:items-start sm:justify-between sm:gap-12">
            <Image
              src={beneImage}
              width={160}
              height={160}
              alt="Benedikt Sperl"
              className="size-36 shrink-0 rounded-sm object-cover sm:size-40"
              placeholder="blur"
              priority
            />
            <div>
              <Headline as="div">
                Hi, I'm <h1 className="inline">Benedikt Sperl</h1>
              </Headline>
              <p className="text-text-secondary mt-5 max-w-xl leading-relaxed text-pretty">
                Software Architect and Lead Engineer with a strong focus on
                Frontend, based in Munich, Germany. I specialize in crafting web
                applications with a strong focus on UX design, accessibility,
                performance optimization, and automation.
              </p>
            </div>
          </section>

          {/* What I do */}
          <section aria-labelledby="what-i-do">
            <header className="mb-8">
              <SectionHeading id="what-i-do">What I love to do</SectionHeading>
            </header>
            <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {whatIDo.map((item, index) => (
                <li
                  key={item.title}
                  className="border-border-subtle flex flex-col gap-2 border-t pt-5"
                >
                  <span className="text-text-muted font-mono text-sm tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-text-primary font-medium">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-pretty">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Recent Articles */}
          <section aria-labelledby="recent-articles">
            <SectionHeading id="recent-articles" className="mb-8">
              Recent Articles
            </SectionHeading>
            <BlogPosts limit={5} />
          </section>

          {/* Experience */}
          <section aria-labelledby="experience">
            <SectionHeading id="experience" className="mb-8">
              Experience
            </SectionHeading>
            <div className="flex flex-col">
              {professionalExperience.map((experience) => (
                <article
                  className="border-border-subtle flex flex-col gap-3 border-t py-6 first:border-t-0 first:pt-0 last:pb-0"
                  key={experience.role}
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                    <h3 className="text-text-primary font-medium">
                      {experience.company}
                    </h3>
                    <span className="text-text-tertiary font-mono text-sm tabular-nums">
                      {experience.duration}
                    </span>
                  </div>
                  <p className="text-text-secondary text-sm">
                    {experience.role}
                  </p>
                  <p className="text-text-secondary leading-relaxed text-pretty">
                    {experience.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-text-secondary flex gap-3 leading-relaxed text-pretty"
                      >
                        <span
                          className="text-text-muted select-none"
                          aria-hidden="true"
                        >
                          –
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* Background */}
          <section aria-labelledby="background">
            <SectionHeading id="background" className="mb-8">
              Background
            </SectionHeading>
            <div className="text-text-secondary max-w-xl space-y-4 leading-relaxed text-pretty">
              <p>
                People often ask how someone with a degree in Political Science,
                Sociology and Economics from Ludwig-Maximilians-Universität
                Munich ends up in software architecture. I started programming
                at 12 or 13, but studying computer science felt too
                one-dimensional. I've always cared about more than code:
                technology, design, society and the ethical questions behind
                them.
              </p>
              <p>
                My path led through project management in marketing and digital
                agencies, where I ran campaigns, coordinated IT projects and
                built landing pages, taking on more technical responsibility
                with every project. What shaped my career was seeing UX problems
                that could no longer be fixed once a project had reached a
                certain stage. That pushed me deeper into development, so I
                could build products from the ground up that work technically
                and deliver a great user experience.
              </p>
            </div>
          </section>
        </PageContainer>
      </main>
    </ViewTransition>
  )
}
