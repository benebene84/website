'use client'

import { useEffect, useState } from 'react'

export function KeyframeDemo() {
  const [showToast, setShowToast] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (!showToast) return
    const timer = setTimeout(() => setShowToast(false), 2500)
    return () => clearTimeout(timer)
  }, [showToast])

  return (
    <div className="my-6 flex flex-col items-center gap-4">
      <style
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <just inline styles>
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes pop {
              0% {
                transform: scale(0.90);
                opacity: 0;
              }
              60% {
                transform: scale(1.08);
                opacity: 1;
              }
              100% {
                transform: scale(1);
              }
            }
            .toast-pop-${key} {
              animation: pop 220ms ease-out both;
            }
          `,
        }}
      />
      <button
        type="button"
        onClick={() => {
          setShowToast(false)
          setKey((k) => k + 1)
          setTimeout(() => setShowToast(true), 10)
        }}
        className="rounded-lg border-border-default bg-bg-secondary px-4 py-2 text-sm text-text-primary transition-colors hover:bg-bg-tertiary"
      >
        Show toast
      </button>
      {showToast && (
        <div
          key={key}
          className={`toast-pop-${key} rounded-lg border border-border-default bg-bg-secondary px-4 py-3 text-text-primary`}
        >
          Toast notification
        </div>
      )}
    </div>
  )
}
