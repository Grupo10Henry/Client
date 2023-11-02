// Kevin :o

import Cards from "../../Cards/Cards"
import { useSelector } from "react-redux"

import style from "./NextEvents.module.css"
// import events from "../Events"

const NextEvents = () => {
  const { nextEvents } = useSelector((s) => s.events)
  let events = undefined
  if (nextEvents != undefined) {
    events = [nextEvents[0], nextEvents[1], nextEvents[2], nextEvents[3]]
  }
  const Events = events

  return (
    <div>
      <h2 className="subtitle gradient-text">
        <b>Próximos Eventos</b>
      </h2>
      {Events === undefined ? "No hay proximos eventos :c" : <Cards data={Events} />}
    </div>
  )
}

export default NextEvents
