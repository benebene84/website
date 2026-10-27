import { formatDate } from 'app/utils/mdx'
import { allPosts } from 'content-collections'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function BlogPosts({ limit }: { limit?: number }) {
  const sortedBlogs = [...allPosts]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit)

  return (
    <div className="divide-border-subtle flex flex-col divide-y">
      {sortedBlogs.map((post) => (
        <Link
          key={post._meta.path}
          href={`/blog/${post._meta.path}`}
          className="group py-5 transition-colors first:pt-0 last:pb-0"
        >
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <span
              className="text-text-primary font-medium underline-offset-4 transition-colors group-hover:underline"
              style={{ viewTransitionName: `title-${post._meta.path}` }}
            >
              {post.title}
            </span>
            <span className="text-text-muted shrink-0 font-mono text-sm tabular-nums">
              {formatDate(post.publishedAt)}
            </span>
          </div>
        </Link>
      ))}

      {/* View all link if limited */}
      {limit && allPosts.length > limit && (
        <Link
          href="/blog"
          className="text-text-primary flex items-center gap-2 pt-4 text-sm transition-opacity hover:opacity-60"
        >
          <span>View all {allPosts.length} articles</span>
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}
