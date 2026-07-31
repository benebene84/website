import { allPosts } from 'content-collections'

export const baseUrl = 'https://www.benedikt-sperl.de'

export default async function sitemap() {
  const posts = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post._meta.path}`,
    lastModified: post.publishedAt,
  }))

  const latestPost = allPosts
    .map((post) => post.publishedAt)
    .sort()
    .at(-1)

  // Only pages whose content genuinely changes carry a lastModified. Reporting
  // the build date for every route trains Google to ignore the field.
  const listings = [
    { url: baseUrl, lastModified: latestPost },
    { url: `${baseUrl}/blog`, lastModified: latestPost },
  ]

  const staticPages = ['/about-me', '/imprint'].map((route) => ({
    url: `${baseUrl}${route}`,
  }))

  return [...listings, ...staticPages, ...posts]
}
