'use client'

import Giscus from '@giscus/react'
import { DeferUntilVisible } from 'app/components/defer-until-visible'
import { useTheme } from 'app/components/theme-provider'
import { useEffect } from 'react'

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

  useEffect(() => {
    if (mounted) {
      setGiscusTheme(resolvedTheme)
    }
  }, [resolvedTheme, mounted])

  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        className="min-h-[120px] w-full rounded-lg border border-border-subtle bg-bg-secondary"
      />
    )
  }

  return (
    <DeferUntilVisible minHeight="120px">
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
        theme={
          resolvedTheme === 'dark' ? 'transparent_dark' : 'light_tritanopia'
        }
        lang="en"
        loading="lazy"
      />
    </DeferUntilVisible>
  )
}
