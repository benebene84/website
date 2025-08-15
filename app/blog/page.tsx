import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description:
    'I blog about my experiences and thoughts on software development.',
}

export default function Page() {
  return (
    <main className="flex flex-col gap-8" id="main">
      <h1 className="mb-2 inline-block bg-gradient-to-r from-blue-700 to-cyan-400 bg-clip-text text-4xl font-semibold tracking-tighter text-transparent sm:mb-6 sm:text-6xl dark:from-purple-800 dark:to-pink-600">
        My Thoughts on Web Development
      </h1>
      <p className="text-md sm:text-lg md:text-xl dark:text-neutral-100">
        I write about my experiences and thoughts on software development,
        frontend development, and other topics.
      </p>
      <BlogPosts />
    </main>
  )
}
