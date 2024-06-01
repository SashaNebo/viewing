import { Logo } from "../ui/logo"
import s from "./header.module.scss"
import { HeaderCustom } from "./headerCustom"
import { HeaderSocial } from "./headerSocial"

export const Header = () => {
  return (
    <header>
      <div className={s["header-fixed"]}>
        <div className={s["header-fixed__container"]}>
          <div className={s["header-fixed__wrapper"]}>
            <nav className={s["header-fixed__nav"]}>
              <Logo />
              <HeaderSocial />
              <HeaderCustom />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
