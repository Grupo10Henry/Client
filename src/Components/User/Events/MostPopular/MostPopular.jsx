import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules"
import events from "../Events";

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"

import style from "./MostPupular.module.css";
import "./MostPupular.module.css";

const MostPopular = ({ sectionRef }) => {
   // const { allEvents } = useSelector((s) => s.events)
   const orden = events
   // CUANDO NO ME PONGAN LINKS DE GOOGLE MEET EN LOS BANNERS, events PASARA A SER allEvents

   orden.sort((a, b) => {
      if (a.views < b.views) {
         return 1
      } else if (a.views > b.views) {
         return -1
      } else {
         return 0
      }
   })

   return (
      <div className={style.container} ref={sectionRef}>
         <h2><b>- Eventos Recomendados -</b></h2> <br />
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
               pauseOnMouseEnter: true
            }}
            coverflowEffect={{
               rotate: 0,
               stretch: 0,
               depth: 100,
               modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
               clickable: true,
            }}

            className="swiper_container"
         >

            <SwiperSlide>
               <Link to={`/detail/${orden[0].eventID}`}>
                  <button className={style.buttonInfo}>{'-> Mas informacion aqui <-'}</button>
               </Link>
               <img src={orden[0].bannerImage} alt="image" className={style.image} />
            </SwiperSlide><br />
            <SwiperSlide>
               <Link to={`/detail/${orden[1].eventID}`}>
                  <button className={style.buttonInfo}>{'-> Mas informacion aqui <-'}</button>
               </Link>
               <img src={orden[1].bannerImage} alt="image" className={style.image} />
            </SwiperSlide><br />
            <SwiperSlide>
               <Link to={`/detail/${orden[2].eventID}`}>
                  <button className={style.buttonInfo}>{'-> Mas informacion aqui <-'}</button>
               </Link>
               <img src={orden[2].bannerImage} alt="image" className={style.image} />
            </SwiperSlide> <br />
            <div className="slider-controler">
               <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline" />
               </div>
               <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline" />
               </div>
               <div className="swiper-pagination" />
            </div>
         </Swiper> <br />
      </div>
   )
}

export default MostPopular