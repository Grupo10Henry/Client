import { AiOutlineArrowDown } from "react-icons/ai"

import style from "./Banner.module.css"

const Banner = ({ scrollToSection }) => {
  return (
    <section className={style.banner}>
      <div className={style.bannerBg}></div>
      <div className={style.bannerContent}>
        <h1 className={style.bannerH1}>¡Bienvenido a Mi Butaca!</h1>
        <p className={style.bannerParagraph}>
          En Mi Butaca, estamos dedicados a brindarte una experiencia
          inolvidable en la industria del entretenimiento. Desde los eventos más
          emocionantes hasta las presentaciones más conmovedoras, estamos aquí
          para conectar a los amantes del arte y la diversión con las mejores
          experiencias en vivo. Explora nuestro catálogo de eventos, asegura tus
          boletos y prepárate para una experiencia inolvidable. ¡Tu butaca te
          espera!
        </p>
        <div className={style.bannerBtn} onClick={scrollToSection}>
          <AiOutlineArrowDown />
        </div>
      </div>
    </section>
  )
}
export default Banner
