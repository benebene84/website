import { allPosts } from 'content-collections'

type Post = (typeof allPosts)[number]

function publishedTime(post: Post) {
  return new Date(post.publishedAt).getTime()
}

/**
 * Ranks the other posts by how many tags they share with the given post and
 * falls back to recency, so every post always gets a full set of suggestions
 * even when its tags are unique to it.
 */
export function getRelatedPosts(current: Post, limit = 3): Post[] {
  const currentTags = new Set(current.tags)

  return allPosts
    .filter((post) => post._meta.path !== current._meta.path)
    .map((post) => ({
      post,
      sharedTags: post.tags.filter((tag) => currentTags.has(tag)).length,
    }))
    .sort(
      (a, b) =>
        b.sharedTags - a.sharedTags ||
        publishedTime(b.post) - publishedTime(a.post),
    )
    .slice(0, limit)
    .map(({ post }) => post)
}
