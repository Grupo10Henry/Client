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
import {
  setDataStart,
  setDataSuccess,
  setEventsDate,
} from "../../../redux/eventsSlice"
import Reviews from "../../../Components/User/Reviews/Reviews"
import convertUniquesDates from "../../../utils/convertUniqueDates"

import style from "./Home.module.css"
import MostPopular from "../../../Components/User/Events/MostPopular/MostPopular"

const Home = () => {
  const { pathname } = useLocation()
  const { isFilter } = useSelector((s) => s.events)

  const dispatch = useDispatch()

  const fetchAvailableEvents = () => async (dispatch) => {
    dispatch(setDataStart())
    try {
      const { data } = await instance.get("/event/next")
      dispatch(setEventsDate(convertUniquesDates(data)))
      dispatch(setDataSuccess(data))
    } catch (error) {
      if (error?.response.data.error) {
        console.error(error?.response.data.error)
      } else {
        console.error("Error al obtener los eventos:", error)
      }
    }
  }

  useEffect(() => {
    dispatch(fetchAvailableEvents())
  }, [dispatch])

  return (
    <div className={style.home}>
      <Banner />
      <EventsText />
      <MostPopular />
      {pathname === "/" && <Filters />}
      {isFilter ? <EventsFiltered /> : <EventsSections />}
      <Reviews />
    </div>
  )
}

export default Home
