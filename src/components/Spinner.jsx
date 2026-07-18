const Spinner = () => {
  return (
    <div role="status" aria-live="polite" className="flex items-center justify-center py-8">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent shadow-lg shadow-cyan-500/30"
        aria-label="Loading"
      />
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default Spinner