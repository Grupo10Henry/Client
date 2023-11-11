// Kevin :o

import Cards from "../../Cards/Cards"
import { useSelector } from "react-redux"

import style from "./NextEvents.module.css"
import Loader from "../../Loader/Loader"
// import events from "../Events"

const NextEvents = () => {
  const { nextEvents, isLoading } = useSelector((s) => s.events)
  const Events = nextEvents === undefined ? nextEvents : nextEvents.slice(0, 4)

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <h2 className="subtitle gradient-text">
        <b>Próximos Eventos</b>
      </h2>
      {Events === undefined ? (
        "No hay proximos eventos :c"
      ) : (
        <Cards data={Events} />
      )}
    </div>
  )
}

export default NextEvents
