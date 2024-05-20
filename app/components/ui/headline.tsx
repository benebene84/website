import { PropsWithChildren } from 'react'

export const Headline = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="mb-2 text-2xl font-semibold tracking-tighter">{children}</h1>
  )
}
