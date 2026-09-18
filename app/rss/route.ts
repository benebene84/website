import { baseUrl } from 'app/sitemap'
import { getModifiedAt } from 'app/utils/mdx'
import { siteName } from 'app/utils/metadata'
import { allPosts } from 'content-collections'

const author = `benedikt.sperl@gmail.com (${siteName})`

export async function GET() {
  const sortedPosts = [...allPosts].sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1
    }
    return 1
  })

  const lastBuildDate = [...allPosts]
    .map((post) => getModifiedAt(post))
    .sort()
    .at(-1)

  const itemsXml = sortedPosts
    .map(
      (post) =>
        `<item>
          <title>${post.title}</title>
          <link>${baseUrl}/blog/${post._meta.path}</link>
          <description>${post.summary || ''}</description>
          <author>${author}</author>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
        </item>`,
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>${siteName}</title>
        <link>${baseUrl}</link>
        <description>This is my blog RSS feed</description>
        ${lastBuildDate ? `<lastBuildDate>${new Date(lastBuildDate).toUTCString()}</lastBuildDate>` : ''}
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
    },
  })
}
