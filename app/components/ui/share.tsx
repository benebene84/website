'use client'

import { cx } from 'app/utils/cx'
import { Arrow } from '../icons/Arrow'

const share = async (data: ShareData) => {
  try {
    await navigator.share(data)
  } catch (err) {
    console.error(err)
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
      className={cx('flex cursor-pointer items-center gap-2', className)}
      onClick={() => share(data)}
    >
      <Arrow />
      Share
    </button>
  )
}
