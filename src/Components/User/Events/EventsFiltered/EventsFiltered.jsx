import { useSelector } from "react-redux"

import style from "./EventsFiltered.module.css"
import Cards from "../../Cards/Cards"

const EventsFiltered = () => {
  const { eventsFiltered, isLoading } = useSelector((s) => s.events)

  if (isLoading) {
    return <h2>LOADING...</h2>
  }

  if (eventsFiltered.length === 0) {
    return <h2>NO SE ENCONTRARON EVENTOS</h2>
  }

  return (
    <section className={style.eventsFiltered}>
      <div>EventsFiltered</div>
      <Cards data={eventsFiltered} />
    </section>
  )
}
export default EventsFiltered
