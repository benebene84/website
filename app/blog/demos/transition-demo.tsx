'use client'

import { useState } from 'react'

export function TransitionDemo() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="my-6 flex flex-col items-center gap-4">
      <button
        type="button"
        onClick={() => setIsActive(!isActive)}
        className="rounded-lg border-border-default bg-bg-secondary px-4 py-2 text-sm text-text-primary transition-colors hover:bg-bg-tertiary"
      >
        Toggle state
      </button>
      <div
        data-state={isActive ? 'active' : 'inactive'}
        className="h-24 w-32 rounded-lg border border-border-default bg-bg-secondary transition-transform duration-180 ease-out data-[state=inactive]:translate-y-1.5 data-[state=inactive]:opacity-50"
      />
      <p className="text-sm text-text-tertiary">
        {isActive ? 'Active state' : 'Inactive state'}
      </p>
    </div>
  )
}
