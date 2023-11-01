// Kevin :o

import Cards from "../../Cards/Cards"
import { useSelector } from "react-redux"
import events from "../Events"

import style from "./NextEvents.module.css"

const NextEvents = () => {
  const { nextEvents } = useSelector((s) => s.events)
  const Events = nextEvents
  // const eventsArr = allEvents[1].date

  // eventsArr.sort((a, b) => b.date - a.date)

  // eventsArr.sort((a, b) => {
  //   if (a.date < b.date) {
  //     return 1
  //   } else if (a.date > b.date) {
  //     return -1
  //   } else {
  //     return 0
  //   }
  // })

  // const año1 = parseInt(String(a.date).substring(0, 4))
  // const mes1 = parseInt(String(eventsArr[0].date).substring(5, 7))
  // const dia1 = parseInt(String(eventsArr[0].date).substring(8, 10))

  console.log(Events)

  // const Events = [events[0], events[2], events[1], events[3]]

  return (
    <div>
      <h2 className="subtitle gradient-text">
        <b>Próximos Eventos</b>
      </h2>
      {/* {Events ? <Cards data={Events} /> : "No hay proximos eventos :c"} */}
      <p>CUIDADO</p>
      <p>piso mojado</p>
    </div>
  )
}

export default NextEvents
