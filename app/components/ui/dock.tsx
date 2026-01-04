'use client'

import { Tooltip } from '@base-ui/react/tooltip'
import { cx } from 'app/utils/cx'
import { FileText, Github, Home, Linkedin, Scale, User } from 'lucide-react'
import type { PropsWithChildren } from 'react'
import { DockItem } from './dock-item'

interface DockProps extends PropsWithChildren {
  className?: string
}

const dockItems = [
  { href: '/', icon: <Home size={20} aria-hidden="true" />, label: 'Home' },
  {
    href: '/about-me',
    icon: <User size={20} aria-hidden="true" />,
    label: 'About Me',
  },
  {
    href: '/blog',
    icon: <FileText size={20} aria-hidden="true" />,
    label: 'Blog',
  },
  {
    href: '/imprint',
    icon: <Scale size={20} aria-hidden="true" />,
    label: 'Imprint',
  },
]

const externalItems = [
  {
    href: 'https://github.com/benebene84',
    icon: <Github size={20} aria-hidden="true" />,
    label: 'GitHub',
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/benedikt-sperl/',
    icon: <Linkedin size={20} aria-hidden="true" />,
    label: 'LinkedIn',
    external: true,
  },
]

/**
 * Dock component - macOS-style bottom navigation dock
 * Client Component with Tooltip.Provider for shared delay behavior
 * Renders as semantic <nav> element for accessibility
 */
export function Dock({ className }: DockProps) {
  return (
    <Tooltip.Provider>
      <nav
        className={cx(
          'dock fixed bottom-6 left-1/2 z-50 -translate-x-1/2',
          'flex items-center gap-1.5 px-2.5 py-2',
          'rounded-2xl',
          'backdrop-blur-2xl',
          'transition-transform duration-300 hover:scale-[1.02]',
          className,
        )}
        aria-label="Main navigation"
      >
        {/* Main navigation items */}
        {dockItems.map((item) => (
          <DockItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
          />
        ))}

        {/* Separator */}
        <div className="mx-1 h-8 w-px bg-border-default" />

        {/* External links */}
        {externalItems.map((item) => (
          <DockItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            label={item.label}
            external={item.external}
          />
        ))}
      </nav>
    </Tooltip.Provider>
  )
}
