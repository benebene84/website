import { HTMLAttributes, PropsWithChildren } from 'react'

export const Headline = ({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 className="mb-2 text-2xl font-semibold tracking-tighter" {...props}>
      {children}
    </h1>
  )
}
