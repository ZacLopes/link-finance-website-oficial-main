"use client"

export default function NavbarLoading() {
  return (
    <div className="h-16 bg-background border-b animate-pulse">
      <div className="container flex items-center justify-between h-full">
        {/* Logo skeleton */}
        <div className="h-8 w-32 bg-muted rounded" />

        {/* Desktop navigation skeleton */}
        <div className="hidden md:flex space-x-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-6 w-16 bg-muted rounded" />
          ))}
        </div>

        {/* Mobile menu button skeleton */}
        <div className="md:hidden h-8 w-8 bg-muted rounded" />
      </div>
    </div>
  )
}
