import { formatDate } from 'app/utils/mdx'
import type { allPosts } from 'content-collections'
import Link from 'next/link'

type Post = (typeof allPosts)[number]

export function RelatedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return null
  }

  return (
    <section aria-labelledby="related-posts" className="mt-12">
      <h2
        id="related-posts"
        className="mb-5 font-semibold text-text-primary text-xl tracking-tight"
      >
        Keep reading
      </h2>
      <ul className="flex flex-col divide-y divide-border-subtle">
        {posts.map((post) => (
          <li key={post._meta.path} className="py-4 first:pt-0 last:pb-0">
            <Link href={`/blog/${post._meta.path}`} className="group block">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="font-medium text-text-primary transition-colors group-hover:text-accent">
                  {post.title}
                </span>
                <span className="shrink-0 font-mono text-sm text-text-muted tabular-nums">
                  {formatDate(post.publishedAt, false)}
                </span>
              </div>
              {post.summary && (
                <p className="mt-1 line-clamp-2 text-sm text-text-tertiary">
                  {post.summary}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
