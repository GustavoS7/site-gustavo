import { Github } from "./icons/Github";
import { Instagram } from "./icons/Instagram";
import { Linkedin } from "./icons/Linkedin";

export function Footer () {
  return (
    <footer className="footer_container">
      <div className="footer__content">
        <a href="https://github.com/GustavoS7" className="footer__icon">
          <Github variant="#fff" />
        </a>
        <a href="https://www.instagram.com/gustavods2910/" className="footer__icon">
          <Instagram variant="#fff" />
        </a>
        <a href="https://www.linkedin.com/in/gustavo-dos-santos-69049424a/" className="footer__icon">
          <Linkedin variant="#fff" />
        </a>
      </div>
    </footer>
  )
}