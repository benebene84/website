'use client'

import { cx } from 'app/utils/cx'
import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from '../theme-provider'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, mounted } = useTheme()

  const cycleTheme = () => {
    if (theme === 'system') setTheme('light')
    else if (theme === 'light') setTheme('dark')
    else setTheme('system')
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        type="button"
        className={cx(
          'flex h-8 w-8 items-center justify-center rounded-lg',
          'bg-bg-tertiary',
          'text-text-tertiary',
          className,
        )}
        aria-label="Toggle theme"
        disabled
      >
        <Monitor size={16} aria-hidden="true" />
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className={cx(
        'flex h-8 w-8 items-center justify-center rounded-lg',
        'bg-bg-tertiary hover:bg-bg-hover',
        'text-text-tertiary hover:text-text-primary',
        'transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring',
        className,
      )}
      aria-label={`Current theme: ${theme}. Click to cycle themes.`}
      title={`Theme: ${theme}`}
    >
      {theme === 'light' && <Sun size={16} aria-hidden="true" />}
      {theme === 'dark' && <Moon size={16} aria-hidden="true" />}
      {theme === 'system' && <Monitor size={16} aria-hidden="true" />}
    </button>
  )
}
