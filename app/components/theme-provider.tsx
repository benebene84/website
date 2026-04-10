'use client'

import { useMemo, useSyncExternalStore } from 'react'

type ThemePreference = 'light' | 'dark' | 'system'
type ResolvedTheme = 'light' | 'dark'

export interface ThemeServerSnapshot {
  theme: ThemePreference
  resolvedTheme: ResolvedTheme
}

export interface UseThemeResult {
  /** The user's theme preference (light, dark, or system) */
  theme: ThemePreference
  /** The actual resolved theme (light or dark), accounting for system preference */
  resolvedTheme: ResolvedTheme
  /** Set the theme preference */
  setTheme: (theme: ThemePreference) => void
  /** True after client hydration (same role as the previous `mounted` flag) */
  mounted: boolean
}

const defaultServerSnapshot: ThemeServerSnapshot = {
  theme: 'system',
  resolvedTheme: 'light',
}

let themePreference: ThemePreference = 'system'
const listeners = new Set<() => void>()
let storeInitialized = false
let mediaCleanup: (() => void) | null = null

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

  root.classList.remove('dark', 'light')

  if (resolved === 'dark') {
    root.classList.add('dark')
  } else {
    root.classList.add('light')
  }
}

function emit() {
  for (const listener of listeners) {
    listener()
  }
}

function initStoreFromStorage() {
  if (storeInitialized || typeof window === 'undefined') return
  storeInitialized = true

  const stored = localStorage.getItem('theme') as ThemePreference | null
  if (stored && ['light', 'dark', 'system'].includes(stored)) {
    themePreference = stored
  }
  applyTheme(themePreference)
}

function attachMediaListener() {
  if (mediaCleanup) return

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const handler = () => {
    if (themePreference === 'system') {
      applyTheme('system')
      emit()
    }
  }
  mediaQuery.addEventListener('change', handler)
  mediaCleanup = () => {
    mediaQuery.removeEventListener('change', handler)
    mediaCleanup = null
  }
}

function subscribe(onStoreChange: () => void) {
  if (typeof window === 'undefined') return () => {}

  initStoreFromStorage()
  attachMediaListener()

  listeners.add(onStoreChange)
  return () => {
    listeners.delete(onStoreChange)
    if (listeners.size === 0 && mediaCleanup) {
      mediaCleanup()
    }
  }
}

let cachedSnapshot: ThemeSnapshot | null = null

/** Client and server snapshots share this shape; `hydrated` is false only for SSR / hydration. */
type ThemeSnapshot = ThemeServerSnapshot & { hydrated: boolean }

/** Stable reference for getServerSnapshot — must not allocate per call. */
const defaultServerThemeSnapshot: ThemeSnapshot = {
  theme: defaultServerSnapshot.theme,
  resolvedTheme: defaultServerSnapshot.resolvedTheme,
  hydrated: false,
}

function getSnapshot(): ThemeSnapshot {
  const resolvedTheme = resolveTheme(themePreference)
  const next: ThemeSnapshot = {
    theme: themePreference,
    resolvedTheme,
    hydrated: true,
  }
  if (
    cachedSnapshot &&
    cachedSnapshot.theme === next.theme &&
    cachedSnapshot.resolvedTheme === next.resolvedTheme
  ) {
    return cachedSnapshot
  }
  cachedSnapshot = next
  return next
}

function getServerSnapshot(): ThemeSnapshot {
  return defaultServerThemeSnapshot
}

function setThemeInStore(newTheme: ThemePreference) {
  themePreference = newTheme

  if (newTheme === 'system') {
    localStorage.removeItem('theme')
  } else {
    localStorage.setItem('theme', newTheme)
  }

  applyTheme(newTheme)
  cachedSnapshot = null
  emit()
}

/**
 * Imperative update; same as `useTheme().setTheme`.
 * Prefer the hook in React components so the UI stays in sync.
 */
export function setTheme(newTheme: ThemePreference) {
  setThemeInStore(newTheme)
}

/**
 * Read current theme state without subscribing (no re-renders).
 * On the server, returns the default SSR snapshot. On the client, initializes from storage if needed.
 */
export function getTheme(): ThemeSnapshot {
  if (typeof window === 'undefined') {
    return defaultServerThemeSnapshot
  }
  initStoreFromStorage()
  return getSnapshot()
}

export function useTheme(): UseThemeResult {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  )

  return useMemo(
    (): UseThemeResult => ({
      theme: snapshot.theme,
      resolvedTheme: snapshot.resolvedTheme,
      setTheme,
      mounted: snapshot.hydrated,
    }),
    [snapshot.theme, snapshot.resolvedTheme, snapshot.hydrated],
  )
}
