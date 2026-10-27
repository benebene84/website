import { Headline } from 'app/components/ui'
import { PageContainer } from 'app/components/ui/page-container'
import { formatDate } from 'app/utils/mdx'
import { createMetadata } from 'app/utils/metadata'
import { allPosts } from 'content-collections'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ViewTransition } from 'react'

export const metadata: Metadata = createMetadata({
  title: 'Blog',
  description:
    'I blog about my experiences and thoughts on software development.',
  path: '/blog',
})

export default function Page() {
  const sortedBlogs = [...allPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )

  return (
    <ViewTransition>
      <main className="page-animate-in" id="main">
        <PageContainer wide>
          {/* Header */}
          <header className="mb-12">
            <Headline as="h1">Blog</Headline>
            <p className="text-text-secondary mt-4 max-w-xl leading-relaxed text-pretty">
              Thoughts on web development, frontend architecture, and design.
            </p>
          </header>

          {/* Article list */}
          <div className="divide-border-subtle flex flex-col divide-y">
            {sortedBlogs.map((post) => (
              <Link
                key={post._meta.path}
                href={`/blog/${post._meta.path}`}
                className="group py-5 transition-colors first:pt-0"
              >
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <span
                    className="text-text-primary font-medium underline-offset-4 transition-colors group-hover:underline"
                    style={{
                      viewTransitionName: `title-${post._meta.path}`,
                    }}
                  >
                    {post.title}
                  </span>
                  <span className="text-text-muted shrink-0 font-mono text-sm tabular-nums">
                    {formatDate(post.publishedAt)}
                  </span>
                </div>
                {post.summary && (
                  <p
                    className="text-text-tertiary mt-1 line-clamp-1 text-sm"
                    style={{
                      viewTransitionName: `summary-${post._meta.path}`,
                    }}
                  >
                    {post.summary}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </PageContainer>
      </main>
    </ViewTransition>
  )
}
