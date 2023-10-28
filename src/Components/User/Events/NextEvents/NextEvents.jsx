// Kevin :o

// ESTO NO TIENE LOGICA, SOLO ES UNA DEMOSTRACION VISUAL DE COMO DEBE QUEDAR

import Card from "../../Cards/Card";
import events from "../Events"

import style from "./NextEvents.module.css";

const NextEvents = () => {

   const nextEvent = [events[0], events[2], events[6], events[1]]
   console.log(nextEvent)

   return (
      <div>
         <h2><b>- Proximos Eventos -</b></h2> 
         <div className={style.nexts}>
            {
               nextEvent.map(event =>
                  <Card event={event} />
               )}
         </div> <br />
      </div>
   )
}

export default NextEvents