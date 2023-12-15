import { Github } from "../footer/icons/Github";
import { Icon } from "./icon/Icon";
import { Instagram } from "../footer/icons/Instagram";
import { Linkedin } from "../footer/icons/Linkedin";

export function Hero () {
  return (
    <header className="hero__container">
      <div className="hero__info">
        <div>
          <p>Bem vindo! Sou</p>
          <h1 className="hero__title">
            <span>GUSTAVO </span>
            <span>SANTOS</span>
          </h1>
          <h2>Web Developer</h2>
        </div>
        <div className="hero__icons">
          <a href="https://github.com/GustavoS7" className="hero__icon">
            <Github />
          </a>
          <a href="https://www.instagram.com/gustavods2910/" className="hero__icon">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/in/gustavo-dos-santos-69049424a/" className="hero__icon">
            <Linkedin />
          </a>
        </div>
      </div>
      <div className="hero__img_container">
        <Icon />
      </div>
    </header>
  )
}