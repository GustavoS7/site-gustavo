import { Icon } from "./icon/Icon";

export function About() {
  return (
    <div className="about__container" id="about">
      <div className="about__content">
        <div className="about__img">
          <Icon />
        </div>
        <div className="about__info">
          <h1 className="about__title">Sobre <span>mim</span></h1>

          <div className="about__me">
            <p>Olá, prazer! Meu nome é Gustavo. </p>

            <p>Eu sou um desenvolvedor fullstack, nascido em 2003 no Brasil.</p>

            <p>Desde o começo de minha carreria com dev,</p>

            <p>venho colaborando com a construção de um mundo virtual, em uma imobiliaria chamada Edmur Imóveis</p>

            <p>Trabalhando como desenvolvedor front-end e back-end.</p>

            <p>Sou naturalmente confiante e curioso, </p>

            <p>buscando desafios e melhorar minhas habilidades.</p>

            <p>Uso o codar como uma forma de liberdade, </p>

            <p>em explorar as infinitas de possibilidades.</p>

            <p>Vamos construir algo juntos?</p>
          </div>
        </div>
      </div>
    </div>
  )
}
