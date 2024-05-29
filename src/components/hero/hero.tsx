  import s from "./hero.module.scss"

export const Hero = () => {
  return (
    <section className={s["hero"]}>
      <div className="container">
        <div className={s["hero__content"]}>
          <h1 className={s["hero__title"]}>View beautiful pictures with me</h1>
          <button className={s["hero__btn-start"]} aria-label="scroll to gallery">Let’s view</button>
        </div>
      </div>
    </section>
  )
}
