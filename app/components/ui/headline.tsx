import { cx } from 'app/utils/cx'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export function Headline({
  children,
  as: Component = 'h1',
  className,
  ...props
}: PropsWithChildren &
  HTMLAttributes<HTMLHeadingElement> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
  }) {
  return (
    <Component
      className={cx(
        'inline-block font-serif font-medium text-3xl text-text-primary tracking-tight sm:text-4xl',
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}
