import { formatDate } from 'app/utils/mdx'
import type { allPosts } from 'content-collections'
import Link from 'next/link'
import { SectionHeading } from './section-heading'

type Post = (typeof allPosts)[number]

export function RelatedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return null
  }

  return (
    <section aria-labelledby="related-posts" className="mt-12">
      <SectionHeading id="related-posts" className="mb-8">
        Keep reading
      </SectionHeading>
      <ul className="divide-border-subtle flex flex-col divide-y">
        {posts.map((post) => (
          <li key={post._meta.path} className="py-4 first:pt-0 last:pb-0">
            <Link href={`/blog/${post._meta.path}`} className="group block">
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="text-text-primary font-medium underline-offset-4 transition-colors group-hover:underline">
                  {post.title}
                </span>
                <span className="text-text-muted shrink-0 font-mono text-sm tabular-nums">
                  {formatDate(post.publishedAt)}
                </span>
              </div>
              {post.summary && (
                <p className="text-text-tertiary mt-1 line-clamp-2 text-sm">
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
