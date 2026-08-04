import { CustomMDX } from 'app/components/mdx'
import { Breadcrumbs, RelatedPosts } from 'app/components/ui'
import { PageContainer } from 'app/components/ui/page-container'
import { ShareButton } from 'app/components/ui/share'
import { baseUrl } from 'app/sitemap'
import { formatDate } from 'app/utils/mdx'
import { createMetadata, siteName } from 'app/utils/metadata'
import { getRelatedPosts } from 'app/utils/related-posts'
import { allPosts } from 'content-collections'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ViewTransition } from 'react'
import { Comments } from './comments'

// Without this, unknown slugs render the not-found page with a 200 status,
// which Google reports as a soft 404.
export const dynamicParams = false

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

  return createMetadata({
    title,
    description,
    path: `/blog/${post._meta.path}`,
    image: image ? `${baseUrl}${image}` : undefined,
    type: 'article',
    publishedTime,
  })
}

export default async function Blog(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const post = allPosts.find((post) => post._meta.path === params.slug)

  if (!post) {
    notFound()
  }

  const url = `${baseUrl}/blog/${post._meta.path}`
  const relatedPosts = getRelatedPosts(post)
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: post.title, href: `/blog/${post._meta.path}` },
  ]

  const author = {
    '@type': 'Person',
    '@id': `${baseUrl}/#person`,
    name: siteName,
    url: `${baseUrl}/about-me`,
  }

  return (
    <ViewTransition>
      <main className="page-animate-in" id="main">
        <PageContainer wide>
          <script
            type="application/ld+json"
            suppressHydrationWarning
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <needed for structured data>
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@graph': [
                  {
                    '@type': 'BlogPosting',
                    '@id': `${url}#post`,
                    headline: post.title,
                    datePublished: post.publishedAt,
                    dateModified: post.publishedAt,
                    description: post.summary,
                    image: post.image
                      ? `${baseUrl}${post.image}`
                      : `${baseUrl}/og?title=${encodeURIComponent(post.title)}`,
                    url,
                    inLanguage: 'en',
                    keywords: post.tags,
                    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
                    author,
                    publisher: author,
                    isPartOf: {
                      '@type': 'Blog',
                      '@id': `${baseUrl}/blog#blog`,
                      name: `${siteName} – Blog`,
                      url: `${baseUrl}/blog`,
                    },
                  },
                  {
                    '@type': 'BreadcrumbList',
                    '@id': `${url}#breadcrumb`,
                    itemListElement: breadcrumbs.map((item, index) => ({
                      '@type': 'ListItem',
                      position: index + 1,
                      name: item.name,
                      item: new URL(item.href, baseUrl).toString(),
                    })),
                  },
                ],
              }),
            }}
          />

          <Breadcrumbs items={breadcrumbs} />

          <article>
            {/* Article header */}
            <header className="mb-10">
              <time className="mb-4 block font-mono text-sm text-text-muted">
                {formatDate(post.publishedAt, true)}
              </time>
              <h1
                className="mb-3 text-balance font-semibold text-3xl tracking-tight sm:text-4xl"
                style={{ viewTransitionName: `title-${post._meta.path}` }}
              >
                {post.title}
              </h1>
              {post.summary && (
                <p
                  className="text-lg text-text-tertiary"
                  style={{
                    viewTransitionName: `summary-${post._meta.path}`,
                  }}
                >
                  {post.summary}
                </p>
              )}
            </header>

            <hr className="mb-10 border-border-subtle" />

            {/* Article content */}
            <div className="prose max-w-none">
              <CustomMDX code={post.mdx} />
            </div>

            {/* Article footer */}
            <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 border-border-subtle border-t pt-6">
              <p className="text-sm text-text-muted">
                Written by{' '}
                <span className="font-medium text-text-primary">
                  Benedikt Sperl
                </span>
              </p>
              <ShareButton
                data={{
                  title: post.title,
                  text: post.summary,
                  url: `${baseUrl}/blog/${post._meta.path}`,
                }}
              />
            </footer>
          </article>

          <RelatedPosts posts={relatedPosts} />

          <div className="mt-12">
            <Comments />
          </div>
        </PageContainer>
      </main>
    </ViewTransition>
  )
}
