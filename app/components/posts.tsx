import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/utils/mdx'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="flex flex-col gap-2">
      {allBlogs
        .sort(
          (a, b) =>
            new Date(b.metadata.publishedAt).getTime() -
            new Date(a.metadata.publishedAt).getTime(),
        )
        .map((post, index) => (
          <>
            {index !== 0 && (
              <hr className="mb-2 mt-2 border-neutral-100 dark:border-neutral-800" />
            )}
            <Link
              key={post.slug + index}
              className="flex flex-col"
              href={`/blog/${post.slug}`}
            >
              <div className="flex w-full flex-col gap-1">
                <p className="tabular-nums text-neutral-600 dark:text-neutral-400">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="tracking-tight text-neutral-900 dark:text-neutral-100">
                  {post.metadata.title}
                </p>
              </div>
            </Link>
          </>
        ))}
    </div>
  )
}
