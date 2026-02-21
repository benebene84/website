export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  const targetDate = new Date(date)

  const monthsDiff =
    (currentDate.getFullYear() - targetDate.getFullYear()) * 12 +
    (currentDate.getMonth() - targetDate.getMonth())
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (monthsDiff >= 12) {
    formattedDate = `${Math.floor(monthsDiff / 12)}y ago`
  } else if (monthsDiff > 0) {
    formattedDate = `${monthsDiff}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
