'use client'

import { Arrow } from '../icons/Arrow'

const share = async (data: ShareData) => {
  try {
    await navigator.share(data)
  } catch (err) {
    console.error(err)
  }
}

export const ShareButton = ({ data }: { data: ShareData }) => {
  return (
    <button
      className="flex cursor-pointer items-center gap-2"
      onClick={() => share(data)}
    >
      <Arrow />
      Share
    </button>
  )
}
