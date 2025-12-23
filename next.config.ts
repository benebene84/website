import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    inlineCss: true,
  },
  serverExternalPackages: ['next-mdx-remote'],
}

export default nextConfig
