import Link from "next/link"

import s from "./logo.module.scss"
import { FireIcon } from "@/components/icons"

export const Logo = () => {
  return (
    <Link className={s["logo"]} href="/" aria-label="Go home">
      <FireIcon />
      <span>Viewing</span>
    </Link>
  )
}
