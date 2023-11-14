import { IoStar } from "react-icons/io5"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import style from "./ReviewsUser.module.css"

import convertToRealtiveDate from "../../../../utils/relativeDate"
import { useEffect, useState } from "react"
import axios from "axios"
import Loader from "../../Loader/Loader"

const ReviewsUser = () => {
  const [reviews, setReviews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    axios
      .get("http://localhost:3001/review")
      .then((res) => {
        setReviews(res?.data)
      })
      .catch((error) => {
        setIsLoading(false)
        setError(true)
        console.log(error)
      })
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return <Loader size={3} height={250} />
  } else if (error) {
    return (
      <div>
        <p>Error al traer las reviews</p>
      </div>
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
      {reviews?.slice(0, 20).map((review, index) => (
        <SwiperSlide key={index} className={style.reviewSwiperSlide}>
          {/* Estrellas usuario */}
          <div className={style.reviewStars}>
            {[...Array(review.rating)].map((_, starIndex) => (
              <IoStar key={starIndex} />
            ))}
            {[...Array(5 - review.rating)].map((_, starIndex) => (
              <IoStar key={starIndex} className={style.starGray} />
            ))}
            <p>{convertToRealtiveDate(review.reviewDate)}</p>
          </div>
          <h3 className={style.reviewTitle}>
            <p>{review.eventName}</p>
          </h3>

          {/* Evento - comentario */}
          <div className={style.reviewEvent}>
            <div className={style.reviewName}>
              <p>
                {review.userName} {review.userLastName}
              </p>
            </div>
            <p className={style.review}>{review.review}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ReviewsUser
