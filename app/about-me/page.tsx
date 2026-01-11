import { Headline } from 'app/components/ui'
import { Window } from 'app/components/ui/window'
import beneImage from 'app/images/bene.jpg'
import type { Metadata } from 'next'
import Image from 'next/image'
import { ViewTransition } from 'react'

export const metadata: Metadata = {
  title: 'About Me | Benedikt Sperl',
  description:
    "Hi, I'm Benedikt Sperl – Frontend Architect and Frontend Lead based in Munich, Germany.",
}

const keyRoles = [
  {
    company: 'BSH Home Appliances Group',
    period: '2015–2024',
    achievements: [
      'Key player in the global relaunch of 14 e-commerce brands across 30 countries',
      'Transformed a monolithic architecture into modern microservices using React & Next.js',
      'Built a reusable multi-brand component library',
      'Made strategic technology decisions with a focus on performance, scalability, and accessibility',
    ],
  },
  {
    company: 'WOLF GmbH',
    period: 'since 2024',
    achievements: [
      'Leading the frontend development team',
      'Defining the technology stack and collaborating closely with UX/UI design',
      'Implementing strict accessibility standards (WCAG 2.1 AA)',
      'Driving performance optimization using tools like Lighthouse, WebPageTest, and tailored caching strategies',
    ],
  },
]

const strengths = [
  {
    title: 'Technical leadership',
    description: 'from architecture to deployment',
  },
  {
    title: 'User-first mindset',
    description: 'aligning UX and technology',
  },
  {
    title: 'Broad expertise',
    description:
      'from Marketing, UX, UI, conversion rate optimization to high-end web development',
  },
]

export default function AboutMe() {
  return (
    <ViewTransition>
      <main className="flex flex-col gap-6" id="main">
        {/* Profile Window */}
        <Window
          title="About Me.app"
          as="article"
          className="window-animate-in"
          hover
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-8">
            {/* Profile Image */}
            <div className="w-fit shrink-0 overflow-hidden">
              <Image
                src={beneImage}
                width={160}
                height={160}
                alt="Benedikt Sperl - Frontend Architect and Frontend Lead"
                className="h-40 w-40 rounded-sm object-cover"
                placeholder="blur"
                priority
              />
            </div>

            {/* Profile Content */}
            <div className="flex flex-col gap-4">
              <Headline as="h1">About Me</Headline>
              <p className="text-text-secondary sm:text-lg">
                Hi, I'm{' '}
                <strong className="text-text-primary">Benedikt Sperl</strong> –
                Frontend Architect and Frontend Lead based in Munich, Germany.
              </p>
              <p className="text-text-secondary">
                For over a decade, I've been building high-performance web
                applications that are technically excellent, user-friendly, and
                sustainable. My focus areas include UX design, accessibility,
                performance optimization, and automation.
              </p>
            </div>
          </div>
        </Window>

        {/* Two column layout */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Journey Window */}
          <Window
            title="journey.md"
            as="section"
            className="window-animate-in"
            hover
          >
            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-lg tracking-tighter">
                From Social Sciences to Frontend Architecture
              </h2>
              <p className="text-text-secondary">
                People often ask how someone with a degree in Political Science,
                Sociology, and Economics from Ludwig-Maximilians-Universität
                Munich ends up in software development.
              </p>
              <p className="text-text-secondary">
                The short answer: I started programming when I was 12 or 13 –
                but studying computer science felt too one-dimensional. I've
                always been interested in more than just code: technology,
                design, society, and the ethical questions behind them.
              </p>
              <p className="text-text-secondary">
                My broad range of interests still guide my work today: I want to
                develop technology that is not only efficient but puts the user
                at the center.
              </p>
            </div>
          </Window>

          {/* Strengths Window */}
          <Window
            title="strengths.json"
            variant="terminal"
            as="aside"
            className="window-animate-in"
            hover
          >
            <div className="flex flex-col gap-3">
              <p className="text-terminal-muted">
                <span className="text-terminal-prompt">➜</span>{' '}
                <span className="text-terminal-path">~</span> cat strengths.json
              </p>
              <pre className="overflow-x-auto text-sm">
                <code>
                  <span className="text-terminal-muted">{'{'}</span>
                  {'\n'}
                  <span className="text-sh-keyword"> "what_sets_me_apart"</span>
                  <span className="text-terminal-muted">: [</span>
                  {'\n'}
                  {strengths.map((strength, index) => (
                    <span key={strength.title}>
                      <span className="text-terminal-muted">{`   {`}</span>
                      {'\n'}
                      <span className="text-terminal-path">{`     "title"`}</span>
                      <span className="text-terminal-muted">{`: `}</span>
                      <span className="text-sh-string">{`"${strength.title}"`}</span>
                      <span className="text-terminal-muted">,</span>
                      {'\n'}
                      <span className="text-terminal-path">{`     "desc"`}</span>
                      <span className="text-terminal-muted">{`: `}</span>
                      <span className="text-sh-string">{`"${strength.description}"`}</span>
                      {'\n'}
                      <span className="text-terminal-muted">{`   }`}</span>
                      {index < strengths.length - 1 && (
                        <span className="text-terminal-muted">,</span>
                      )}
                      {'\n'}
                    </span>
                  ))}
                  <span className="text-terminal-muted">{' ]'}</span>
                  {'\n'}
                  <span className="text-terminal-muted">{'}'}</span>
                </code>
              </pre>
            </div>
          </Window>
        </div>

        {/* Path Window */}
        <Window
          title="path.txt"
          as="section"
          className="window-animate-in"
          hover
        >
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-lg tracking-tighter">
              My Path into Development
            </h2>
            <p className="text-text-secondary">
              During my time as a project manager in marketing and digital
              agencies, I managed campaigns, coordinated IT projects, and built
              landing pages. Gradually, I took on more and more technical
              responsibilities – from concept to implementation.
            </p>
            <p className="text-text-secondary">
              What really shaped my career was seeing UX issues that couldn't be
              fixed anymore once projects reached a certain stage. That
              motivated me to move deeper into development, so I could design
              products from the ground up that work technically and deliver
              great user experiences.
            </p>
          </div>
        </Window>

        {/* Key Roles Window */}
        <Window
          title="career.log"
          as="section"
          className="window-animate-in"
          hover
        >
          <div className="flex flex-col gap-6">
            <h2 className="font-semibold text-xl tracking-tighter">
              Key Roles & Achievements
            </h2>
            {keyRoles.map((role) => (
              <div
                key={role.company}
                className="flex flex-col gap-3 border-accent border-l-2 pl-4"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <strong className="text-lg">{role.company}</strong>
                  <span className="rounded-full bg-badge-bg px-2 py-0.5 text-badge-text text-xs">
                    {role.period}
                  </span>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {role.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-2 text-sm text-text-tertiary"
                    >
                      <span className="text-accent">✓</span>
                      <span>{achievement}</span>
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
