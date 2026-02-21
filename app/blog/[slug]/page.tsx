import { CustomMDX } from 'app/components/mdx'
import { Window } from 'app/components/ui/window'
import { baseUrl } from 'app/sitemap'
import { formatDate } from 'app/utils/mdx'
import { allPosts } from 'content-collections'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ViewTransition } from 'react'
import { ShareButton } from '../../components/ui/share'
import { Comments } from './comments'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path,
  }))
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const params = await props.params
  const post = allPosts.find((post) => post._meta.path === params.slug)
  if (!post) {
    return { title: 'Not Found' }
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post
  const ogImage = image ?? `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post._meta.path}`,
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
  const post = allPosts.find((post) => post._meta.path === params.slug)

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
              headline: post.title,
              datePublished: post.publishedAt,
              dateModified: post.publishedAt,
              description: post.summary,
              image: post.image
                ? `${baseUrl}${post.image}`
                : `/og?title=${encodeURIComponent(post.title)}`,
              url: `${baseUrl}/blog/${post._meta.path}`,
              author: {
                '@type': 'Person',
                name: 'Benedikt Sperl',
              },
            }),
          }}
        />

        {/* Article Window - TextEdit style */}
        <Window
          title={`${post.title}.md`}
          as="article"
          className="window-animate-in"
          hover
        >
          {/* Document toolbar */}
          <div className="toolbar -mx-4 -mt-4 mb-6 flex flex-wrap items-center justify-between gap-3 border-border-subtle border-b px-4 py-2">
            <div className="flex items-center gap-3">
              {/* File type badge */}
              <span className="rounded bg-badge-accent-bg px-2 py-0.5 font-mono text-badge-accent-text text-xs">
                .mdx
              </span>
              {/* Date */}
              <span className="text-sm">
                {formatDate(post.publishedAt, true)}
              </span>
            </div>
            <ShareButton
              data={{
                title: post.title,
                text: post.summary,
                url: `${baseUrl}/blog/${post._meta.path}`,
              }}
            />
          </div>

          {/* Document header */}
          <header className="mb-8">
            <h1
              className="mb-3 text-balance font-semibold text-2xl tracking-tight sm:text-3xl"
              style={{ viewTransitionName: `title-${post._meta.path}` }}
            >
              {post.title}
            </h1>
            {post.summary && (
              <p
                className="text-lg text-text-tertiary"
                style={{ viewTransitionName: `summary-${post._meta.path}` }}
              >
                {post.summary}
              </p>
            )}
          </header>

          {/* Document content */}
          <div className="prose max-w-none">
            <CustomMDX code={post.mdx} />
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
                title: post.title,
                text: post.summary,
                url: `${baseUrl}/blog/${post._meta.path}`,
              }}
            />
          </footer>
        </Window>
        <Comments />
      </main>
    </ViewTransition>
  )
}
