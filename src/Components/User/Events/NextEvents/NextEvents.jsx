// Kevin :o

// ESTO NO TIENE LOGICA, SOLO ES UNA DEMOSTRACION VISUAL DE COMO DEBE QUEDAR

import Cards from "../../Cards/Cards"
import events from "../Events"

import style from "./NextEvents.module.css"

const NextEvents = () => {
  const nextEvents = [events[0], events[2], events[5], events[1]]

  return (
    <div>
      <h2>
        <b>- Proximos Eventos -</b>
      </h2>
      <Cards data={nextEvents} />
    </div>
  )
}

export default NextEvents
