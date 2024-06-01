import Link from "next/link"
import s from "./header.module.scss"
import { DiscordIcon, GithubIcon, GoogleIcon, TelegramIcon } from "../icons"

export const HeaderSocial = () => {
  const socialItems = [
    {
      link: "https://t.me/IlyaPribytkov",
      icon: <TelegramIcon />,
      socialName: "telegram",
    },
    {
      link: "https://discordapp.com/users/776724771848585217/",
      icon: <DiscordIcon />,
      socialName: "discordapp",
    },
    {
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=ilyapribytkov2003we6dev@gmail.com",
      icon: <GoogleIcon />,
      socialName: "google mail",
    },
    {
      link: "https://github.com/SashaNebo",
      icon: <GithubIcon />,
      socialName: "github",
    },
  ]

  return (
    <div className={s["social"]}>
      <ul className={s["social__list"]}>
        {socialItems.map(({ link, icon, socialName }) => (
          <li className={s["social__item"]} key={link}>
            <Link
              className={s["social__link"]}
              href={link}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={`social link to ${socialName}`}>
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
