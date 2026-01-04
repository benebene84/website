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
      className={cx('flex cursor-pointer items-center gap-2', className)}
      onClick={() => share(data)}
    >
      <Share2 size={12} aria-hidden="true" />
      Share
    </button>
  )
}
