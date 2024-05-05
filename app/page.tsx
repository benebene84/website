import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <main>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Bene.
      </h1>
      <p className="mb-8">
        Frontend Architect / Frontend Dev with a passion for web development, UX
        design, accessibility, conversion optimization and digital strategy. I
        believe in the power of a data driven approach with a test and learn,
        hands-on mentality.
      </p>
      <section className="my-8 flex flex-col gap-4">
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
