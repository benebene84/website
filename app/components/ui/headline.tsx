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
      className="inline-block bg-linear-to-r from-accent-from to-accent-to bg-clip-text font-semibold text-3xl text-transparent tracking-tighter sm:text-4xl"
      {...props}
    >
      {children}
    </Component>
  )
}
