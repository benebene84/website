import { cx } from 'app/utils/cx'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export function SectionHeading({
  children,
  as: Component = 'h2',
  className,
  ...props
}: PropsWithChildren &
  HTMLAttributes<HTMLHeadingElement> & {
    as?: 'h2' | 'h3'
  }) {
  return (
    <Component
      className={cx(
        'font-serif font-medium text-xl text-text-primary tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
