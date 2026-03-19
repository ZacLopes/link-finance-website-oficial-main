export interface BlobFile {
  url: string
  filename: string
  originalName: string
  size: number
  type: string
  uploadedAt: string
}

export async function uploadImageToBlob(file: File): Promise<BlobFile> {
  const formData = new FormData()
  formData.append("file", file)

  const response = await fetch("/api/blob/upload", {
    method: "POST",
    body: formData,
  })

  if (!response.ok) {
    throw new Error("Failed to upload image")
  }

  return response.json()
}

export async function listBlobFiles(): Promise<{ files: BlobFile[]; total: number; images: number }> {
  const response = await fetch("/api/blob/list")

  if (!response.ok) {
    throw new Error("Failed to list files")
  }

  return response.json()
}

export async function deleteBlobFile(url: string): Promise<void> {
  const response = await fetch("/api/blob/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  })

  if (!response.ok) {
    throw new Error("Failed to delete file")
  }
}

export function isBlobUrl(url: string): boolean {
  return url.includes("blob.vercel-storage.com") || url.includes("blob.v0.dev")
}

export function getOptimizedImageUrl(url: string, width?: number, height?: number): string {
  // If it's already a blob URL, return as-is (blob storage handles optimization)
  if (isBlobUrl(url)) {
    return url
  }

  // For local images, return the original path
  return url
}
