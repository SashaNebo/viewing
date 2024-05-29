import Link from "next/link"
import { Logo } from "../ui/logo"
import s from "./header.module.scss"
import Image from "next/image"
import menuSvg from "../../../public/images/menu.svg"
export const Header = () => {
  return (
    <header>
      <div className={s["header-fixed"]}>
        <div className={s["header-fixed__container"]}>
          <div className={s["header-fixed__wrapper"]}>
            <nav className={s["header-fixed__nav"]}>
              <Logo />
              <search className={s["search"]} />
              <ul className={s["nav-list"]}>
              <li className={s["nav-list__item"]}>
                  <button className={s["menu-btn"]} aria-label="open category menu">
                    <Image src={menuSvg} alt={""} width={40} />
                  </button>
                </li>
               
                <li className={s["nav-list__item"]}>
                  <Link href={"login"}>Login</Link>
                </li>
                <li className={s["nav-list__item"]}>
                  <Link href={"signup"}>Sign up</Link>
                </li>
           
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
