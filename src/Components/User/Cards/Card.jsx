// Kevin owo

import { Link } from "react-router-dom";

import style from "./Card.module.css";

// recibo "name" "date" "time" "image" "locationName" y "id" para el detail
const Card = (event) => {

   const { name, image, time, date, locationName, eventID } = event.event

   return (
      <div key={eventID} className={style.card}>
         <Link className={style.link} to={`/detalle/${eventID}`}>
            <h3><b>{name}</b></h3> <br />
            <img className={style.image} src={image} alt="Imagen del Evento" />
            <p>{date}</p>
            <p>{time}</p>
            <p><b>{locationName}</b></p>
         </Link>
      </div>
   )
}

export default Card