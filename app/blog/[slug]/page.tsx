import { CustomMDX } from 'app/components/mdx'
import { baseUrl } from 'app/sitemap'
import { formatDate, getBlogPosts } from 'app/utils/mdx'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ViewTransition } from 'react'
import { ShareButton } from '../../components/ui/share'

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
      <main id="main">
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
        <div className="flex flex-col-reverse justify-between gap-1 md:flex-row">
          <h1 className="title font-semibold text-2xl tracking-tighter">
            {post.metadata.title}
          </h1>
          <ShareButton
            data={{
              title: post.metadata.title,
              text: post.metadata.summary,
              url: `${baseUrl}/blog/${post.slug}`,
            }}
          />
        </div>
        <div className="mt-2 mb-8 flex items-center justify-between text-sm">
          <p className="text-neutral-600 text-sm dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt, true)}
          </p>
        </div>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
        <ShareButton
          data={{
            title: post.metadata.title,
            text: post.metadata.summary,
            url: `${baseUrl}/blog/${post.slug}`,
          }}
          className="mt-8"
        />
      </main>
    </ViewTransition>
  )
}
