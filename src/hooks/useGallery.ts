import { useEffect, useState } from "react"
import { requestGalleryImages } from "@/api"
import type { EP_VALUES } from "@/types"

type Status = "success" | "loading" | "error"

export const useGallery = (
  id: EP_VALUES,
): { galleryImages: string[]; addMoreImages: () => void; status: Status } => {
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [status, setStatus] = useState<Status>("loading")

  useEffect(() => {
    const timeout = setTimeout(() => {
      requestGalleryImages(id)
        .then((images) => setGalleryImages(images))
        .catch(() => setStatus(() => "error"))
        .finally(() =>
          setStatus((prev) => (prev === "error" ? "error" : "success")),
        )
    })

    return () => clearTimeout(timeout)
  }, [])

  const addMoreImages = () => {
    setStatus(() => "loading")
    requestGalleryImages(id)
      .then((images) => setGalleryImages((prev) => [...prev, ...images]))
      .catch(() => setStatus(() => "error"))
      .finally(() =>
        setStatus((prev) => (prev === "error" ? "error" : "success")),
      )
  }

  return { galleryImages, addMoreImages, status }
}
