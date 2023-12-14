export function Navbar () {
  return (
    <nav className="navbar__container">
      <div className="navbar__nav">
        <div className="navbar__logo">
          <span className="navbar__brackets">{"<"}</span>
          <span className="navbar__name">Gustavo Santos</span >
          <span className="navbar__brackets">{"/>"}</span>
        </div>
        <div className="navbar__group">
          <a className="navbar__item" href="#about">Sobre mim</a>
          <a className="navbar__item" href="">Projetos</a>
          <a className="navbar__item" href="">Contato</a>
        </div>
      </div>
    </nav>
  )
}