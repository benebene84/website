'use client'

import { useRef } from 'react'

export function WaapiDemo() {
  const singleElementRef = useRef<HTMLDivElement>(null)
  const item1Ref = useRef<HTMLDivElement>(null)
  const item2Ref = useRef<HTMLDivElement>(null)
  const item3Ref = useRef<HTMLDivElement>(null)

  const handleAnimate = async () => {
    if (!singleElementRef.current) return

    const animation = singleElementRef.current.animate(
      [
        { transform: 'translateY(6px)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 },
      ],
      { duration: 500, easing: 'ease-out', fill: 'both' },
    )

    await animation.finished

    if (singleElementRef.current) {
      singleElementRef.current.innerText += ' - Animation done'
    }
  }

  const handleSequence = async () => {
    const items = [item1Ref.current, item2Ref.current, item3Ref.current].filter(
      (item): item is HTMLDivElement => item !== null,
    )

    for (const item of items) {
      const anim = item.animate(
        [
          { opacity: 0, transform: 'translateY(8px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 500, easing: 'ease-out', fill: 'forwards' },
      )
      await anim.finished

      if (item) {
        item.innerText += ' - Animation done'
      }
    }
  }

  return (
    <div className="my-6 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleAnimate}
            className="rounded-lg border-border-default bg-bg-secondary px-4 py-2 text-sm text-text-primary transition-colors hover:bg-bg-tertiary"
          >
            Animate single
          </button>
        </div>
        <div className="flex min-h-24 items-center justify-center rounded-lg border border-border-default bg-bg-tertiary p-4">
          <div
            ref={singleElementRef}
            className="rounded-lg bg-accent px-4 py-2 text-text-inverse"
            style={{ opacity: 0 }}
          >
            Single element
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleSequence}
            className="rounded-lg border-border-default bg-bg-secondary px-4 py-2 text-sm text-text-primary transition-colors hover:bg-bg-tertiary"
          >
            Animate sequence
          </button>
        </div>
        <div className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-lg border border-border-default bg-bg-tertiary p-4">
          <div
            ref={item1Ref}
            className="rounded-lg bg-accent px-4 py-2 text-text-inverse"
            style={{ opacity: 0 }}
          >
            Item 1
          </div>
          <div
            ref={item2Ref}
            className="rounded-lg bg-accent px-4 py-2 text-text-inverse"
            style={{ opacity: 0 }}
          >
            Item 2
          </div>
          <div
            ref={item3Ref}
            className="rounded-lg bg-accent px-4 py-2 text-text-inverse"
            style={{ opacity: 0 }}
          >
            Item 3
          </div>
        </div>
      </div>
    </div>
  )
}
