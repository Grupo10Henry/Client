// Kevin c:

import { useSelector } from "react-redux"
import Cards from "../../Cards/Cards"

import "./AllEvents.module.css"
import Loader from "../../Loader/Loader"

const AllEvents = () => {
  const { nextEvents, isLoading } = useSelector((s) => s.events)

  if (isLoading) {
    return <Loader />
  }

  return (
    <div>
      <h2 className="subtitle gradient-text">
        <b>Todos Los Eventos Disponibles</b>
      </h2>
      {nextEvents.length === 0 ? (
        "Hubo un error al cargar los eventos :c"
      ) : (
        <Cards data={nextEvents} />
      )}
    </div>
  )
}

export default AllEvents
