import DevelopersCards from "./DevelopersCards"

import style from "./DevelopersAbout.module.css"

const DevelopersAbout = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.texts}>
        <h2 className={`gradient-text ${style.title}`}>
          Conocé a nuestro equipo de desarrolladores
        </h2>
        <p className={style.paragraph}>
          ¿Quiénes somos? Nosotros, los <b>creadores</b> detrás de esta
          plataforma, somos un equipo diverso de{" "}
          <b>desarrolladores fullstack</b>, cada uno aportando su experiencia
          única y habilidades especializadas. Nos unimos con un propósito claro:
          construir una presencia digital sólida para{" "}
          <b>Tres Grupos Creativos</b>.
        </p>
      </div>
      <DevelopersCards />
    </div>
  )
}
export default DevelopersAbout
