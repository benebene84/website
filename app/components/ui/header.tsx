import { cx } from 'app/utils/cx'
import { Rss } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
]

export function Header() {
  return (
    <header
      className={cx(
        'sticky top-0 z-50 w-full',
        'border-border-subtle border-b',
        'bg-bg-primary',
      )}
    >
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6 lg:px-8">
        {/* Wordmark */}
        <Link
          href="/"
          className="text-text-primary hidden font-serif font-medium tracking-tight transition-opacity hover:opacity-60 sm:block"
        >
          Benedikt Sperl
        </Link>
        <Link
          href="/"
          className="text-text-primary block font-serif font-medium tracking-tight transition-opacity hover:opacity-60 sm:hidden"
        >
          BS
        </Link>

        {/* Nav + Utilities */}
        <div className="flex items-center justify-between gap-6 sm:justify-start">
          <nav className="flex items-center gap-5" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-secondary hover:text-text-primary text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Separator */}
          <div className="bg-border-subtle h-5 w-px" />

          <div className="flex items-center gap-2">
            <a
              href="/rss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary rounded-md p-2 transition-colors"
              aria-label="RSS Feed"
            >
              <Rss size={16} aria-hidden="true" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
