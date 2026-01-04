import type { HTMLAttributes } from 'react'

type SkipLinkProps = HTMLAttributes<HTMLAnchorElement>

export const SkipLink = ({ ...props }: SkipLinkProps) => {
  return (
    <a
      href="#main"
      className="absolute top-[-9999px] left-[-9999px] z-60 -translate-y-full transform rounded-lg bg-bg-primary px-4 py-2 font-medium text-text-primary shadow-lg ring-2 ring-accent transition focus:top-14 focus:left-4 focus:translate-y-0"
      {...props}
    >
      Skip to main content
    </a>
  )
}
