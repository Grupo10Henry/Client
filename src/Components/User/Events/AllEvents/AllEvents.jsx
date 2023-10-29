// Kevin c:

import { useSelector } from "react-redux"
import Cards from "../../Cards/Cards"

import "./AllEvents.module.css"

const AllEvents = () => {
  const { allEvents } = useSelector((s) => s.events)

  return (
    <div>
      <h2>
        <b>- Todos Los Eventos Disponibles -</b>
      </h2>
      <Cards data={allEvents} />
    </div>
  )
}

export default AllEvents
