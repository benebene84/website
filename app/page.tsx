import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import beneImage from 'app/images/bene.jpg'

const professionalExperience = [
  {
    company: 'WOLF',
    role: 'Frontend Lead',
    duration: '03-2022 - present',
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
    <main className="flex flex-col gap-8" id="main">
      <section className="flex flex-col-reverse gap-8 sm:flex-row">
        <div>
          <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
            Hi, I'm Benedikt.
          </h1>
          <p>
            Frontend Architect / Frontend Lead with a passion for web
            development, UX design, accessibility, performance optimization and
            automation. I love building user interfaces and products people like
            to interact with.
          </p>
        </div>
        <Image
          src={beneImage}
          alt="Benedikt Sperl"
          className="h-32 w-32 rounded-full"
          placeholder="blur"
          priority
        />
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
              <span className="flex flex-row gap-2">
                <strong>
                  {experience.company} 
                </strong>
                <span>|</span>
                <strong>{experience.role}</strong>
                <span>|</span>
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
  )
}
