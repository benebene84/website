import { cx } from 'app/utils/cx'
import type { HTMLAttributes, PropsWithChildren } from 'react'

type WindowVariant = 'default' | 'terminal' | 'browser' | 'finder'
type SemanticElement = 'section' | 'article' | 'aside' | 'div' | 'main'

interface WindowProps extends HTMLAttributes<HTMLElement> {
  title?: string
  variant?: WindowVariant
  showControls?: boolean
  as?: SemanticElement
  hover?: boolean
}

function WindowControls({ variant }: { variant: WindowVariant }) {
  const isTerminal = variant === 'terminal'
  const baseClasses =
    'h-3 w-3 rounded-full transition-all duration-150 hover:scale-110'

  return (
    <div className="group/controls flex items-center gap-2" aria-hidden="true">
      <span
        className={cx(
          baseClasses,
          'bg-control-close',
          'hover:shadow-red-500/50 hover:shadow-sm hover:brightness-90',
          isTerminal ? 'opacity-90' : undefined,
        )}
      />
      <span
        className={cx(
          baseClasses,
          'bg-control-minimize',
          'hover:shadow-sm hover:shadow-yellow-500/50 hover:brightness-90',
          isTerminal ? 'opacity-90' : undefined,
        )}
      />
      <span
        className={cx(
          baseClasses,
          'bg-control-maximize',
          'hover:shadow-green-500/50 hover:shadow-sm hover:brightness-90',
          isTerminal ? 'opacity-90' : undefined,
        )}
      />
    </div>
  )
}

export function Window({
  children,
  title,
  variant = 'default',
  showControls = false,
  as: Element = 'section',
  hover = false,
  className,
  ...props
}: PropsWithChildren<WindowProps>) {
  const isTerminal = variant === 'terminal'

  return (
    <Element
      className={cx(
        'overflow-hidden rounded-xl border border-window-border bg-window-bg shadow-window',
        hover ? 'group' : undefined,
        isTerminal ? 'flex flex-col' : undefined,
        className,
      )}
      {...props}
    >
      {/* Title Bar */}
      <div
        className={cx(
          'flex items-center gap-4 border-window-border border-b bg-titlebar-bg px-4 py-3 text-titlebar-text',
          variant === 'finder'
            ? 'bg-linear-to-b from-titlebar-bg to-window-border'
            : undefined,
        )}
      >
        {showControls && <WindowControls variant={variant} />}
        {title && (
          <span
            className={cx(
              'flex-1 truncate text-center font-medium text-sm',
              'transition-colors duration-200',
              showControls ? '-ml-17' : undefined,
              'pointer-coarse:text-text-primary pointer-fine:text-text-muted pointer-fine:group-hover:text-text-primary',
            )}
          >
            {title}
          </span>
        )}
      </div>

      {/* Content Area */}
      <div
        className={cx(
          isTerminal
            ? 'flex-1 bg-terminal-bg p-4 font-mono text-sm text-terminal-text'
            : 'p-4',
        )}
      >
        {children}
      </div>
    </Element>
  )
}
