// Kevin owo

import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { HiLocationMarker } from "react-icons/hi"
import { formatoPesosColombianos } from "../../../utils/formatPrice"
import { setEventID } from "../../../redux/eventIDSlice"
import style from "./Card.module.css"

// recibo "name" "date" "time" "image" "locationName" y "id" para el detail
//Renderiza Imagen, Fecha, Horario, Ubicación (nombre del lugar), Precio, Nombre
const Card = (props) => {

  const dispatch = useDispatch();

  const { name, image, time, date, locationName, eventID, priceMin } = props
  const formatPrice = priceMin && formatoPesosColombianos.format(priceMin)

  const setEventIDInRedux = () => {
    console.log(eventID, "eventID en card")
    dispatch(setEventID(eventID));
  };

  return (
    <div className={style.card}>
      <div className={style.img}>
        <img src={image} alt={name} />
      </div>

      <div className={style.content}>
        <h4>{name}</h4>
        <div className={style.location}>
          <HiLocationMarker />
          <span>{locationName}</span>
        </div>

        <div>
          Desde: <b>{formatPrice}</b>
        </div>
        <div>
          Fecha: <b>{date}</b>
        </div>
        <div>
          Horario: <b>{time}hs</b>
        </div>
      </div>


  <Link to={`/detalle/${eventID}`} 
        className={style.more}
        onClick={setEventIDInRedux}   
        >
        Saber más
      </Link>
    </div>
  )
}

export default Card
