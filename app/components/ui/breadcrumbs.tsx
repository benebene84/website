import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export type Breadcrumb = {
  name: string
  href: string
}

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight
                  aria-hidden="true"
                  className="size-3.5 shrink-0 text-text-muted"
                />
              )}
              {isLast ? (
                <span aria-current="page" className="line-clamp-1">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.name}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
