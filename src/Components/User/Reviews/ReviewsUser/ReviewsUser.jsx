import { IoStar } from "react-icons/io5"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { instance } from "../../../../axios/config"
import {
  failedReviews,
  startReviews,
  successReviews,
} from "../../../../redux/reviewsSlice"
import convertToRealtiveDate from "../../../../utils/relativeDate"

import style from "./ReviewsUser.module.css"
import axios from "axios"
import StarRating from "../../StarRating/StarRating"

const ReviewsUser = () => {
  const { reviews, isLoading, isError } = useSelector((s) => s.reviews)
  const dispatch = useDispatch()

  const fetchReviews = async () => {
    dispatch(startReviews())
    try {
      const { data } = await instance.get("/review")
      dispatch(successReviews(data))
    } catch (err) {
      console.log(err)
      dispatch(successReviews([]))
      dispatch(failedReviews("Error al traer las reviews"))
    }
  }

  useEffect(() => {
    fetchReviews()
  }, [])

  if (isLoading) {
    return <div className={style.loader}></div>
  } else if (isError) {
    return (
      <div className={style.error}>
        <p>{isError}</p>
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
      {reviews.length > 0 &&
        reviews.slice(0, 20).map((review, index) => (
          <SwiperSlide key={index} className={style.reviewSwiperSlide}>
            {/* Estrellas usuario */}
            <div className={style.reviewStars}>
              <StarRating rating={review?.rating} />

              <p>{convertToRealtiveDate(review?.reviewDate)}</p>
            </div>
            <h3 className={style.reviewTitle}>
              <p>{review?.eventName}</p>
            </h3>

            {/* Evento - comentario */}
            <div className={style.reviewEvent}>
              <div className={style.reviewName}>
                <p>
                  {review?.userName} {review?.userLastName}
                </p>
              </div>
              <p className={style.review}>{review?.review}</p>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default ReviewsUser
