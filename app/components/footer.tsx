import { cx } from 'app/utils/cx'

interface StatusBarProps {
  className?: string
  showCopyright?: boolean
  showYear?: boolean
  items?: Array<{
    label: string
    href?: string
    external?: boolean
  }>
}

/**
 * StatusBar component - minimal footer/status display for use inside windows
 * Server Component - no 'use client' needed
 */
export function StatusBar({
  className,
  showCopyright = true,
  showYear = true,
  items = [],
}: StatusBarProps) {
  return (
    <footer
      className={cx(
        'toolbar flex flex-wrap items-center justify-between gap-2',
        'border-t px-4 py-2',
        'text-xs',
        className,
      )}
    >
      {/* Left side - Copyright */}
      {showCopyright && (
        <div className="flex items-center gap-2">
          {showYear && <span>{new Date().getFullYear()}</span>}
          <span>Benedikt Sperl</span>
        </div>
      )}

      {/* Right side - Status items */}
      {items.length > 0 && (
        <div className="flex items-center gap-3">
          {items.map((item) =>
            item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="transition-colors hover:text-text-primary"
              >
                {item.label}
              </a>
            ) : (
              <span key={item.label}>{item.label}</span>
            ),
          )}
        </div>
      )}
    </footer>
  )
}

// Keep default export for backwards compatibility during transition
export default StatusBar
