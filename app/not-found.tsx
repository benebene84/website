import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      className="flex min-h-[60vh] items-center justify-center px-6"
      id="main"
    >
      <div className="text-center">
        <p className="font-bold font-mono text-6xl text-text-muted">404</p>
        <h1 className="mt-4 font-semibold text-xl tracking-tight">
          Page Not Found
        </h1>
        <p className="mt-2 text-text-secondary">
          This page doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex justify-center gap-3">
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
    </main>
  )
}
