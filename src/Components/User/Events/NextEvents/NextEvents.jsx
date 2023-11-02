// Kevin :o

import Cards from "../../Cards/Cards"
import { useSelector } from "react-redux"

import style from "./NextEvents.module.css"

const NextEvents = () => {
  const { nextEvents } = useSelector((s) => s.events)

  const Events = [nextEvents[0], nextEvents[1], nextEvents[2], nextEvents[3]]

  return (
    <div>
      <h2 className="subtitle gradient-text">
        <b>Próximos Eventos</b>
      </h2>
      {Events ? <Cards data={Events} /> : "No hay proximos eventos :c"}
    </div>
  )
}

export default NextEvents
