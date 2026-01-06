import { cx } from 'app/utils/cx'

interface WindowControlsProps {
  variant?: 'default' | 'terminal' | 'browser' | 'finder'
  interactive?: boolean
  className?: string
}

export function WindowControls({
  variant = 'default',
  interactive = false,
  className,
}: WindowControlsProps) {
  const baseClasses = 'h-3 w-3 rounded-full transition-transform duration-150'
  const hoverClasses = interactive ? 'hover:scale-110' : ''

  return (
    <div
      className={cx('flex items-center gap-2', className)}
      aria-hidden="true"
    >
      <span
        className={cx(
          baseClasses,
          hoverClasses,
          'bg-(--control-close)',
          variant === 'terminal' ? 'opacity-80' : undefined,
        )}
      />
      <span
        className={cx(
          baseClasses,
          hoverClasses,
          'bg-(--control-minimize)',
          variant === 'terminal' ? 'opacity-80' : undefined,
        )}
      />
      <span
        className={cx(
          baseClasses,
          hoverClasses,
          'bg-(--control-maximize)',
          variant === 'terminal' ? 'opacity-80' : undefined,
        )}
      />
    </div>
  )
}
