import { Icon } from "./icon/Icon";

export function Hero () {
  return (
    <header className="hero__container">
      <div className="hero__info">
        <p>Bem vindo! Sou</p>
        <h1 className="hero__title">
          <span>GUSTAVO </span>
          <span>SANTOS</span>
        </h1>
        <h2>Web Developer</h2>
      </div>
      <div className="hero__img_container">
        <Icon />
      </div>
    </header>
  )
}