import { Project } from "./icon/project";

export function Contact() {
  return (
    <div className="contact__container">
      <div className="contact__content">
        <div className="contact__hero">
          <h1 className="contact__title">Algo em <span>mente?</span></h1>

          <h2 className="contact__subtitle">Entre em Contato</h2>

          <div>
            <Project />
          </div>
        </div>

        <form action="" className="contact__form_container">
          <div className="contact__form_group">
            <label htmlFor="name">Seu nome</label>
            <input type="text" id="name" name="email" placeholder="Nome" />
          </div>

          <div className="contact__form_group">
            <label htmlFor="email">Seu email</label>
            <input type="email" id="email" name="email" placeholder="email@email.com" />
          </div>

          <div className="contact__form_group">
            <label htmlFor="obs">Observações</label>
            <textarea name="obs" id="obs" cols="30" rows="10"></textarea>
          </div>

        </form>
      </div>
    </div>
  )
}
