export default function Loading() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center" id="main">
      <div className="text-center">
        <div className="mx-auto h-6 w-6 animate-spin rounded-full border-2 border-border-default border-t-accent" />
        <p className="mt-3 text-sm text-text-muted">Loading...</p>
      </div>
    </main>
  )
}
