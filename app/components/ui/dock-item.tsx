'use client'

import { Tooltip } from '@base-ui/react/tooltip'
import { cx } from 'app/utils/cx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

interface DockItemProps {
  href: string
  icon: ReactNode
  label: string
  external?: boolean
}

export function DockItem({
  href,
  icon,
  label,
  external = false,
}: DockItemProps) {
  const pathname = usePathname()
  const isActive =
    pathname === href || (href !== '/' && pathname.startsWith(href))

  const className = cx(
    'group relative flex flex-col items-center justify-center',
    'h-11 w-11 rounded-xl',
    'bg-dock-item-bg',
    'border border-dock-item-border',
    'shadow-md shadow-black/5 backdrop-blur-sm',
    'transition-all duration-500 ease-in-out',
    'hover:scale-[1.15] hover:-translate-y-1 hover:shadow-xl',
    'hover:bg-bg-primary',
    'active:scale-110 active:translate-y-0',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring',
  )

  const iconContent = (
    <>
      {/* Icon */}
      <span className="text-text-tertiary transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-text-primary">
        {icon}
      </span>

      {/* Active indicator */}
      {isActive && (
        <span
          className={cx(
            'absolute -bottom-1.5 left-1/2 -translate-x-1/2',
            'h-1 w-1 rounded-full',
            'bg-accent',
            'shadow-accent/50 shadow-sm',
            'transition-all duration-300',
            'group-hover:-bottom-2.5',
          )}
        />
      )}
    </>
  )

  const trigger = external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
    >
      {iconContent}
    </a>
  ) : (
    <Link href={href} className={className} aria-label={label}>
      {iconContent}
    </Link>
  )

  return (
    <Tooltip.Root>
      <Tooltip.Trigger render={trigger} />
      <Tooltip.Portal>
        <Tooltip.Positioner sideOffset={12} side="top">
          <Tooltip.Popup
            className={cx(
              'rounded-lg px-2.5 py-1.5',
              'bg-text-primary text-bg-primary',
              'whitespace-nowrap font-medium text-xs',
              'shadow-lg backdrop-blur-sm',
              'origin-(--transform-origin)',
              'transition-all duration-200 ease-out',
              'data-starting-style:scale-90 data-starting-style:opacity-0',
              'data-ending-style:scale-90 data-ending-style:opacity-0',
            )}
          >
            <Tooltip.Arrow
              className={cx(
                'data-[side=top]:-bottom-1.25',
                'data-[side=bottom]:-top-1.25',
                'data-[side=left]:-right-1.25',
                'data-[side=right]:-left-1.25',
              )}
            >
              <svg
                width="10"
                height="5"
                viewBox="0 0 10 5"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5 5L0 0H10L5 5Z" className="fill-text-primary" />
              </svg>
            </Tooltip.Arrow>
            {label}
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}
