// Kevin -^-
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import Banner from "../../../Components/User/Banner/Banner"
import EventsFiltered from "../../../Components/User/Events/EventsFiltered/EventsFiltered"
import EventsSections from "../../../Components/User/Events/EventsSections/EventsSections"
import EventsText from "../../../Components/User/EventsText/EventsText"
import Filters from "../../../Components/User/Filters/Filters"
import { instance } from "../../../axios/config"
import { getNextEvents, setEventsDate } from "../../../redux/eventsSlice"
import Reviews from "../../../Components/User/Reviews/Reviews"
import convertUniquesDates from "../../../utils/convertUniqueDates"

import style from "./Home.module.css"

const Home = () => {
  const { pathname } = useLocation()
  const { isFilter } = useSelector((s) => s.events)

  const dispatch = useDispatch()

  //obtiene los proximos eventos
  const NextEvents = async () => {
    try {
      const { data } = await instance.get("/event/next") // http://localhost:3001/event/next
      dispatch(setEventsDate(convertUniquesDates(data)))
      return data
    } catch (error) {
      console.log(error?.response?.data.error || error)
    }
  }

  useEffect(() => {
    NextEvents().then((data) => dispatch(getNextEvents(data)))
  }, [])

  return (
    <div className={style.home}>
      <Banner />
      <EventsText />
      {pathname === "/" && <Filters />}
      {isFilter ? <EventsFiltered /> : <EventsSections />}
      <Reviews />
    </div>
  )
}

export default Home
