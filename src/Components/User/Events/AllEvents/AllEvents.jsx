// Kevin c:

import { useSelector } from "react-redux"
import Cards from "../../Cards/Cards"

import "./AllEvents.module.css"

const AllEvents = () => {
  const { allEvents } = useSelector((s) => s.events)
  return (
    <div>
      <h2 className="subtitle gradient-text">
        <b>- Todos Los Eventos Disponibles -</b>
      </h2>
      {allEvents ? <Cards data={allEvents} /> : "No hay eventos disponibles :c"}
    </div>
  )
}

export default AllEvents
