import type { HTMLAttributes, PropsWithChildren } from 'react'

export const Headline = ({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 className="mb-2 font-semibold text-2xl tracking-tighter" {...props}>
      {children}
    </h1>
  )
}
