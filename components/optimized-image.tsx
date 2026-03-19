"use client"

import type React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState, useEffect, useCallback } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  sizes?: string
  fill?: boolean
  style?: React.CSSProperties
  loading?: "lazy" | "eager"
  fetchPriority?: "high" | "low" | "auto"
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}

const imageOptimizations = {
  "banner-link-finance.png": {
    width: 1920,
    height: 1080,
    sizes: "(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1920px",
    quality: 75,
    mobileQuality: 60,
    webpSupport: true,
    aspectRatio: 16 / 9,
  },
  "logo-link-finance.png": {
    width: 512,
    height: 128,
    sizes: "(max-width: 640px) 360px, (max-width: 768px) 400px, (max-width: 1200px) 450px, 512px",
    quality: 95,
    mobileQuality: 90,
    webpSupport: true,
    aspectRatio: 4 / 1,
  },
  "logo-link-finance-horizontal.webp": {
    width: 600,
    height: 150,
    sizes:
      "(max-width: 320px) 160px, (max-width: 480px) 200px, (max-width: 768px) 280px, (max-width: 1024px) 400px, 600px",
    quality: 90,
    mobileQuality: 80,
    mobileWidth: 200,
    mobileHeight: 50,
    webpSupport: true,
    aspectRatio: 4 / 1,
  },
  "wall-street-prep-horizontal.png": {
    width: 140,
    height: 48,
    sizes: "(max-width: 768px) 120px, 140px",
    quality: 85,
    mobileQuality: 75,
    webpSupport: true,
    aspectRatio: 35 / 12,
  },
  "gabriel-matsumoto-2025.jpeg": {
    width: 400,
    height: 400,
    sizes: "(max-width: 640px) 128px, (max-width: 1024px) 160px, 200px",
    quality: 85,
    mobileQuality: 75,
    webpSupport: true,
    aspectRatio: 1 / 1,
  },
  "hub-bruno-mastellaro.jpeg": {
    width: 800,
    height: 450,
    sizes: "(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 800px",
    quality: 80,
    mobileQuality: 70,
    webpSupport: true,
    aspectRatio: 16 / 9,
  },
  "kickoff-kx-ventures.png": {
    width: 800,
    height: 450,
    sizes: "(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 800px",
    quality: 80,
    mobileQuality: 70,
    webpSupport: true,
    aspectRatio: 16 / 9,
  },
  "cesar-link-finance.png": {
    width: 800,
    height: 450,
    sizes: "(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 800px",
    quality: 80,
    mobileQuality: 70,
    webpSupport: true,
    aspectRatio: 16 / 9,
  },
  "hub-norte-cacheado.jpeg": {
    width: 800,
    height: 450,
    sizes: "(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 800px",
    quality: 80,
    mobileQuality: 70,
    webpSupport: true,
    aspectRatio: 16 / 9,
  },
  "edson-santos-hub.jpeg": {
    width: 800,
    height: 600,
    sizes: "(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 800px",
    quality: 80,
    mobileQuality: 70,
    webpSupport: true,
    aspectRatio: 4 / 3,
  },
  "cresceracapital.png": {
    width: 800,
    height: 600,
    sizes: "(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 800px",
    quality: 85,
    mobileQuality: 75,
    webpSupport: true,
    aspectRatio: 4 / 3,
  },
  "rafaelnatrieli.png": {
    width: 800,
    height: 600,
    sizes: "(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 800px",
    quality: 85,
    mobileQuality: 75,
    webpSupport: true,
    aspectRatio: 4 / 3,
  },
  "fernandobueno.png": {
    width: 800,
    height: 600,
    sizes: "(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, 800px",
    quality: 85,
    mobileQuality: 75,
    webpSupport: true,
    aspectRatio: 4 / 3,
  },
}

