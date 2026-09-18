import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import { z } from 'zod'

const posts = defineCollection({
  name: 'posts',
  directory: 'app/blog/posts',
  include: '**/*.mdx',
  schema: z
    .object({
      title: z.string(),
      publishedAt: z.string(),
      // Only set this when the article body actually changed. Never date-bump.
      updatedAt: z.string().optional(),
      summary: z.string(),
      image: z.string().optional(),
      tags: z.array(z.string()).default([]),
      content: z.string(),
    })
    .refine((data) => !data.updatedAt || data.updatedAt >= data.publishedAt, {
      message: 'updatedAt must be on or after publishedAt',
      path: ['updatedAt'],
    }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document)
    return {
      ...document,
      mdx,
    }
  },
})

export default defineConfig({
  content: [posts],
})
