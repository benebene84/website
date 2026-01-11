import { cx } from 'app/utils/cx'
import { Rss } from 'lucide-react'
import Link from 'next/link'
import type { PropsWithChildren } from 'react'
import { ThemeToggle } from './theme-toggle'

interface MenuBarProps extends PropsWithChildren {
  className?: string
}

interface MenuBarItemProps {
  href: string
  active?: boolean
  children: React.ReactNode
}

function MenuBarItem({ href, active, children }: MenuBarItemProps) {
  return (
    <Link
      href={href}
      className={cx(
        'rounded-md px-3 py-1 text-sm transition-colors',
        'hover:bg-menubar-hover',
        active ? 'bg-menubar-active' : undefined,
      )}
    >
      {children}
    </Link>
  )
}

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about-me', label: 'About' },
  { href: '/blog', label: 'Blog' },
]

/**
 * MenuBar component - macOS-style top navigation bar
 * Server Component - renders as semantic <nav> element
 */
export function MenuBar({ className }: MenuBarProps) {
  return (
    <nav
      className={cx(
        'sticky top-0 z-50 w-full',
        'bg-menubar-bg text-menubar-text',
        'border-menubar-border border-b',
        'backdrop-blur-xl',
        className,
      )}
    >
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4 lg:px-8">
        {/* Navigation Items */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <MenuBarItem key={item.href} href={item.href}>
              {item.label}
            </MenuBarItem>
          ))}
        </div>

        {/* RSS Feed and Theme Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="/rss"
            target="_blank"
            rel="noopener noreferrer"
            className={cx(
              'rounded-md p-2 text-sm transition-colors',
              'hover:bg-menubar-hover',
              'text-text-tertiary hover:text-text-primary',
            )}
            aria-label="RSS Feed"
          >
            <Rss size={18} aria-hidden="true" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
