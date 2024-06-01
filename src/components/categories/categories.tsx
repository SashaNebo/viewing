import Link from "next/link"
import { categories } from "@/types"
import s from "./categories.module.scss"

export const Categories = () => {
  return (
    <div className={s["categories"]}>
      <div className="container">
        <ul className={s["categories__list"]}>
          {categories.map((c) => (
            <li className={s["categories__item"]} key={c}>
              <Link
                className={s["categories__link"]}
                href={`/categories/${c}`}
                aria-label={`open category ${c}`}>
                {c}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
