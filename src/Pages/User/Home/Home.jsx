// Kevin -^-

import { useEffect } from "react"
import AllEvents from "../../../Components/User/Events/AllEvents/AllEvents"
import MostPopular from "../../../Components/User/Events/MostPopular/MostPopular"
import NextEvents from "../../../Components/User/Events/NextEvents/NextEvents"

import style from "./Home.module.css"
import { getEvents } from "../../../axios/config"

const Home = () => {
  //   useEffect(() => {
  //     getEvents()
  //   }, [])

  return (
    <div className={style.home}>
      <MostPopular />
      <NextEvents />
      <AllEvents />
    </div>
  )
}

export default Home
