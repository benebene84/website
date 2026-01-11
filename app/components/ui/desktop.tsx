import { cx } from 'app/utils/cx'
import type { PropsWithChildren } from 'react'

interface DesktopProps extends PropsWithChildren {
  className?: string
}

/**
 * Desktop component - provides the OS-like desktop background
 * Acts as the main container for window components
 * Server Component - no 'use client' needed
 */
export function Desktop({ children, className }: DesktopProps) {
  return (
    <div
      className={cx(
        'relative min-h-screen w-full',
        'bg-desktop-bg',
        '[background-image:radial-gradient(var(--color-desktop-dot)_1px,transparent_1px)]',
        '[background-size:24px_24px]',
        className,
      )}
    >
      {/* Desktop content area - with padding for MenuBar (top) and Dock (bottom) */}
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-6 px-4 pt-6 pb-24 lg:px-8">
        {children}
      </div>
    </div>
  )
}
