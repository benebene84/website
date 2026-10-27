'use client'

import { useEffect, useRef, useState } from 'react'

export function RafDemo() {
  const [isRunning, setIsRunning] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const rafIdRef = useRef<number | null>(null)
  const lastRef = useRef<number>(0)
  const xRef = useRef<number>(0)

  useEffect(() => {
    if (!isRunning || !boxRef.current || !trackRef.current) return

    const speed = 240 // px per second
    const boxWidth = 48 // h-12 = 3rem = 48px
    const padding = 32 // left-4 = 2rem = 32px
    const trackWidth = trackRef.current.clientWidth
    const maxX = trackWidth - boxWidth - padding

    function frame(now: number) {
      if (lastRef.current === 0) lastRef.current = now

      // Delta time in seconds
      const dt = Math.min((now - lastRef.current) / 1000, 0.05) // clamp big jumps
      lastRef.current = now

      xRef.current += speed * dt

      if (xRef.current >= maxX) {
        xRef.current = maxX
        if (boxRef.current) {
          boxRef.current.style.transform = `translateX(${xRef.current}px)`
        }
        setIsRunning(false)
        if (rafIdRef.current !== null) {
          cancelAnimationFrame(rafIdRef.current)
        }
        return
      }

      if (boxRef.current) {
        boxRef.current.style.transform = `translateX(${xRef.current}px)`
      }

      rafIdRef.current = requestAnimationFrame(frame)
    }

    rafIdRef.current = requestAnimationFrame(frame)

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [isRunning])

  const handleToggle = () => {
    if (isRunning) {
      setIsRunning(false)
    } else {
      setIsRunning(true)
    }
  }

  const handleReset = () => {
    setIsRunning(false)
    xRef.current = 0
    lastRef.current = 0
    if (boxRef.current) {
      boxRef.current.style.transform = 'translateX(0px)'
    }
  }

  return (
    <div className="my-6 flex flex-col gap-4">
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={handleToggle}
          className="border-border-default bg-bg-secondary text-text-primary hover:bg-bg-tertiary rounded-lg px-4 py-2 text-sm transition-colors"
        >
          {isRunning ? 'Pause' : 'Start'} animation
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="border-border-default bg-bg-secondary text-text-primary hover:bg-bg-tertiary rounded-lg px-4 py-2 text-sm transition-colors"
        >
          Reset
        </button>
      </div>
      <div
        ref={trackRef}
        className="border-border-default bg-bg-tertiary relative h-20 w-full overflow-hidden rounded-lg border"
      >
        <div
          ref={boxRef}
          className="bg-accent absolute top-4 left-4 h-12 w-12 rounded-lg"
        />
      </div>
      <p className="text-text-tertiary text-center text-sm">
        Time-based animation using requestAnimationFrame
      </p>
    </div>
  )
}
