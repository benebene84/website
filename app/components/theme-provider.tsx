'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

type ThemePreference = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'

interface ThemeContextValue {
  /** The user's theme preference (light, dark, or system) */
  theme: ThemePreference
  /** The actual resolved theme (light or dark), accounting for system preference */
  resolvedTheme: ResolvedTheme
  /** Set the theme preference */
  setTheme: (theme: ThemePreference) => void
  /** Whether the component has mounted (for hydration safety) */
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function resolveTheme(theme: ThemePreference): ResolvedTheme {
  if (theme === 'system') {
    return getSystemTheme()
  }
  return theme
}

function applyTheme(theme: ThemePreference) {
  const root = document.documentElement
  const resolved = resolveTheme(theme)

  // Remove both classes first
  root.classList.remove('dark', 'light')

  if (resolved === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.add('light')
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemePreference>('system')
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>('light')
  const [mounted, setMounted] = useState(false)

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('theme') as ThemePreference | null
    if (stored && ['light', 'dark', 'system'].includes(stored)) {
      setThemeState(stored)
      setResolvedTheme(resolveTheme(stored))
      applyTheme(stored)
    } else {
      setResolvedTheme(resolveTheme('system'))
    }
    setMounted(true)
  }, [])

  // Update theme when it changes
  const setTheme = useCallback((newTheme: ThemePreference) => {
    setThemeState(newTheme)
    setResolvedTheme(resolveTheme(newTheme))

    if (newTheme === 'system') {
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem('theme', newTheme)
    }

    applyTheme(newTheme)
  }, [])

  // Listen for system theme changes
  useEffect(() => {
    if (!mounted) return

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => {
      if (theme === 'system') {
        const resolved = getSystemTheme()
        setResolvedTheme(resolved)
        applyTheme('system')
      }
    }

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [theme, mounted])

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
