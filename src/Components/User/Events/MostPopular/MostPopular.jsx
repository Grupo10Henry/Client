// Kevin :)

import React from "react"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules"
import events from "../Events"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"

import style from "./MostPupular.module.css"
import "./MostPupular.module.css"

const MostPopular = ({ sectionRef }) => {
  const event1 = events[1]
  const event2 = events[5]
  const event3 = events[2]

  return (
    <div className={style.container} ref={sectionRef}>
      <h2>
        <b>- Eventos Recomendados -</b>
      </h2>{" "}
      <br />
      <Swiper
        effect={"coverflow"}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
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
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <Link to={`/detail/${event1.eventID}`}>
          <SwiperSlide>
            <img src={event1.bannerImage} alt="image" />
          </SwiperSlide>
        </Link>
        <Link to={`/detail/${event2.eventID}`}>
          <SwiperSlide>
            <img src={event2.bannerImage} alt="image" />
          </SwiperSlide>
        </Link>
        <Link to={`/detail/${event3.eventID}`}>
          <SwiperSlide>
            <img src={event3.bannerImage} alt="image" />
          </SwiperSlide>
        </Link>
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline" />
          </div>
          <div className="swiper-pagination" />
        </div>
      </Swiper>
    </div>
  )
}

export default MostPopular
