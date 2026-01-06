'use client'

import Giscus from '@giscus/react'
import { useTheme } from 'app/components/theme-provider'
import { useEffect } from 'react'

// Function to update giscus theme via postMessage
function setGiscusTheme(theme: 'dark' | 'light') {
  const iframe = document.querySelector(
    'iframe.giscus-frame',
  ) as HTMLIFrameElement
  if (iframe) {
    iframe.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: theme } } },
      'https://giscus.app',
    )
  }
}

export function Comments() {
  const { resolvedTheme, mounted } = useTheme()

  // Update giscus theme when resolvedTheme changes
  useEffect(() => {
    if (mounted) {
      setGiscusTheme(resolvedTheme)
    }
  }, [resolvedTheme, mounted])

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <Giscus
      id="comments"
      repo="benebene84/website"
      repoId="R_kgDOL3egjw"
      category="General"
      categoryId="DIC_kwDOL3egj84C0mzz"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={resolvedTheme}
      lang="en"
      loading="lazy"
    />
  )
}
