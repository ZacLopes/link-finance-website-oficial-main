"use client"

interface SectionLoadingProps {
  title?: string
  itemCount?: number
  layout?: "grid" | "list" | "cards"
  className?: string
}

export default function SectionLoading({
  title = "Carregando conteúdo...",
  itemCount = 3,
  layout = "cards",
  className = "",
}: SectionLoadingProps) {
  const renderSkeletons = () => {
    switch (layout) {
      case "grid":
        return (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: itemCount }).map((_, i) => (
              <div key={i} className="h-64 bg-muted rounded-lg animate-pulse" />
            ))}
          </div>
        )

      case "list":
        return (
          <div className="space-y-4">
            {Array.from({ length: itemCount }).map((_, i) => (
              <div key={i} className="flex gap-4 p-4 bg-muted rounded-lg animate-pulse">
                <div className="w-16 h-16 bg-muted-foreground/20 rounded" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-muted-foreground/20 rounded w-3/4" />
                  <div className="h-3 bg-muted-foreground/20 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )

      default: // cards
        return (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: itemCount }).map((_, i) => (
              <div key={i} className="bg-background rounded-lg border p-6 animate-pulse">
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4" />
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4 mx-auto" />
                  <div className="h-3 bg-muted rounded w-1/2 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        )
    }
  }

  return (
    <div className={`py-8 md:py-12 lg:py-16 ${className}`}>
      <div className="container">
        {/* Header skeleton */}
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 w-48 bg-muted rounded animate-pulse" />
          <div className="h-10 w-24 bg-muted rounded animate-pulse" />
        </div>

        {/* Content skeletons */}
        {renderSkeletons()}
      </div>
    </div>
  )
}
