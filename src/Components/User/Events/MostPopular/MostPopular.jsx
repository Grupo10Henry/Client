import React from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules"
import events from "../Events"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"

import style from "./MostPupular.module.css"
import "./MostPupular.module.css"

const MostPopular = () => {
  const event1 = events[1]
  const event2 = events[5]
  const event3 = events[2]

  return (
    <div className={style.container} id="mostPopular">
      <h2>
        <b>- Eventos Recomendados -</b>
      </h2>{" "}
      <br />
      <Swiper
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
          <Link to={`/detail/${event1.eventID}`}>
            <button className={style.buttonInfo}>
              {"-> Mas informacion aqui <-"}
            </button>
          </Link>
          <img src={event1.bannerImage} alt="image" className={style.image} />{" "}
          <br />
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`/detail/${event2.eventID}`}>
            <button className={style.buttonInfo}>
              {"-> Mas informacion aqui <-"}
            </button>
          </Link>
          <img src={event2.bannerImage} alt="image" className={style.image} />{" "}
          <br />
        </SwiperSlide>
        <SwiperSlide>
          <Link to={`/detail/${event3.eventID}`}>
            <button className={style.buttonInfo}>
              {"-> Mas informacion aqui <-"}
            </button>
          </Link>
          <img src={event3.bannerImage} alt="image" className={style.image} />{" "}
          <br />
        </SwiperSlide>
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
