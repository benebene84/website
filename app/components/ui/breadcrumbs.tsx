import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export type Breadcrumb = {
  name: string
  href: string
}

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="text-text-muted flex flex-wrap items-center gap-1 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight
                  aria-hidden="true"
                  className="text-text-muted size-3.5 shrink-0"
                />
              )}
              {isLast ? (
                <span aria-current="page" className="line-clamp-1">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-accent transition-colors"
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
