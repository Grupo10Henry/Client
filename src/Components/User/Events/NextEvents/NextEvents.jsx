// Kevin :o

import Cards from "../../Cards/Cards"
import events from "../Events"

import style from "./NextEvents.module.css"

const NextEvents = () => {
  const nextEvents = [events[0], events[2], events[1], events[3]]

  return (
    <div>
      <h2>
        <b>- Próximos Eventos -</b>
      </h2>
      <Cards data={nextEvents} />
    </div>
  )
}

export default NextEvents
