import { useEffect, useState } from "react"
import { requestGalleryImages } from "@/api"
import type { EP_VALUES } from "@/types"

export const useGallery = (id: EP_VALUES): [string[], boolean, string] => {
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const timeout = setTimeout(() => {
      requestGalleryImages(id)
        .then((images) => setGalleryImages(images))
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false))
    })

    return () => clearTimeout(timeout)
  }, [])

  return [galleryImages, isLoading, error]
}
