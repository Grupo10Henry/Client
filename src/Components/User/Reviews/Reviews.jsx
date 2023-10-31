import React, { useState } from 'react';
import style from "./Reviews.module.css";
import { FaStar, FaStarHalf, FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Reviews = () => {
    const reviews = [
    {
        name: "Agustina",
        puntuacion: 3,
        texto: "Buen funcionamiento del sitio pero el correo se demoró",
    },
    {
        name: "Martin",
        puntuacion: 5,
        texto: "Excelente página",
    },
    {
        name: "Guada",
        puntuacion: 4,
        texto: "Contestaron mis dudas rápidamente",
    },
    {
        name: "Guillermo",
        puntuacion: 1,
        texto: "No estoy conforme con el servicio",
    }
    ];

    const promedio =
    reviews.reduce((total, review) => total + review.puntuacion, 0) /
    reviews.length;

    const renderEstrellas = (puntuacion) => {
        const estrellas = [];
        const entero = Math.floor(puntuacion);
        for (let i = 0; i < entero; i++) {
            estrellas.push(<FaStar key={i} className={style.Star} />);
        }
        if (puntuacion % 1 !== 0) {
            estrellas.push(<FaStarHalf key="half" className={style.Star} />);
        }
        return estrellas;
    };

    const [startIndex, setStartIndex] = useState(0);

    const nextReviews = () => {
        setStartIndex((prevIndex) => prevIndex + 3);
    };

    const prevReviews = () => {
        setStartIndex((prevIndex) => Math.max(0, prevIndex - 3));
    };

    const visibleReviews = reviews.slice(startIndex, startIndex + 3);

    return (
        <div className={style.reviews}>
            <div className={style.ReviewPromedio}>
                <p>{promedio.toFixed(1)}</p>
                <div className={style.StarContainer}>
                    {renderEstrellas(promedio)}
                </div>
                <p>({reviews.length})</p>
            </div>
            <div className={style.ReviewContainer}>
                {visibleReviews.map((review) => (
                    <div key={review.name} className={style.Review}>
                        <h1>{review.name}</h1>
                        <div className={style.StarContainer}>
                            {renderEstrellas(review.puntuacion)}
                        </div>
                        <p>{review.texto}</p>
                    </div>
                ))}
            <div>
                <button onClick={prevReviews} className={`${style.prev} ${style.carouselButton}`}><FaChevronLeft /></button>
                <button onClick={nextReviews} className={`${style.next} ${style.carouselButton}`}><FaChevronRight /></button>
            </div>
        </div>
    </div>
);
};

export default Reviews;
