import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules"
// import events from "../Events"

import noBanner from "../../../../assets/noBanner.jpeg"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"

import style from "./MostPupular.module.css"
import "./MostPupular.module.css"
import Loader from "../../Loader/Loader"

const MostPopular = () => {
  const noLink = "/"

  const { nextEvents, isLoading } = useSelector((s) => s.events)

  let orden = [...nextEvents]

  // ordena el array con los eventos segun las views para mostrar los banners de los primeros 3
  orden.sort((a, b) => b.views - a.views)

  if (isLoading) {
    return <Loader size={1} slide />
  }

  return (
    <div id="mostPopular">
      <h2 className="subtitle gradient-text">
        <b>Eventos Recomendados</b>
      </h2>{" "}
      <br />
      <Swiper
        // cosas para generar el "carrusel" de banners
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        allowTouchMove={false}
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
      >
        <SwiperSlide>
          <Link
            to={orden[0]?.eventID ? `/detalle/${orden[0].eventID}` : noLink}
          >
            <img
              src={orden[0]?.bannerImage ? orden[0].bannerImage : noBanner}
              alt="image"
              className={style.image}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={orden[1]?.eventID ? `/detalle/${orden[1].eventID}` : noLink}
          >
            <img
              src={orden[1]?.bannerImage ? orden[1].bannerImage : noBanner}
              alt="image"
              className={style.image}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link
            to={orden[2]?.eventID ? `/detalle/${orden[2].eventID}` : noLink}
          >
            <img
              src={orden[2]?.bannerImage ? orden[2].bannerImage : noBanner}
              alt="image"
              className={style.image}
            />
          </Link>
        </SwiperSlide>
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </Swiper>{" "}
      <br />
    </div>
  )
}

export default MostPopular
