import { BlogPosts } from 'app/components/posts'
import { Headline } from 'app/components/ui/headline'

export const metadata = {
  title: 'Blog',
  description:
    'I blog about my experiences and thoughts on software development.',
}

export default function Page() {
  return (
    <main className="flex flex-col gap-8" id="main">
      <Headline>My Thoughts on Web Development</Headline>
      <p className="text-md sm:text-lg md:text-xl dark:text-neutral-100">
        I write about my experiences and thoughts on software development,
        frontend development, and other topics.
      </p>
      <BlogPosts />
    </main>
  )
}
