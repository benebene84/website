'use client'

import dynamic from 'next/dynamic'
import { DeferUntilVisible } from './defer-until-visible'

const TransitionDemoInner = dynamic(
  () => import('../blog/demos/transition-demo').then((m) => m.TransitionDemo),
  { ssr: false },
)

const KeyframeDemoInner = dynamic(
  () => import('../blog/demos/keyframe-demo').then((m) => m.KeyframeDemo),
  { ssr: false },
)

const RafDemoInner = dynamic(
  () => import('../blog/demos/raf-demo').then((m) => m.RafDemo),
  { ssr: false },
)

const WaapiDemoInner = dynamic(
  () => import('../blog/demos/waapi-demo').then((m) => m.WaapiDemo),
  { ssr: false },
)

export function TransitionDemo() {
  return (
    <DeferUntilVisible minHeight="10rem">
      <TransitionDemoInner />
    </DeferUntilVisible>
  )
}

export function KeyframeDemo() {
  return (
    <DeferUntilVisible minHeight="12rem">
      <KeyframeDemoInner />
    </DeferUntilVisible>
  )
}

export function RafDemo() {
  return (
    <DeferUntilVisible minHeight="12rem">
      <RafDemoInner />
    </DeferUntilVisible>
  )
}

export function WaapiDemo() {
  return (
    <DeferUntilVisible minHeight="14rem">
      <WaapiDemoInner />
    </DeferUntilVisible>
  )
}
