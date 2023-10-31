// Kevin -^-
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import Banner from "../../../Components/User/Banner/Banner"
import EventsSections from "../../../Components/User/Events/EventsSections/EventsSections"
import EventsText from "../../../Components/User/EventsText/EventsText"
import Filters from "../../../Components/User/Filters/Filters"
import { instance } from "../../../axios/config"
import { getAllEvents } from "../../../redux/eventsSlice"
import EventsFiltered from "../../../Components/User/Events/EventsFiltered/EventsFiltered"

import style from "./Home.module.css"

const Home = () => {
  const { pathname } = useLocation()
  const { isFilter } = useSelector((s) => s.events)

  const dispatch = useDispatch()

  //get events
  const getEvents = async () => {
    try {
      const { data } = await instance.get("/event") // http://localhost:3001/event
      return data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getEvents().then((data) => dispatch(getAllEvents(data)))
  }, [])

  return (
    <div className={style.home}>
      <Banner />
      <EventsText />
      {pathname === "/" && <Filters />}
      {isFilter ? <EventsFiltered /> : <EventsSections />}
    </div>
  )
}

export default Home
