import { Typescript } from './icons/typescript'
import { Javascript } from './icons/javascript'

export function Skills() {
  return (
    <div className="skills__container">
      <div className="skills__content">
        <h1>
          Minhas <span>Habilidades</span>
        </h1>

        <div className="skills__techs">
          <Typescript />
          <Javascript />
        </div>
      </div>
    </div>
  )
}
