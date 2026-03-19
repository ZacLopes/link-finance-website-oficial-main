"use client"

import type React from "react"

import { Suspense } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface LazySectionProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  className?: string
  rootMargin?: string
  threshold?: number
}

export default function LazySection({
  children,
  fallback = <div className="py-12 md:py-16 lg:py-24 animate-pulse bg-muted/50" />,
  className = "",
  rootMargin = "100px",
  threshold = 0.1,
}: LazySectionProps) {
  const { ref, hasIntersected } = useIntersectionObserver({
    rootMargin,
    threshold,
    triggerOnce: true,
  })

  return (
    <div ref={ref} className={className}>
      {hasIntersected ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </div>
  )
}
