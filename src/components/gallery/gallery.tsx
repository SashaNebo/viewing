"use client"
import Image from "next/image"

import s from "./gallery.module.scss"
import { EP_VALUES } from "@/types"
import { useGallery } from "@/hooks/useGallery"
import { GalleryLoadingItem } from "./galleryLoadingItem"
import { HeartIcon } from "../icons"

export const Gallery = ({ categoryId }: { categoryId: EP_VALUES }) => {
  const [galleryImages, isLoading, error] = useGallery(categoryId)

  return (
    <section className={s["gallery"]}>
      <div className="container">
        <div className="gallery__content">
          <h2 className={s["gallery__title"]}>Gallery {categoryId}</h2>

          <div className={s["gallery__list"]}>
            {!isLoading &&
              galleryImages.map((img, i) => (
                <div className={s["gallery__list-item"]} key={`${img}_${i}`}>
                  <Image
                    src={img}
                    width={640}
                    height={480}
                    alt="gallery image"
                  />

                  <button
                    className={s["btn-like"]}
                    aria-label="add to wishlist">
                    <HeartIcon />
                  </button>
                </div>
              ))}

            {isLoading &&
              [...Array(6)].map((_, i) => <GalleryLoadingItem key={i} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
