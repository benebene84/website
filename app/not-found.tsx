import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      className="flex min-h-[60vh] items-center justify-center px-6"
      id="main"
    >
      <div className="text-center">
        <p className="text-text-muted font-serif text-6xl">404</p>
        <h1 className="mt-4 font-serif text-xl font-medium tracking-tight">
          Page Not Found
        </h1>
        <p className="text-text-secondary mt-2">
          This page doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/"
            className="bg-accent text-text-inverse hover:bg-accent-hover rounded-lg px-4 py-2 text-sm font-medium transition-colors"
          >
            Return Home
          </Link>
          <Link
            href="/blog"
            className="border-border-default bg-bg-primary text-text-secondary hover:bg-bg-hover rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
          >
            View Blog
          </Link>
        </div>
      </div>
    </main>
  )
}
