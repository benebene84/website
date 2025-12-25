import { formatDate, getBlogPosts } from 'app/utils/mdx'
import Link from 'next/link'
import React from 'react'

export function BlogPosts() {
  const allBlogs = getBlogPosts()

  return (
    <div className="flex flex-col gap-2">
      {allBlogs
        .sort(
          (a, b) =>
            new Date(b.metadata.publishedAt).getTime() -
            new Date(a.metadata.publishedAt).getTime(),
        )
        .map((post, index) => (
          <React.Fragment key={post.slug}>
            {index !== 0 && (
              <hr className="mt-2 mb-2 border-neutral-100 dark:border-neutral-800" />
            )}
            <Link className="flex flex-col" href={`/blog/${post.slug}`}>
              <div className="flex w-full flex-col gap-1">
                <p className="text-neutral-600 tabular-nums dark:text-neutral-400">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="text-neutral-900 tracking-tight dark:text-neutral-100">
                  {post.metadata.title}
                </p>
              </div>
            </Link>
          </React.Fragment>
        ))}
    </div>
  )
}
