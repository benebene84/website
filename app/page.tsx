import { BlogPosts } from 'app/components/posts'
import { PageContainer } from 'app/components/ui/page-container'
import { ViewTransition } from 'react'
import { Headline } from './components/ui'

const professionalExperience = [
  {
    company: 'WOLF',
    role: 'Frontend Lead',
    duration: '03-2024 - present',
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
    duration: '06-2020 - 02-2024',
    description:
      'Managed the transformation of a monolith e-commerce architecture into a modern multi application frontend based on React and Next.Js',
    highlights: [
      'Creating a new frontend architecture target picture to split up a monolith e-commerce system into microservices with different frontend applications',
      'Choosing the technology stack for the new frontend with special focus on performance optimizations',
      'Creation of a reusable mulitbrand component library',
    ],
  },
  {
    company: 'BSH Home Appliances',
    role: 'Senior UX & Digital Solutions Specialist',
    duration: '05/2019 - 06/2020',
    description: 'Identified, tested and implemented global UX/UI improvements',
    highlights: [
      'Website and Conversion Optimization',
      'UX & UI improvements for digital touchpoints',
    ],
  },
  {
    company: 'BSH Home Appliances',
    role: 'Global Brand Website Manager - Bosch Home Appliances',
    duration: '08/2015 - 05/2019',
    description: 'SPOC for the Global Bosch website',
    highlights: [
      'Website and Conversion Optimization',
      'Development and Implementation of digital tools',
      'Planning, Implementation and Analysis of Global Marketing Campaigns',
    ],
  },
]

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Performance',
  'Accessibility',
  'UX Design',
  'Architecture',
  'CI/CD',
]

export default function Page() {
  return (
    <ViewTransition>
      <main className="page-animate-in" id="main">
        <PageContainer wide>
          {/* Hero */}
          <section className="mb-16">
            <Headline as="div">
              Hi, I'm <h1 className="inline">Benedikt Sperl</h1>!
            </Headline>
            <p className="mt-4 max-w-xl text-lg text-text-secondary leading-relaxed">
              <strong className="text-text-primary">Frontend Architect</strong>{' '}
              and <strong className="text-text-primary">Frontend Lead</strong>{' '}
              based in Munich, Germany. I specialize in crafting
              high-performance web applications with a strong focus on{' '}
              <strong className="text-text-primary">UX design</strong>,{' '}
              <strong className="text-text-primary">accessibility</strong>, and{' '}
              <strong className="text-text-primary">automation</strong>.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-16">
            <h2 className="mb-4 font-semibold text-xl tracking-tight">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-tag-bg px-3 py-1 text-sm text-tag-text"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Recent Articles */}
          <section className="mb-16">
            <h2 className="mb-6 font-semibold text-xl tracking-tight">
              Recent Articles
            </h2>
            <BlogPosts limit={5} />
          </section>

          {/* Experience */}
          <section>
            <h2 className="mb-6 font-semibold text-xl tracking-tight">
              Experience
            </h2>
            <div className="flex flex-col gap-8">
              {professionalExperience.map((experience) => (
                <div
                  className="flex flex-col gap-3 border-accent border-l-2 pl-4"
                  key={experience.role}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <strong className="text-lg">{experience.company}</strong>
                      <span className="rounded-full bg-tag-bg px-2 py-0.5 text-tag-text text-xs">
                        {experience.role}
                      </span>
                    </div>
                    <span className="font-mono text-sm text-text-tertiary">
                      {experience.duration}
                    </span>
                  </div>
                  <p className="text-text-secondary">
                    {experience.description}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {experience.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-sm text-text-tertiary"
                      >
                        <span className="text-accent">·</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </PageContainer>
      </main>
    </ViewTransition>
  )
}