const getDeviceInfo = () => {
  if (typeof window === "undefined") return { isMobile: false, isSlowConnection: false }

  const isMobile =
    window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

  // Check for slow connection
  const connection =
    (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
  const isSlowConnection = connection
    ? connection.effectiveType === "slow-2g" || connection.effectiveType === "2g"
    : false

  return { isMobile, isSlowConnection }
}

const generateBlurDataURL = (width: number, height: number) => {
  const canvas = document.createElement("canvas")
  canvas.width = 10
  canvas.height = Math.round((height / width) * 10)
  const ctx = canvas.getContext("2d")

  if (ctx) {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#f3f4f6")
    gradient.addColorStop(1, "#e5e7eb")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  return canvas.toDataURL("image/jpeg", 0.1)
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 75,
  sizes,
  fill = false,
  style,
  loading = "lazy",
  fetchPriority = "auto",
  placeholder = "blur",
  blurDataURL,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [deviceInfo, setDeviceInfo] = useState({ isMobile: false, isSlowConnection: false })
  const normalizedSrc = src.trim() || "/placeholder.svg"

  useEffect(() => {
    setDeviceInfo(getDeviceInfo())
  }, [])

  const filename = normalizedSrc.split("/").pop() || ""
  const config = imageOptimizations[filename as keyof typeof imageOptimizations] || {}

  const optimizedWidth = width || (deviceInfo.isMobile && config.mobileWidth) || config.width || 800
  const optimizedHeight = height || (deviceInfo.isMobile && config.mobileHeight) || config.height || 600

  let optimizedQuality = quality
  if (deviceInfo.isSlowConnection) {
    optimizedQuality = Math.min(quality * 0.7, 50) // Reduce quality for slow connections
  } else if (deviceInfo.isMobile && config.mobileQuality) {
    optimizedQuality = config.mobileQuality
  } else if (config.quality) {
    optimizedQuality = config.quality
  }

  const optimizedSizes =
    sizes ||
    config.sizes ||
    (width
      ? `(max-width: 640px) ${Math.min(width * 0.8, 360)}px, (max-width: 768px) ${Math.min(width * 0.9, 400)}px, (max-width: 1200px) ${Math.min(width * 0.95, 600)}px, ${width}px`
      : "(max-width: 640px) 90vw, (max-width: 768px) 80vw, (max-width: 1200px) 70vw, 50vw")

  const defaultBlurDataURL = useCallback(() => {
    if (blurDataURL) return blurDataURL
    if (typeof window !== "undefined" && optimizedWidth && optimizedHeight) {
      return generateBlurDataURL(optimizedWidth, optimizedHeight)
    }
    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
  }, [blurDataURL, optimizedWidth, optimizedHeight])

  const handleError = useCallback(() => {
    setHasError(true)
    console.error("Falha ao carregar imagem:", normalizedSrc)
  }, [normalizedSrc])

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  if (hasError) {
    return (
      <div
        className={cn(
          "bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded",
          className,
        )}
        style={style}
        role="img"
        aria-label={`Imagem não disponível: ${alt}`}
      >
        <div className="text-center p-4">
          <div className="w-8 h-8 mx-auto mb-2 text-gray-400">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-gray-500 text-xs">Imagem não disponível</span>
          {process.env.NODE_ENV === "development" && (
            <div className="mt-2 text-xs text-gray-400 font-mono">
              <div>Src: {normalizedSrc}</div>
              <div>File: {filename}</div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={normalizedSrc}
        alt={alt}
        width={fill ? undefined : optimizedWidth}
        height={fill ? undefined : optimizedHeight}
        fill={fill}
        className={cn(
          "transition-all duration-500 ease-out",
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
        )}
        priority={priority}
        quality={Math.round(optimizedQuality)}
        sizes={optimizedSizes}
        loading={priority ? "eager" : loading}
        style={style}
        fetchPriority={fetchPriority}
        placeholder={placeholder}
        blurDataURL={placeholder === "blur" ? defaultBlurDataURL() : undefined}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />

      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 animate-pulse flex items-center justify-center">
          <div className="relative">
            <div className="w-8 h-8 border-3 border-gray-200 border-t-primary rounded-full animate-spin"></div>
            <div
              className="absolute inset-0 w-8 h-8 border-3 border-transparent border-t-primary/30 rounded-full animate-spin"
              style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
            ></div>
          </div>
        </div>
      )}
    </div>
  )
}
