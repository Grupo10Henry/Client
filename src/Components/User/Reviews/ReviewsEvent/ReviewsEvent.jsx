//Guada

import React, { useState } from "react";
import style from "./ReviewsEvent.module.css"
import { IoStar, IoStarHalf } from "react-icons/io5";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ReviewsEvent = () => {

    //Recibe del usuario: rating - nombre de evento - foto de evento
    const reviews = [
        {
            rating:3,
            nameEvent:"Duki",
            imageEvent:"https://www.notadetapa.com/wp-content/uploads/2023/04/Duki.webp"
        },
        {
            rating:5,
            nameEvent:"Maria Becerra",
            imageEvent:"https://www.pronto.com.ar/u/fotografias/m/2021/7/9/f768x1-19757_19884_79.jpg"
        },
        {
            rating:3,
            nameEvent:"TINI",
            imageEvent:"https://pbs.twimg.com/media/FuznSlhXoAAsSEr.jpg"
        },
        {
            rating:4,
            nameEvent:"Emilia Mernes",
            imageEvent:"https://i.pinimg.com/736x/e5/95/8e/e5958e9621bf522e8fb25911d0e15fb6.jpg"
        },
        {
            rating:4,
            nameEvent:"Nicki Nicole",
            imageEvent:"https://marcelagodoyespectaculos.files.wordpress.com/2023/07/image-2.png"
        },
    ]


    //Muestra las estrellas según la calificación.
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        return (
            <>
                {[...Array(fullStars)].map((_, starIndex) => (
                    <IoStar key={starIndex} />
                ))}
                {hasHalfStar && <IoStarHalf />}
            </>
        );
    };

    return(
        <div className={style.Page}>
            <div className={style.reviewsEvent}>
                {reviews.map((review, index) => (
                    <div key={index} className={style.reviewEvent}>
                        <div className={style.imgEventContainer}>
                            <img
                            src={review.imageEvent}
                            alt={`Imagen de ${review.nameEvent}`}
                            className={style.eventImage}
                            />
                        </div>
                        <div className={style.infoEventContainer}>
                            <p>{review.nameEvent}</p>
                            <div className={style.reviewEventStars}>{renderStars(review.rating)}</div>
                        </div>
                        
                    </div>
                ))}
        </div>
        </div>

    )
}

export default ReviewsEvent

