import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  serverExternalPackages: ['next-mdx-remote'],
}

export default nextConfig
