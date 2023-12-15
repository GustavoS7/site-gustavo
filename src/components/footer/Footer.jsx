import Discord from "./icons/Discord";
import { Github } from "./icons/Github";
import { Instagram } from "./icons/Instagram";
import { Linkedin } from "./icons/Linkedin";

export function Footer () {
  return (
    <footer className="footer_container">
      <div className="footer__content">
        <a href="#" className="footer__icon">
          <Github />
        </a>
        <a href="#" className="footer__icon">
          <Instagram />
        </a>
        <a href="#" className="footer__icon">
          <Linkedin />
        </a>
        <a href="#" className="footer__icon">
          <Discord />
        </a>
      </div>
    </footer>
  )
}