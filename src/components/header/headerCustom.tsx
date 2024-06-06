"use client"
// import Link from "next/link"
import s from "./header.module.scss"
import { BagIcon, GalleryIcon } from "../icons"
import { categories } from "@/types"
import { Link } from "next-view-transitions"

export const HeaderCustom = () => {
  return (
    <div className={s["custom"]}>
      <div className={s["custom-group__icons"]}>
        <button className={s["categories-btn"]}>
          <GalleryIcon />

          <div className={s["categories"]}>
            <ul className={s["categories__list"]}>
              {categories.map((c) => (
                <li className={s["categories__item"]} key={c}>
                  <Link
                    className={s["categories__link"]}
                    href={`/categories/${c}`}>
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </button>

        <Link
          className={s["wishlist"]}
          href={"/wishlist"}
          aria-label="open wishlist">
          <BagIcon />
        </Link>
      </div>

      <div className={s["custom-group__account"]}>
        <Link href={"/login"}>Login</Link>
        <Link href={"/signup"}>SignUp</Link>
      </div>
    </div>
  )
}
