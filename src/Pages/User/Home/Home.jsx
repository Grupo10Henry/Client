// Kevin -^-
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import Banner from "../../../Components/User/Banner/Banner"
import EventsSections from "../../../Components/User/Events/EventsSections/EventsSections"
import EventsText from "../../../Components/User/EventsText/EventsText"
import Filters from "../../../Components/User/Filters/Filters"
import { instance } from "../../../axios/config"
import { getAllEvents, setEventsDate, getNextEvents } from "../../../redux/eventsSlice"
import EventsFiltered from "../../../Components/User/Events/EventsFiltered/EventsFiltered"

import style from "./Home.module.css"
import Reviews2 from "../../../Components/User/Reviews/Reviews2"
const Home = () => {
  const { pathname } = useLocation()
  const { isFilter } = useSelector((s) => s.events)

  const dispatch = useDispatch()

  // function to set unique dates in state
  const convertUniquesDates = (arr) => {
    const onlyDateSet = [...new Set(arr.map((event) => event.date))]

    const newDates = onlyDateSet?.map((date) => {
      return {
        id: crypto.randomUUID(),
        text: date,
        value: date,
      }
    })

    return newDates
  }

  //obtiene los eventos
  const getEvents = async () => {
    try {
      const { data } = await instance.get("/event") // http://localhost:3001/event
      dispatch(setEventsDate(convertUniquesDates(data)))
      return data
    } catch (error) {
      console.log(error?.response?.data.error || error)
    }
  }
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
    getEvents().then((data) => dispatch(getAllEvents(data)))
    NextEvents().then((data) => dispatch(getNextEvents(data)))
  }, [])

  return (
    <div className={style.home}>
      <Banner />
      <EventsText />
      {pathname === "/" && <Filters />}
      {isFilter ? <EventsFiltered /> : <EventsSections />}
      <Reviews2 /> <br />
    </div>
  )
}

export default Home
