import { baseUrl } from 'app/sitemap'
import type { Metadata } from 'next'

export const siteName = 'Benedikt Sperl'

type CreateMetadataOptions = {
  title: string
  description: string
  /** Route path starting with a slash, e.g. `/blog`. */
  path: string
  /** Skip the `%s | Benedikt Sperl` title template. */
  absoluteTitle?: boolean
  image?: string
} & (
  | { type?: 'website'; publishedTime?: never }
  | { type: 'article'; publishedTime: string }
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

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph:
      type === 'article'
        ? { ...shared, type: 'article', publishedTime }
        : { ...shared, type: 'website' },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}
