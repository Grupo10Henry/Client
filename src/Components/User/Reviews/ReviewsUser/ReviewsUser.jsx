//Guada

import { IoStar, IoStarHalf } from "react-icons/io5"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

import style from "./ReviewsUser.module.css"

import { Pagination } from "swiper/modules"

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
      date: new Date(2023, 2, 14),
      rating: 4,
      event: "Karol G",
    },
    {
      name: "Belén",
      lastName: "Gonzales",
      date: new Date(2023, 5, 21),
      rating: 3,
      event: "Shakira",
    },
    {
      name: "Carlos",
      lastName: "Marinez",
      date: new Date(2023, 8, 9),
      rating: 5,
      event: "Maria Becerra",
    },
    {
      name: "Nicolas",
      lastName: "Perez",
      date: new Date(2023, 1, 5),
      rating: 5,
      event: "TINI",
    },
    {
      name: "Guillermo",
      lastName: "Román",
      date: new Date(2023, 10, 3),
      rating: 2,
      event: "Maluma",
    },
    {
      name: "Juan",
      lastName: "Gomez",
      date: new Date(2023, 9, 6),
      rating: 4,
      event: "Luis Fonsi",
    },
    {
      name: "Sofia",
      lastName: "Aguirre",
      date: new Date(2023, 5, 2),
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
      spaceBetween={20}
      className={style.reviewSwiper}
      slidesPerView={1}
      pagination={true}
      modules={[Pagination]}
      breakpoints={{
        // Definición de los breakpoints para mostrar distintos números de slides
        768: {
          slidesPerView: 3, // En pantallas con un ancho igual o superior a 768px, muestra 2 slides por vista
        },
        // Agrega más breakpoints si deseas cambiar la cantidad de slides en otras resoluciones
      }}
    >
      {reviews.map((review, index) => (
        //Review
        <SwiperSlide key={index} className={style.reviewSwiperSlide}>
          <h3>
            {review.name} {review.lastName}- {review.date.getDate()}/
            {review.date.getMonth() + 1}/{review.date.getFullYear()}
          </h3>
          {/* Estrellas usuario */}
          <div className={style.reviewStars}>
            {[...Array(review.rating)].map((_, starIndex) => (
              <IoStar key={starIndex} />
            ))}
          </div>
          {/* Evento - comentario */}
          <div className={style.reviewEvent}>
            <p>{review.event}</p>
            <p>{comments[review.rating - 1]}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ReviewsUser
