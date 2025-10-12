import { BlogPosts } from 'app/components/posts'
import { ViewTransition } from 'react'

const professionalExperience = [
  {
    company: 'WOLF',
    role: 'Frontend Lead',
    duration: '03-2024 - present',
    description: 'Managing and leading the development of the frontend',
    highlights: [
      'Technical Leadership: Define the architecture for the frontend, choosing frameworks, libraries, and best practices for scalability, performance, and maintainability.',
      'Collaboration with UX/UI: Work closely with UX/UI designers to ensure that the frontend is aligned with the design vision and user experience and that the design system is followed.',
      'Accessibility: Ensure that the frontend is accessible and compliant with accessibility guidelines, such as WCAG 2.1 AA. This includes implementing proper color contrast, providing alt text for images, and ensuring that the website is navigable using only a keyboard, or a screen reader.',
      'Performance Optimization: Optimize the frontend for performance, using tools like Lighthouse, WebPageTest, and utilise proper caching.',
    ],
  },
  {
    company: 'BSH Home Appliances',
    role: 'Frontend Architect',
    duration: '01-2019 - 02-2024',
    description:
      'Managed the transformation of a monolith e-commerce architecture into a modern multi application frontend based on React and Next.Js',
    highlights: [
      'Creating a new frontend architecture target picture to split up a monolith e-commerce system into microservices with different frontend applications',
      'Choosing the technology stack for the new frontend with special focus on performance optimizations',
      'Creation of a reusable mulitbrand component library',
    ],
  },
]

export default function Page() {
  return (
    <ViewTransition>
      <main className="flex flex-col gap-8" id="main">
        <section className="flex flex-col-reverse gap-8 text-left sm:flex-row sm:py-14 sm:text-center">
          <div>
            <div className="mb-2 inline-block bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-4xl font-semibold tracking-tighter text-transparent sm:mb-6 sm:text-6xl dark:from-purple-800 dark:to-pink-600">
              Hi, I'm <h1 className="inline-block">Benedikt Sperl</h1>!
            </div>
            <p className="sm:text-lg">
              <strong>Frontend Architect</strong> and{' '}
              <strong>Frontend Lead</strong> based in Munich, Germany. I
              specialize in crafting high-performance web applications with a
              strong focus on <strong>UX design</strong>,{' '}
              <strong>accessibility</strong>, and <strong>automation</strong>.
              My passion lies in building user interfaces and products that
              people truly enjoy interacting with.
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="mb-1 text-xl font-semibold tracking-tighter">
            Articles
          </h2>
          <BlogPosts />
        </section>
        <section className="flex flex-col gap-4">
          <h2 className="mb-1 text-xl font-semibold tracking-tighter">
            Professional Experience
          </h2>
          <span className="flex flex-col gap-4">
            {professionalExperience.map((experience) => (
              <span className="flex flex-col gap-4" key={experience.company}>
                <span className="flex flex-col gap-1 md:flex-row md:gap-2">
                  <strong>{experience.company}</strong>
                  <span className="hidden md:block">|</span>
                  <strong>{experience.role}</strong>
                  <span className="hidden md:block">|</span>
                  <span>{experience.duration}</span>
                </span>

                <span>{experience.description}</span>
                <ul className="flex flex-col gap-2">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="ml-4 list-disc pl-2">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </span>
            ))}
          </span>
        </section>
      </main>
    </ViewTransition>
  )
}
