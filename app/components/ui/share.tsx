'use client'

import { cx } from 'app/utils/cx'
import { Share2 } from 'lucide-react'

const share = async (data: ShareData) => {
  try {
    await navigator.share(data)
  } catch (_err) {
    return
  }
}

export const ShareButton = ({
  data,
  className,
}: {
  data: ShareData
  className?: string
}) => {
  return (
    <button
      type="button"
      className={cx(
        'flex cursor-pointer items-center gap-1.5 rounded-md px-2 py-1 text-sm',
        'text-text-muted transition-colors hover:bg-bg-hover hover:text-text-primary',
        className,
      )}
      onClick={() => share(data)}
    >
      <Share2 size={14} aria-hidden="true" />
      Share
    </button>
  )
}
