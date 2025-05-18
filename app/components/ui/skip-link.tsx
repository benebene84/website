import { HTMLAttributes } from 'react'

type SkipLinkProps = HTMLAttributes<HTMLAnchorElement>

export const SkipLink = ({ ...props }: SkipLinkProps) => {
  return (
    <a
      href="#main"
      className="absolute top-[-9999px] left-[-9999px] z-50 -translate-y-full transform px-4 py-2 transition focus:top-0 focus:left-0 focus:translate-y-0"
      {...props}
    >
      Skip to main content
    </a>
  )
}
