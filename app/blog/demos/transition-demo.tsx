'use client'

import { useState } from 'react'

export function TransitionDemo() {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="my-6 flex flex-col items-center gap-4">
      <button
        type="button"
        onClick={() => setIsActive(!isActive)}
        className="border-border-default bg-bg-secondary text-text-primary hover:bg-bg-tertiary rounded-lg px-4 py-2 text-sm transition-colors"
      >
        Toggle state
      </button>
      <div
        data-state={isActive ? 'active' : 'inactive'}
        className="border-border-default bg-bg-secondary h-24 w-32 rounded-lg border transition-all duration-180 ease-out data-[state=active]:translate-y-0 data-[state=active]:opacity-100 data-[state=inactive]:translate-y-1.5 data-[state=inactive]:opacity-50"
      />
      <p className="text-text-tertiary text-sm">
        {isActive ? 'Active state' : 'Inactive state'}
      </p>
    </div>
  )
}
