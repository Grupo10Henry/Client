import { useSelector } from "react-redux"

import style from "./EventsFiltered.module.css"
import Cards from "../../Cards/Cards"
import Loader from "../../Loader/Loader"

const renderItem = new Map()

const EventsFiltered = () => {
  const { eventsFiltered, isLoading, isError } = useSelector((s) => s.events)

  return (
    <section className={style.eventsFilteredContainer}>
      {isLoading && <Loader />}
      {!isLoading && !isError && (
        <section className={style.eventsFilteredCards}>
          <Cards data={eventsFiltered} />
        </section>
      )}
      {isError && (
        <h2 className={style.eventsFilteredError}>
          {typeof isError === "string"
            ? isError
            : "Algo salió mal. Por favor, inténtelo de nuevo más tarde."}
        </h2>
      )}
    </section>
  )
}
export default EventsFiltered
