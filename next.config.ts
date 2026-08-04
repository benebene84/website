import { withContentCollections } from '@content-collections/next'
import type { NextConfig } from 'next'

/**
 * Blog URLs used to include the `YYYY-MM-DD-` prefix of their source filename.
 * The prefix is gone, so the already indexed URLs have to point at the new ones.
 *
 * This list is frozen history rather than something derived: the prefix did not
 * always match `publishedAt`, and posts added from now on never had a dated URL.
 */
const datedPostUrls = [
  '2024-09-01-component-libraries',
  '2024-09-18-keeping-accessibility-in-mind',
  '2024-09-30-dont-use-javascript-for-that-part-1-page-transitions',
  '2024-12-22-responsive-variants',
  '2025-02-22-dynamic-redirects-with-nextjs-middleware',
  '2025-05-18-too-many-managers-not-enough-delivery-excellence',
  '2025-10-12-level-up-as-a-frontend-dev',
  '2026-01-12-http-streaming-benefits-and-drawbacks',
  '2026-01-13-animations-on-the-web',
  '2026-01-21-micro-frontend-architectures',
  '2026-02-02-choosing-your-styling-solution',
  '2026-02-22-caching-with-cache-control-header',
  '2026-03-16-domain-driven-design-in-frontend-applications',
  '2026-04-10-use-sync-external-store',
  '2026-04-12-npm-supply-chain-security',
  '2026-05-22-rendering-strategies-on-the-web',
  '2026-07-08-shipping-an-mcp-server-with-your-design-system',
]

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    useTypeScriptCli: true,
  },
  // `statusCode: 301` rather than `permanent: true`, which would emit a 308.
  redirects: async () =>
    datedPostUrls.map((path) => ({
      source: `/blog/${path}`,
      destination: `/blog/${path.replace(/^\d{4}-\d{2}-\d{2}-/, '')}`,
      statusCode: 301,
    })),
}

export default withContentCollections(nextConfig)
