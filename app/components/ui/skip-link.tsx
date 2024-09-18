import { HTMLAttributes } from "react"

type SkipLinkProps = HTMLAttributes<HTMLAnchorElement>

export const SkipLink = ({ ...props }: SkipLinkProps) => {
  return <a href="#main" className="absolute left-0 top-0 py-2 px-4 z-50 transform -translate-y-full focus:translate-y-0 transition" {...props}>Skip to main content</a>
}