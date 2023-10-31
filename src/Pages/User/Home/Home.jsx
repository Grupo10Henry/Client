// Kevin -^-

import { useEffect, useRef } from "react"
import AllEvents from "../../../Components/User/Events/AllEvents/AllEvents"
import MostPopular from "../../../Components/User/Events/MostPopular/MostPopular"
import NextEvents from "../../../Components/User/Events/NextEvents/NextEvents"
import Filters from "../../../Components/User/Filters/Filters"
// import { getEvents } from "../../../axios/config"
import { useLocation } from "react-router-dom"

import style from "./Home.module.css"
import Banner from "../../../Components/User/Banner/Banner"

const Home = () => {
  const { pathname } = useLocation()

  //   useEffect(() => {
  //     getEvents()
  //   }, [])

  const sectionRef = useRef(null)

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className={style.home}>
      <Banner scrollToSection={scrollToSection} />
      <section className={style.homeEvents}>
        <div className={style.homeTitle}>
          <h2 className={style.homeH2}>Eventos:</h2>
        </div>
        <p className={style.homeText}>
          Explora nuestros emocionantes eventos. Desde conciertos y obras de
          teatro hasta proyecciones de cine y eventos deportivos, en Mi Butaca
          te ofrecemos una amplia variedad de experiencias en vivo. Encuentra
          tus próximas salidas y asegura tus boletos con nosotros. ¡La diversión
          está a solo un clic de distancia!
        </p>
      </section>
      {pathname === "/" && <Filters />}
      <MostPopular sectionRef={sectionRef} />
      <NextEvents />
      <AllEvents />
    </div>
  )
}

export default Home
