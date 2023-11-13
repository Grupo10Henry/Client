//Guada

import { IoStar, IoStarHalf } from "react-icons/io5"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import style from "./ReviewsUser.module.css"

import convertToRealtiveDate from "../../../../utils/relativeDate"

const ReviewsUser = () => {
  //Recibe del admin: respuestas sugeridas
  const comments = [
    "No recomendaría este evento. Experimenté dificultades significativas.",
    "No estoy satisfecho, algunos problemas a mejorar.",
    "La experiencia fue promedio. Ni buena ni mala.",
    "Fue un gran evento, aunque con pequeños inconvenientes.",
    "Muy agradable. Disfruté cada parte del evento y lo recomendaría sin dudarlo.",
  ]

  //Recibe del usuario: nombre - apellido - fecha - rating - nombre de evento
  const reviews = [
    {
      name: "Micaela",
      lastName: "Bellone",
      date: "2023-11-07",
      rating: 4,
      event: "Karol G",
    },
    {
      name: "Belén",
      lastName: "Gonzales",
      date: "2023-11-04",
      rating: 3,
      event: "Shakira",
    },
    {
      name: "Carlos",
      lastName: "Marinez",
      date: "2023-11-08",
      rating: 5,
      event: "Maria Becerra",
    },
    {
      name: "Nicolas",
      lastName: "Perez",
      date: "2023-11-01",
      rating: 5,
      event: "TINI",
    },
    {
      name: "Guillermo",
      lastName: "Román",
      date: "2023-11-05",
      rating: 2,
      event: "Maluma",
    },
    {
      name: "Juan",
      lastName: "Gomez",
      date: "2023-11-08",
      rating: 4,
      event: "Luis Fonsi",
    },
    {
      name: "Sofia",
      lastName: "Aguirre",
      date: "2023-11-07",
      rating: 3,
      event: "Karol G",
    },
  ]

  //Calcula y devuelve el promedio de las calificaciones de las revisiones.
  const averageRating =
    reviews.reduce((total, review) => total + review.rating, 0) / reviews.length

  //Muestra las estrellas según la calificación.
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

  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      className={style.reviewSwiper}
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      breakpoints={{
        // Definición de los breakpoints para mostrar distintos números de slides
        768: {
          slidesPerView: 3, // En pantallas con un ancho igual o superior a 768px, muestra 2 slides por vista
        },
        // Agrega más breakpoints si deseas cambiar la cantidad de slides en otras resoluciones
      }}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index} className={style.reviewSwiperSlide}>
          {/* Estrellas usuario */}
          <div className={style.reviewStars}>
            {[...Array(review.rating)].map((_, starIndex) => (
              <IoStar key={starIndex} />
            ))}
            <p>{convertToRealtiveDate(review.date)}</p>
          </div>
          <h3 className={style.reviewTitle}>
            <p>{review.event}</p>
          </h3>

          {/* Evento - comentario */}
          <div className={style.reviewEvent}>
            <p className={style.reviewName}>
              {review.name} {review.lastName}
            </p>
            <p className={style.reviewComment}>{comments[review.rating - 1]}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ReviewsUser
