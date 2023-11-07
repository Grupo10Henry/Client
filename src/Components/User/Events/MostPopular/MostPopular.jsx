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

const MostPopular = () => {
  const noLink = "/"

  const { nextEvents } = useSelector((s) => s.events);

  if (!nextEvents) {
    return <p>Cargando eventos...</p>
  }

  let orden = [...nextEvents]

  // ordena el array con los eventos segun las views para mostrar los banners de los primeros 3
  orden.sort((a, b) => b.views - a.views)

  return (
    <div className={style.container} id="mostPopular">
      <h2 className="subtitle gradient-text">
        <b>Eventos Recomendados</b>
      </h2>{" "}
      <br />
      <Swiper
        // cosas para generar el "carrusel" de banners
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        slidesPerView={1}
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
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        className="swiper_container"
      >
        <SwiperSlide>
          <Link
            to={orden[0]?.eventID ? `/detalle/${orden[0].eventID}` : noLink}
          >
            <button className={style.buttonInfo}>
              {"-> Mas informacion aqui <-"}
            </button>
          </Link>
          <img
            src={orden[0]?.bannerImage ? orden[0].bannerImage : noBanner}
            alt="image"
            className={style.image}
          />
        </SwiperSlide>
        <br />
        <SwiperSlide>
          <Link
            to={orden[1]?.eventID ? `/detalle/${orden[1].eventID}` : noLink}
          >
            <button className={style.buttonInfo}>
              {"-> Mas informacion aqui <-"}
            </button>
          </Link>
          <img
            src={orden[1]?.bannerImage ? orden[1].bannerImage : noBanner}
            alt="image"
            className={style.image}
          />
        </SwiperSlide>
        <br />
        <SwiperSlide>
          <Link
            to={orden[2]?.eventID ? `/detalle/${orden[2].eventID}` : noLink}
          >
            <button className={style.buttonInfo}>
              {"-> Mas informacion aqui <-"}
            </button>
          </Link>
          <img
            src={orden[2]?.bannerImage ? orden[2].bannerImage : noBanner}
            alt="image"
            className={style.image}
          />
        </SwiperSlide>
        <br />

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline" />
          </div>
          <div className="swiper-pagination" />
        </div>
      </Swiper>{" "}
      <br />
    </div>
  )
}

export default MostPopular