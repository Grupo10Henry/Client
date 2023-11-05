// Kevin c:

import { useSelector } from "react-redux"
import Cards from "../../Cards/Cards"

import "./AllEvents.module.css"

const AllEvents = () => {
  const { nextEvents } = useSelector((s) => s.events)
  return (
    <div>
      <h2 className="subtitle gradient-text">
        <b>Todos Los Eventos Disponibles</b>
      </h2>
      {nextEvents ? <Cards data={nextEvents} /> : "No hay eventos disponibles :c"}
    </div>
  )
}

export default AllEvents
