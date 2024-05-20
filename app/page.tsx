import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'
import beneImage from './about-me/bene.jpg'

export default function Page() {
  return (
    <main className="flex flex-col gap-8">
      <section className="flex flex-col-reverse sm:flex-row gap-8">
        <div>
          <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
            Hi, I'm Benedikt.
          </h1>
          <p>
            Frontend Architect / Frontend Dev with a passion for web
            development, UX design, accessibility, performance optimization and
            automation. I love building user interfaces and products people like
            to interact with.
          </p>
        </div>
        <Image
          src={beneImage}
          alt="Benedikt Sperl"
          width={400}
          height={400}
          className="w-36 h-36 rounded-full"
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
          <strong>WOLF</strong>
          <span>Frontend Lead bla bla bla</span>
        </span>
        <span className="flex flex-col gap-4">
          <strong>BSH Home Appliances</strong>
          <span>
            Managed the transformation of a monolith e-commerce architecture
            into a modern multi application frontend based on React and Next.Js
          </span>
          <ul className="flex flex-col gap-2">
            <li className="list-disc ml-4 pl-2">
              Creating a new frontend architecture target picture to split up a
              monolith e-commerce system into microservices with different
              frontend applications
            </li>
            <li className="list-disc ml-4 pl-2">
              Choosing the technology stack for the new frontend with special
              focus on performance optimizations
            </li>
            <li className="list-disc ml-4 pl-2">
              Creation of a reusable mulitbrand component library
            </li>
          </ul>
        </span>
      </section>
    </main>
  )
}
