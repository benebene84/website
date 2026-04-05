import { Headline } from 'app/components/ui'
import { PageContainer } from 'app/components/ui/page-container'
import { formatDate } from 'app/utils/mdx'
import { allPosts } from 'content-collections'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ViewTransition } from 'react'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'I blog about my experiences and thoughts on software development.',
}

export default function Page() {
  const sortedBlogs = [...allPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  )

  return (
    <ViewTransition>
      <main className="page-animate-in" id="main">
        <PageContainer>
          {/* Header */}
          <header className="mb-12">
            <Headline as="h1">Blog</Headline>
            <p className="mt-3 text-lg text-text-secondary">
              Thoughts on web development, frontend architecture, and design.
            </p>
          </header>

          {/* Article list */}
          <div className="flex flex-col divide-y divide-border-subtle">
            {sortedBlogs.map((post) => (
              <Link
                key={post._meta.path}
                href={`/blog/${post._meta.path}`}
                className="group py-5 transition-colors first:pt-0"
              >
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                  <span
                    className="font-medium text-text-primary transition-colors group-hover:text-accent"
                    style={{
                      viewTransitionName: `title-${post._meta.path}`,
                    }}
                  >
                    {post.title}
                  </span>
                  <span className="shrink-0 font-mono text-sm text-text-muted tabular-nums">
                    {formatDate(post.publishedAt, false)}
                  </span>
                </div>
                {post.summary && (
                  <p
                    className="mt-1 line-clamp-1 text-sm text-text-tertiary"
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
