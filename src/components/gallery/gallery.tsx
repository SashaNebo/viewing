"use client"

import s from "./gallery.module.scss"
import { EP_VALUES } from "@/types"
import { GalleryBody } from "./galleryBody"

export const Gallery = ({ id }: { id: EP_VALUES }) => {
  return (
    <section className={s["gallery"]}>
      <div className="container">
        <div className="gallery__content">
          <h2 className={s["gallery__title"]}>Gallery {id}</h2>

          <GalleryBody id={id} />
        </div>
      </div>
    </section>
  )
}
