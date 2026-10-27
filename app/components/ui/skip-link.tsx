import type { HTMLAttributes } from 'react'

type SkipLinkProps = HTMLAttributes<HTMLAnchorElement>

export const SkipLink = ({ ...props }: SkipLinkProps) => {
  return (
    <a
      href="#main"
      className="bg-bg-primary text-text-primary ring-accent absolute top-[-9999px] left-[-9999px] z-60 -translate-y-full transform rounded-lg px-4 py-2 font-medium shadow-lg ring-2 transition focus:top-14 focus:left-4 focus:translate-y-0"
      {...props}
    >
      Skip to main content
    </a>
  )
}
