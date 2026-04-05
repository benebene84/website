'use client'

import { cx } from 'app/utils/cx'
import { useEffect, useRef, useState } from 'react'

type DeferUntilVisibleProps = {
  children: React.ReactNode
  /** Reserve space to reduce layout shift before the deferred content loads. */
  minHeight?: string
  className?: string
}

/**
 * Renders children only after the sentinel enters the viewport (with margin),
 * so heavy client bundles can load just-in-time.
 */
export function DeferUntilVisible({
  children,
  minHeight = '12rem',
  className,
}: DeferUntilVisibleProps) {
  const [visible, setVisible] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px 0px', threshold: 0 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sentinelRef} className={cx('w-full', className)}>
      {visible ? (
        children
      ) : (
        <div
          aria-hidden="true"
          className="w-full rounded-lg border border-border-subtle bg-bg-secondary"
          style={{ minHeight }}
        />
      )}
    </div>
  )
}
