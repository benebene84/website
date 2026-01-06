import { CustomMDX } from 'app/components/mdx'
import { Window } from 'app/components/ui/window'
import { baseUrl } from 'app/sitemap'
import { formatDate, getBlogPosts } from 'app/utils/mdx'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ViewTransition } from 'react'
import { ShareButton } from '../../components/ui/share'
import { Comments } from './comments'

export async function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const params = await props.params
  const post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return { title: 'Not Found' }
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata
  const ogImage = image ?? `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <ViewTransition>
      <main className="flex flex-col gap-6" id="main">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <needed for structured data>
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                '@type': 'Person',
                name: 'Benedikt Sperl',
              },
            }),
          }}
        />

        {/* Article Window - TextEdit style */}
        <Window
          title={`${post.metadata.title}.md`}
          as="article"
          className="window-animate-in"
          hover
        >
          {/* Document toolbar */}
          <div className="toolbar -mx-4 -mt-4 mb-6 flex flex-wrap items-center justify-between gap-3 border-border-subtle border-b px-4 py-2">
            <div className="flex items-center gap-3">
              {/* File type badge */}
              <span className="badge-accent rounded px-2 py-0.5 font-mono text-xs">
                .mdx
              </span>
              {/* Date */}
              <span className="text-sm">
                {formatDate(post.metadata.publishedAt, true)}
              </span>
            </div>
            <ShareButton
              data={{
                title: post.metadata.title,
                text: post.metadata.summary,
                url: `${baseUrl}/blog/${post.slug}`,
              }}
            />
          </div>

          {/* Document header */}
          <header className="mb-8">
            <h1 className="mb-3 text-balance font-semibold text-2xl tracking-tight sm:text-3xl">
              {post.metadata.title}
            </h1>
            {post.metadata.summary && (
              <p className="text-lg text-text-tertiary">
                {post.metadata.summary}
              </p>
            )}
          </header>

          {/* Document content */}
          <div className="prose max-w-none">
            <CustomMDX source={post.content} />
          </div>

          {/* Document footer */}
          <footer className="toolbar -mx-4 mt-8 -mb-4 flex flex-wrap items-center justify-between gap-3 border-border-subtle border-t px-4 py-3">
            <div className="flex items-center gap-2 text-sm">
              <span>Written by</span>
              <span className="font-medium text-text-primary">
                Benedikt Sperl
              </span>
            </div>
            <ShareButton
              data={{
                title: post.metadata.title,
                text: post.metadata.summary,
                url: `${baseUrl}/blog/${post.slug}`,
              }}
            />
          </footer>
        </Window>
        <Comments />
      </main>
    </ViewTransition>
  )
}
