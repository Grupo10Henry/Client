// Kevin owo

import { Link } from "react-router-dom";

import style from "./Card.module.css";

// recibo "name" "date" "time" "image" "adrressLocation/locationName" y "id" para el detail
const Card = () => {
   const event = {
      id: "id",
      name: "Nombre del Evento",
      image: "URL",
      date: "Fecha",
      time: "Horario",
      location: "Direccion del Lugar"
   }

   return (
      <div className={style.card}>
         <Link className={style.link} to={`/detail/${event.id}`}>
            <h3>{event.name}</h3>
            <img className={style.image} src={event.image} alt="Imagen del Evento" />
            <p>{event.date}</p>
            <p>{event.time}</p>
            <p>{event.location}</p>
         </Link>
      </div>
   )
}

export default Card