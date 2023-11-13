// Kevin owo

import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { HiLocationMarker } from "react-icons/hi"
import { formatoPesosColombianos } from "../../../utils/formatPrice"
import { setEventID } from "../../../redux/eventIDSlice"
import { instance } from "../../../axios/config"

import style from "./Card.module.css"

// recibo "name" "date" "time" "image" "locationName" y "id" para el detail
//Renderiza Imagen, Fecha, Horario, Ubicación (nombre del lugar), Precio, Nombre
const Card = (props) => {
  const dispatch = useDispatch()

  const { name, image, time, date, locationName, eventID, priceMin } = props
  const formatPrice = priceMin && formatoPesosColombianos.format(priceMin)

  const setEventIDInRedux = async () => {
    // console.log(eventID, "eventID en card")

    dispatch(setEventID(eventID))
    await instance.put(`/event/views/${eventID}`)
  }

  const renderPrice = () => {
    if (priceMin === 0) {
      return <b className={style.cardPrice}>Gratis</b>
    } else {
      return (
        <>
          Desde:{" "}
          <span
            className={style.cardPrice}
            dangerouslySetInnerHTML={{ __html: `<b>${formatPrice}</b>` }}
          />
        </>
      )
    }
  }

  return (
    <div className={style.card}>
      <div className={style.img}>
        <img src={image} alt={name} />
      </div>

      <div className={style.content}>
        <h4 className="gradient-text">{name}</h4>
        <div className={style.location}>
          <HiLocationMarker />
          <span>{locationName}</span>
        </div>

        <div>{renderPrice()}</div>
        <div>
          Fecha: <b>{date?.split("-").reverse().join("-")}</b>
        </div>
        <div>
          Horario: <b>{time?.split(":").slice(0, 2).join(":")}hs</b>
        </div>
      </div>

      <Link
        to={`/detalle/${eventID}`}
        className={style.more}
        onClick={setEventIDInRedux}
      >
        Saber más
      </Link>
    </div>
  )
}

export default Card
