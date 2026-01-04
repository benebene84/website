import { Window } from './components/ui/window'

const spinnerSegments = [
  { id: 'seg-0', rotation: 0, opacity: 1 },
  { id: 'seg-1', rotation: 45, opacity: 0.9 },
  { id: 'seg-2', rotation: 90, opacity: 0.8 },
  { id: 'seg-3', rotation: 135, opacity: 0.7 },
  { id: 'seg-4', rotation: 180, opacity: 0.6 },
  { id: 'seg-5', rotation: 225, opacity: 0.5 },
  { id: 'seg-6', rotation: 270, opacity: 0.4 },
  { id: 'seg-7', rotation: 315, opacity: 0.3 },
]

export default function Loading() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center" id="main">
      <Window
        title="Loading..."
        as="div"
        className="w-full max-w-5xl"
        showControls={true}
      >
        <div className="flex flex-col items-center gap-4 py-6">
          {/* macOS-style spinner */}
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 animate-spin">
              {spinnerSegments.map((segment) => (
                <div
                  key={segment.id}
                  className="absolute top-0 left-1/2 h-3 w-1 -translate-x-1/2 rounded-full bg-text-muted"
                  style={{
                    transform: `translateX(-50%) rotate(${segment.rotation}deg)`,
                    transformOrigin: '50% 20px',
                    opacity: segment.opacity,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Loading text */}
          <p className="text-sm text-text-tertiary">Loading content...</p>
        </div>
      </Window>
    </main>
  )
}
