import { Headline } from 'app/components/ui'
import { Window } from 'app/components/ui/window'
import { formatDate, getBlogPosts } from 'app/utils/mdx'
import { FileText } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ViewTransition } from 'react'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'I blog about my experiences and thoughts on software development.',
}

export default function Page() {
  const allBlogs = getBlogPosts()
  const sortedBlogs = allBlogs.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  )

  return (
    <ViewTransition>
      <main className="flex flex-col gap-6" id="main">
        {/* Header Window */}
        <Window title="Blog" as="section" className="window-animate-in" hover>
          <div className="flex flex-col gap-2">
            <Headline as="h1">My Thoughts on Web Development</Headline>
            <p className="text-text-secondary">
              I write about my experiences and thoughts on software development,
              frontend development, and other topics.
            </p>
          </div>
        </Window>

        {/* Blog Posts Finder Window */}
        <Window
          title={`Articles — ${sortedBlogs.length} items`}
          variant="finder"
          as="section"
          className="window-animate-in"
          hover
        >
          {/* Finder toolbar */}
          <div className="toolbar -mx-4 -mt-4 mb-4 flex items-center gap-4 border-border-subtle border-b px-4 py-2">
            <div className="flex items-center gap-2 text-xs">
              <span>Sort by:</span>
              <span className="rounded bg-badge-bg px-2 py-0.5 font-medium text-badge-text">
                Date
              </span>
            </div>
            <div className="ml-auto text-xs">{sortedBlogs.length} articles</div>
          </div>

          {/* File list */}
          <div className="flex flex-col">
            {sortedBlogs.map((post, _index) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group -mx-4 flex items-center gap-4 border-border-subtle border-b px-4 py-3 transition-colors last:border-b-0 hover:bg-bg-hover"
              >
                {/* File icon */}
                <div className="shrink-0">
                  <FileText
                    size={32}
                    strokeWidth={1.5}
                    className="text-accent"
                    aria-hidden="true"
                  />
                </div>

                {/* File info */}
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span
                    className="truncate font-medium text-text-primary"
                    style={{ viewTransitionName: `title-${post.slug}` }}
                  >
                    {post.metadata.title}
                  </span>
                  {post.metadata.summary && (
                    <span
                      className="line-clamp-1 text-sm text-text-tertiary"
                      style={{ viewTransitionName: `summary-${post.slug}` }}
                    >
                      {post.metadata.summary}
                    </span>
                  )}
                </div>

                {/* Date */}
                <div className="hidden shrink-0 text-sm text-text-tertiary tabular-nums sm:flex">
                  {formatDate(post.metadata.publishedAt, false)}
                </div>
              </Link>
            ))}
          </div>

          {/* Finder status bar */}
          <div className="toolbar -mx-4 mt-4 -mb-4 flex items-center justify-between border-border-subtle border-t px-4 py-2 text-xs">
            <span>{sortedBlogs.length} items</span>
            <span>All articles</span>
          </div>
        </Window>
      </main>
    </ViewTransition>
  )
}
