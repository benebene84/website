import { formatDate, getBlogPosts } from 'app/utils/mdx'
import { ArrowRight, ChevronRight, FileText } from 'lucide-react'
import Link from 'next/link'

export function BlogPosts({ limit }: { limit?: number }) {
  const allBlogs = getBlogPosts()

  const sortedBlogs = allBlogs
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime(),
    )
    .slice(0, limit)

  return (
    <div className="-mx-2 flex flex-col">
      {sortedBlogs.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group flex items-center gap-3 rounded-lg px-2 py-2.5 transition-all duration-200 hover:bg-bg-hover"
        >
          {/* File icon */}
          <span className="shrink-0 text-accent transition-transform duration-200 group-hover:scale-110">
            <FileText size={18} strokeWidth={1.5} aria-hidden="true" />
          </span>

          {/* Content */}
          <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <span
              className="truncate font-medium text-text-primary transition-colors"
              style={{ viewTransitionName: `title-${post.slug}` }}
            >
              {post.metadata.title}
            </span>
            <span className="shrink-0 text-text-muted text-xs tabular-nums">
              {formatDate(post.metadata.publishedAt, false)}
            </span>
          </div>

          {/* Arrow indicator */}
          <span className="shrink-0 text-text-muted opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
            <ChevronRight size={16} aria-hidden="true" />
          </span>
        </Link>
      ))}

      {/* View all link if limited */}
      {limit && allBlogs.length > limit && (
        <Link
          href="/blog"
          className="mt-2 flex items-center gap-2 px-2 py-2 font-medium text-accent text-sm transition-colors hover:text-accent-hover"
        >
          <span>View all {allBlogs.length} articles</span>
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      )}
    </div>
  )
}
