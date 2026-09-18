export function formatDate(date: string) {
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }

  return new Date(date).toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

type PostDates = {
  publishedAt: string
  updatedAt?: string
}

/** `updatedAt` when the body actually changed, otherwise the publish date. */
export function getModifiedAt(post: PostDates) {
  return post.updatedAt ?? post.publishedAt
}

export function hasBeenUpdated(
  post: PostDates,
): post is PostDates & { updatedAt: string } {
  return Boolean(post.updatedAt && post.updatedAt !== post.publishedAt)
}
