import { baseUrl } from 'app/sitemap'
import type { Metadata } from 'next'

export const siteName = 'Benedikt Sperl'
export const jobTitle = 'Software Architect and Engineering Lead'
export const authorPath = '/about-me'
export const authorImagePath = '/images/bene.jpg'
export const authorSameAs = [
  'https://github.com/benebene84',
  'https://www.linkedin.com/in/benedikt-sperl/',
  'https://www.npmjs.com/~benebene84',
] as const
export const authorTagline =
  'Software Architect and Engineering Lead in Munich. Writes about frontend architecture, design systems, and the web.'

type CreateMetadataOptions = {
  title: string
  description: string
  /** Route path starting with a slash, e.g. `/blog`. */
  path: string
  /** Skip the `%s | Benedikt Sperl` title template. */
  absoluteTitle?: boolean
  image?: string
} & (
  | { type?: 'website'; publishedTime?: never; modifiedTime?: never }
  | { type: 'article'; publishedTime: string; modifiedTime?: string }
)

/**
 * Next.js replaces `openGraph` and `twitter` wholesale instead of merging them
 * into the parent layout's values, so every page has to spell out the shared
 * fields itself.
 */
export function createMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image,
  type = 'website',
  publishedTime,
  modifiedTime,
}: CreateMetadataOptions): Metadata {
  const ogImage = image ?? `${baseUrl}/og?title=${encodeURIComponent(title)}`
  const shared = {
    title,
    description,
    url: new URL(path, baseUrl).toString(),
    siteName,
    locale: 'en_US',
    images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
  }
  const isArticle = type === 'article'

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    ...(isArticle
      ? {
          authors: [{ name: siteName, url: authorPath }],
          creator: siteName,
        }
      : {}),
    openGraph: isArticle
      ? {
          ...shared,
          type: 'article',
          publishedTime,
          modifiedTime: modifiedTime ?? publishedTime,
          authors: [new URL(authorPath, baseUrl).toString()],
        }
      : { ...shared, type: 'website' },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
