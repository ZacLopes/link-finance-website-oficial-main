"use client"

import { useEffect, useState } from "react"

interface PageLoadingProps {
  message?: string
  showProgress?: boolean
}

export default function PageLoading({ message = "Carregando...", showProgress = true }: PageLoadingProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!showProgress) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return prev
        return prev + Math.random() * 15
      })
    }, 200)

    return () => clearInterval(interval)
  }, [showProgress])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        {/* Logo skeleton */}
        <div className="mx-auto w-32 h-8 bg-gradient-to-r from-muted via-muted-foreground/20 to-muted rounded animate-pulse" />

        {/* Main loading spinner */}
        <div className="relative mx-auto w-16 h-16">
          <div className="absolute inset-0 border-4 border-muted rounded-full"></div>
          <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <div
            className="absolute inset-2 border-2 border-primary/30 border-b-transparent rounded-full animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          ></div>
        </div>

        {/* Progress bar */}
        {showProgress && (
          <div className="w-full max-w-xs mx-auto">
            <div className="h-1 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">{Math.round(progress)}%</p>
          </div>
        )}

        {/* Loading message */}
        <div className="space-y-2">
          <p className="text-lg font-medium text-foreground">{message}</p>
          <p className="text-sm text-muted-foreground">Preparando a melhor experiência para você</p>
        </div>

        {/* Animated dots */}
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
