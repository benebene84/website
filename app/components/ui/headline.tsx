import type { HTMLAttributes, PropsWithChildren } from 'react'

export const Headline = ({
  children,
  as: Component = 'h1',
  ...props
}: PropsWithChildren &
  HTMLAttributes<HTMLHeadingElement> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div'
  }) => {
  return (
    <Component
      className="inline-block font-semibold text-3xl text-text-primary tracking-tight sm:text-4xl"
      {...props}
    >
      {children}
    </Component>
  )
}
