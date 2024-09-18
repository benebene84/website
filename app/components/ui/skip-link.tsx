import { HTMLAttributes } from 'react'

type SkipLinkProps = HTMLAttributes<HTMLAnchorElement>

export const SkipLink = ({ ...props }: SkipLinkProps) => {
  return (
    <a
      href="#main"
      className="absolute top-0 left-0 z-50 -translate-y-full transform py-2 px-4 transition focus:translate-y-0"
      {...props}
    >
      Skip to main content
    </a>
  )
}
