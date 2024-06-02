import Image from "next/image"
import s from "./gallery.module.scss"
import { useGallery } from "@/hooks/useGallery"
import { EP_VALUES } from "@/types"
import { HeartIcon, PlusIcon } from "../icons"
import { GalleryListLoading } from "./galleryListLoading"

export const GalleryBody = ({ id }: { id: EP_VALUES }) => {
  const { galleryImages, addMoreImages, status } = useGallery(id)

  if (status === "error") {
    return <h1>Error</h1>
  }

  return (
    <div className={s["gallery__body"]}>
      <ul className={s["gallery__list"]}>
        {galleryImages.map((img, i) => (
          <li className={s["gallery__item"]} key={`${img}_${i}`}>
            <Image src={img} width={640} height={480} alt="gallery image" />
            <button className={s["btn-like"]} aria-label="add to wishlist">
              <HeartIcon />
            </button>
          </li>
        ))}
        {status === "loading" && <GalleryListLoading />}
      </ul>

      {status === "success" && (
        <button className={s["gallery__btn-more"]} onClick={addMoreImages}>
          <PlusIcon />
        </button>
      )}
    </div>
  )
}
