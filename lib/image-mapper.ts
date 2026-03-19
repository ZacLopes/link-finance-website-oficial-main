/**
 * Maps Vercel Blob Storage URLs to local image paths
 * This bypasses the Supabase storage for specific images that should use local optimized versions
 */
export function sanitizeImageSrc(url: string | null | undefined): string | undefined {
  if (typeof url !== "string") return undefined

  const normalizedUrl = url.trim()
  return normalizedUrl || undefined
}

export function mapImageUrl(url: string | undefined): string {
  const normalizedUrl = sanitizeImageSrc(url)

  if (!normalizedUrl) {
    return "/placeholder.svg?height=200&width=400&text=Imagem+Indisponível"
  }

  // If already a local path, return as-is
  if (normalizedUrl.startsWith("/")) {
    return normalizedUrl
  }

  // Map blob storage URLs to local paths
  const imageMap: Record<string, string> = {
    // Crescera Capital event
    "image-7WmkYhQbtdaNILTNDZB017FOII89Bn.png": "/images/cresceracapital.png",
    "image-yROBPySvdK9yoKE8nWssMSCM35kmV1.png": "/images/cresceracapital.png",

    // Fernando Bueno event
    "image-dG7GIlv5wSnQmUglbLazHM1D5XybHV.png": "/images/fernandobueno.png",

    // Rafael Natrieli event
    "image-YR16fZVLGToidWWV1QR7E2YeQTV59f.png": "/images/rafaelnatrieli.png",

    // Hub Norte events
    "hub%20edson-bU3jgXxwpVHqtW11ffiQXvPmDY3PK2.jpeg": "/images/edson-santos-hub.jpeg",
    "Hub%20Norte%20Cacheado-F8qcXTmt4kCZtGfQwhQZWo9ebNa35e.jpeg": "/images/hub-norte-cacheado.jpeg",
    "Hub_BrunoMastellaro-GjCmDgh3vP5c4gYrqzPyPXOavZdS2o.jpeg": "/images/hub-bruno-mastellaro.jpeg",
  }

  // Extract the filename from the blob URL
  const blobUrlPattern = /([^/]+)\.(png|jpeg|jpg|webp)$/i
  const match = normalizedUrl.match(blobUrlPattern)

  if (match) {
    const filename = match[0]
    const mappedPath = imageMap[filename]

    if (mappedPath) {
      return mappedPath
    }
  }

  // If no mapping found, return original URL
  return normalizedUrl
}
