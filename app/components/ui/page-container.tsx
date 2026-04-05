import { cx } from 'app/utils/cx'
import type { PropsWithChildren } from 'react'

interface PageContainerProps extends PropsWithChildren {
  wide?: boolean
  className?: string
}

export function PageContainer({
  children,
  wide = false,
  className,
}: PageContainerProps) {
  return (
    <div
      className={cx(
        'mx-auto w-full px-6 py-12 sm:py-16 lg:px-8',
        wide ? 'max-w-3xl' : 'max-w-2xl',
        className,
      )}
    >
      {children}
    </div>
  )
}
