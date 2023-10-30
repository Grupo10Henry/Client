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
      {pathname === "/" && <Filters />}
      <MostPopular sectionRef={sectionRef} />
      <NextEvents />
      <AllEvents />
    </div>
  )
}

export default Home
