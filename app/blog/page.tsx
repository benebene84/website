import { BlogPosts } from 'app/components/posts'
import { Headline } from 'app/components/ui/headline'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <main className="flex flex-col gap-8" id="main">
      <Headline>My Blog Posts</Headline>
      <BlogPosts />
    </main>
  )
}
