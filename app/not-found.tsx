import Link from 'next/link'
import { Window } from './components/ui/window'

function AlertIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-status-warning"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <line
        x1="12"
        y1="8"
        x2="12"
        y2="12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  )
}

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center" id="main">
      <Window
        title="Error"
        as="section"
        className="window-animate-in max-w-md"
        showControls={true}
      >
        <div className="flex flex-col items-center gap-6 py-4 text-center">
          {/* Error Icon */}
          <AlertIcon />

          {/* Error Message */}
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-xl tracking-tight">
              Page Not Found
            </h1>
            <p className="text-text-secondary">
              The application could not find the requested page. It may have
              been moved or deleted.
            </p>
          </div>

          {/* Error Code */}
          <div className="rounded-lg bg-bg-tertiary px-4 py-2 font-mono text-sm">
            <span className="text-text-tertiary">Error Code: </span>
            <span className="font-semibold text-status-error">404</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Link
              href="/"
              className="rounded-lg bg-accent px-4 py-2 font-medium text-sm text-text-inverse transition-colors hover:bg-accent-hover"
            >
              Return Home
            </Link>
            <Link
              href="/blog"
              className="rounded-lg border border-border-default bg-bg-primary px-4 py-2 font-medium text-sm text-text-secondary transition-colors hover:bg-bg-hover"
            >
              View Blog
            </Link>
          </div>
        </div>
      </Window>
    </main>
  )
}
