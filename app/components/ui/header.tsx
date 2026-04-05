import { cx } from 'app/utils/cx'
import { Rss } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about-me', label: 'About' },
  { href: '/blog', label: 'Blog' },
]

export function Header() {
  return (
    <header
      className={cx(
        'sticky top-0 z-50 w-full',
        'border-border-subtle border-b',
        'bg-bg-primary/85 backdrop-blur-xl',
      )}
    >
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6 lg:px-8">
        {/* Wordmark */}
        <Link
          href="/"
          className="hidden font-medium text-text-primary tracking-tight transition-colors hover:text-accent sm:block"
        >
          Benedikt Sperl
        </Link>
        <Link
          href="/"
          className="block font-medium text-text-primary tracking-tight transition-colors hover:text-accent sm:hidden"
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
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Separator */}
          <div className="h-5 w-px bg-border-subtle" />

          <div className="flex items-center gap-2">
            <a
              href="/rss"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md p-2 text-text-tertiary transition-colors hover:text-text-primary"
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
