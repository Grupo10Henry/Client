//Guada

import React, { useEffect, useState } from "react"
import { IoStar, IoStarHalf } from "react-icons/io5"
import { instance } from "../../../../axios/config"
import changeOrderDate from "../../../../utils/orderDate"
import Loader from "../../Loader/Loader"

import style from "./ReviewsEvent.module.css"

// const reviews = [
//     {
//         rating:3,
//         nameEvent:"Duki",
//         imageEvent:"https://www.notadetapa.com/wp-content/uploads/2023/04/Duki.webp"
//     },
//     {
//         rating:5,
//         nameEvent:"Maria Becerra",
//         imageEvent:"https://www.pronto.com.ar/u/fotografias/m/2021/7/9/f768x1-19757_19884_79.jpg"
//     },
//     {
//         rating:3,
//         nameEvent:"TINI",
//         imageEvent:"https://pbs.twimg.com/media/FuznSlhXoAAsSEr.jpg"
//     },
//     {
//         rating:4,
//         nameEvent:"Emilia Mernes",
//         imageEvent:"https://i.pinimg.com/736x/e5/95/8e/e5958e9621bf522e8fb25911d0e15fb6.jpg"
//     },
//     {
//         rating:4,
//         nameEvent:"Nicki Nicole",
//         imageEvent:"https://marcelagodoyespectaculos.files.wordpress.com/2023/07/image-2.png"
//     },
// ]

const renderStars = (rating) => {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0
  return (
    <>
      {[...Array(fullStars)].map((_, starIndex) => (
        <IoStar key={starIndex} />
      ))}
      {hasHalfStar && <IoStarHalf />}
    </>
  )
}

const ReviewsEvent = () => {
  //Recibe del usuario: rating - nombre de evento - foto de evento
  const [prevEvents, setPrevEvents] = useState([])
  const [loading, setLoading] = useState(false)
  //Muestra las estrellas según la calificación.

  const getPrevEvents = async () => {
    try {
      const response = await instance.get("/event/previus")
      return response?.data
    } catch (error) {
      throw error // Propaga el error para que sea capturado por el código que llama a getPrevEvents
    }
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      const data = await getPrevEvents()
      setPrevEvents(data)
    } catch (error) {
      console.error("Error al traer los eventos previos:", error)
      setLoading(false)
      // Manejo de errores, como mostrar un mensaje al usuario o realizar otras acciones necesarias
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <div className={style.reviewsEvent}>
      {prevEvents?.map((review) => (
        <div key={review.eventID} className={style.reviewEvent}>
          <div className={style.imgEventContainer}>
            <img
              src={review.image}
              alt={`Imagen de ${review.name}`}
              className={style.eventImage}
            />
          </div>
          <div className={style.infoEventContainer}>
            <h4 className={style.nameEvent}>{review.name}</h4>
            <p className={style.dateEvent}>
              Realizado el: {changeOrderDate(review.date)} a las: {review.time}
              hs.
            </p>
            <div className={style.reviewEventStars}>{renderStars(5)}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ReviewsEvent
