import { ChatEi } from "./cards/ChatEi";

export default function Projects() {
  return (
    <div className="projects__container">
      <div className="projects__content">
        <h1 className="projects__title">Meus <span>Projetos</span></h1>

        <div className="projects__card_container">
          <ChatEi />
          <ChatEi />
          <ChatEi />
        </div>
      </div>
    </div>
  )
}
