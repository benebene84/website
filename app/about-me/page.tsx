import Image from 'next/image'
import beneImage from 'app/images/bene.jpg'
import { ViewTransition } from 'react'

export const metadata = {
  title: 'About Me | Benedikt Sperl',
  description:
    "Hi, I'm Benedikt Sperl – Frontend Architect and Frontend Lead based in Munich, Germany.",
}

export default function AboutMe() {
  return (
    <ViewTransition>
      <main className="flex flex-col gap-8" id="main">
        <section className="flex flex-col-reverse gap-8 text-left sm:flex-row sm:pb-14">
          <div className="flex flex-col gap-4">
            <h1 className="mb-2 inline-block bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-4xl font-semibold tracking-tighter text-transparent sm:mb-6 sm:text-6xl dark:from-purple-800 dark:to-pink-600">
              About Me
            </h1>
            <p className="sm:text-lg">
              Hi, I'm <strong>Benedikt Sperl</strong> – Frontend Architect and
              Frontend Lead based in Munich, Germany.
            </p>
            <p className="sm:text-lg">
              For over a decade, I've been building high-performance web
              applications that are technically excellent, user-friendly, and
              sustainable. My focus areas include UX design, accessibility,
              performance optimization, and automation – always with the goal of
              creating digital products that people truly enjoy using.
            </p>
          </div>
          <Image
            src={beneImage}
            width={128}
            height={128}
            alt="Benedikt Sperl - Frontend Architect and Frontend Lead"
            className="h-32 w-32 rounded-full"
            placeholder="blur"
            priority
          />
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="mb-1 text-xl font-semibold tracking-tighter">
            From Social Sciences to Frontend Architecture
          </h2>
          <p>
            People often ask how someone with a degree in Political Science,
            Sociology, and Economics from Ludwig-Maximilians-Universität Munich
            ends up in software development.
          </p>
          <p>
            The short answer: I started programming when I was 12 or 13 – but
            studying computer science felt too one-dimensional. I've always been
            interested in more than just code: technology, design, society, and
            the ethical questions behind them.
          </p>
          <p>
            My broad range of interests and strong moral compass still guide my
            work today: I want to develop technology that is not only efficient
            but puts the user at the center.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="mb-1 text-xl font-semibold tracking-tighter">
            My Path into Development
          </h2>
          <p>
            During my time as a project manager in marketing and digital
            agencies, I managed campaigns, coordinated IT projects, and built
            landing pages. Gradually, I took on more and more technical
            responsibilities – from concept to implementation.
          </p>
          <p>
            What really shaped my career was seeing UX issues that couldn't be
            fixed anymore once projects reached a certain stage. That motivated
            me to move deeper into development, so I could design products from
            the ground up that work technically and deliver great user
            experiences.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="mb-1 text-xl font-semibold tracking-tighter">
            What Sets Me Apart
          </h2>
          <ul className="flex flex-col gap-2">
            <li className="ml-4 list-disc pl-2">
              <strong>Technical leadership</strong> – from architecture to
              deployment
            </li>
            <li className="ml-4 list-disc pl-2">
              <strong>User-first mindset</strong> – aligning UX and technology
            </li>
            <li className="ml-4 list-disc pl-2">
              <strong>Broad expertise</strong> – from Marketing, UX, UI,
              conversion rate optimization to high-end web development
            </li>
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="mb-1 text-xl font-semibold tracking-tighter">
            Key Roles & Achievements
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 md:flex-row md:gap-2">
                <strong>BSH Home Appliances Group</strong>
                <span className="hidden md:block">|</span>
                <span>2015–2024</span>
              </div>
              <ul className="flex flex-col gap-2">
                <li className="ml-4 list-disc pl-2">
                  Key player in the global relaunch of 14 e-commerce brands
                  across 30 countries
                </li>
                <li className="ml-4 list-disc pl-2">
                  Transformed a monolithic architecture into modern
                  microservices using React & Next.js
                </li>
                <li className="ml-4 list-disc pl-2">
                  Built a reusable multi-brand component library
                </li>
                <li className="ml-4 list-disc pl-2">
                  Made strategic technology decisions with a focus on
                  performance, scalability, and accessibility
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 md:flex-row md:gap-2">
                <strong>WOLF GmbH</strong>
                <span className="hidden md:block">|</span>
                <span>since 2024</span>
              </div>
              <ul className="flex flex-col gap-2">
                <li className="ml-4 list-disc pl-2">
                  Leading the frontend development team
                </li>
                <li className="ml-4 list-disc pl-2">
                  Defining the technology stack and collaborating closely with
                  UX/UI design
                </li>
                <li className="ml-4 list-disc pl-2">
                  Implementing strict accessibility standards (WCAG 2.1 AA)
                </li>
                <li className="ml-4 list-disc pl-2">
                  Driving performance optimization using tools like Lighthouse,
                  WebPageTest, and tailored caching strategies
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </ViewTransition>
  )
}
