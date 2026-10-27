export default function Loading() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center" id="main">
      <div className="text-center">
        <div className="border-border-default border-t-accent mx-auto h-6 w-6 animate-spin rounded-full border-2" />
        <p className="text-text-muted mt-3 text-sm">Loading...</p>
      </div>
    </main>
  )
}
