import { BlogPosts } from 'app/components/posts'
import { Window } from 'app/components/ui/window'
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
      <main className="flex flex-col gap-6" id="main">
        {/* Hero Window */}
        <Window
          title="Welcome.app"
          as="section"
          className="window-animate-in"
          hover
        >
          <div className="flex flex-col gap-4 py-2">
            <Headline as="div">
              Hi, I'm <h1 className="inline">Benedikt Sperl</h1>!
            </Headline>
            <p className="text-text-secondary sm:text-lg">
              <strong className="text-text-primary">Frontend Architect</strong>{' '}
              and <strong className="text-text-primary">Frontend Lead</strong>{' '}
              based in Munich, Germany. I specialize in crafting
              high-performance web applications with a strong focus on{' '}
              <strong className="text-text-primary">UX design</strong>,{' '}
              <strong className="text-text-primary">accessibility</strong>, and{' '}
              <strong className="text-text-primary">automation</strong>.
            </p>
          </div>
        </Window>

        {/* Two column layout for Terminal and Blog */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Terminal Window - Skills */}
          <Window
            title="skills.sh"
            variant="terminal"
            as="aside"
            className="window-animate-in"
            hover
          >
            <div className="flex flex-col gap-2">
              <p className="text-terminal-muted">
                <span className="text-terminal-prompt">➜</span>{' '}
                <span className="text-terminal-path">~</span> cat skills.txt
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded border border-terminal-text/30 bg-terminal-text/10 px-2 py-1 text-terminal-text"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-2 text-terminal-muted">
                <span className="text-terminal-prompt">➜</span>{' '}
                <span className="text-terminal-path">~</span>{' '}
                <span className="animate-pulse">▊</span>
              </p>
            </div>
          </Window>

          {/* Blog Posts Window */}
          <Window
            title="Articles"
            variant="finder"
            as="section"
            className="window-animate-in"
            hover
          >
            <BlogPosts limit={5} />
          </Window>
        </div>

        {/* Experience Window */}
        <Window
          title="experience.md"
          as="section"
          className="window-animate-in"
          hover
        >
          <div className="flex flex-col gap-6">
            <h2 className="font-semibold text-xl tracking-tighter">
              Professional Experience
            </h2>
            {professionalExperience.map((experience) => (
              <div
                className="flex flex-col gap-3 border-accent border-l-2 pl-4"
                key={experience.company}
              >
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <strong className="text-lg">{experience.company}</strong>
                    <span className="rounded-full bg-badge-bg px-2 py-0.5 text-badge-text text-xs">
                      {experience.role}
                    </span>
                  </div>
                  <span className="text-sm text-text-tertiary">
                    {experience.duration}
                  </span>
                </div>
                <p className="text-text-secondary">{experience.description}</p>
                <ul className="flex flex-col gap-1.5">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-2 text-sm text-text-tertiary"
                    >
                      <span className="text-accent">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Window>
      </main>
    </ViewTransition>
  )
}
