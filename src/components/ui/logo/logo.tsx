import Link from "next/link"
import Image from "next/image"

import s from "./logo.module.scss"
import fire from "../../../../public/images/fire.svg"

export const Logo = () => {
  return (
    <Link className={s["logo"]} href="/" aria-label="Go home">
      <Image src={fire} alt={"logo image"} />
      <span>Viewing</span>
    </Link>
  )
}
