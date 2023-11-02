//Guada

import React, { useState } from "react";
import style from "./ReviewsUser.module.css"
import { IoStar, IoStarHalf } from "react-icons/io5";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const ReviewsUser = () => {

    //Recibe del admin: respuestas sugeridas
    const comments = [
    "No recomendaría este evento. Experimenté dificultades significativas.",
    "No estoy satisfecho, algunos problemas a mejorar.",
    "La experiencia fue promedio. Ni buena ni mala.",
    "Fue un gran evento, aunque con pequeños inconvenientes.",
    "Muy agradable. Disfruté cada parte del evento y lo recomendaría sin dudarlo.",
    ];

    //Recibe del usuario: nombre - apellido - fecha - rating - nombre de evento
    const reviews = [
    {
        name: "Micaela",
        lastName: "Bellone",
        date: new Date(2023, 2, 14),
        rating: 4,
        event: "Karol G"
    },
    {
        name: "Belén",
        lastName: "Gonzales",
        date: new Date(2023, 5, 21),
        rating: 3,
        event: "Shakira"
    },
    {
        name: "Carlos",
        lastName: "Marinez",
        date: new Date(2023, 8, 9),
        rating: 5,
        event: "Maria Becerra"
    },
    {
        name: "Nicolas",
        lastName: "Perez",
        date: new Date(2023, 1, 5),
        rating: 5,
        event: "TINI"
    },
    {
        name: "Guillermo",
        lastName: "Román",
        date: new Date(2023, 10, 3),
        rating: 2,
        event: "Maluma"
    },
    {
        name: "Juan",
        lastName: "Gomez",
        date: new Date(2023, 9, 6),
        rating: 4,
        event: "Luis Fonsi"
    },
    {
        name: "Sofia",
        lastName: "Aguirre",
        date: new Date(2023, 5, 2),
        rating: 3,
        event: "Karol G"
    }
    ];

    //Lógica de paginación
    const reviewsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    //Maneja el evento de pasar a la siguiente página de revisiones.
    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    //Maneja el evento de retroceder a la página anterior de revisiones.
    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    //Calcula y devuelve el promedio de las calificaciones de las revisiones.
    const averageRating = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;

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

    return (
        <div>
            
            {/* Promedio - total de reviews */}
            <div className={style.averageRating}>    
                <p>{averageRating.toFixed(1)}</p>
                <div className={style.reviewStars}>{renderStars(averageRating)}</div>
                <p>({reviews.length})</p>
            </div>

            {/* Reviews */}
            <div className={style.reviewsUser}>

                {/* Btn izquierda */}
                <div className={style.btnReviewsUser}>
                    <button onClick={handlePrevPage} disabled={currentPage === 1}>
                        <FaChevronLeft />
                    </button>
                </div>

                {/* Review container */}
                <div className={style.reviewUserContainer}>
                    {currentReviews.map((review, index) => (
                        //Review
                        <div key={index} className={style.reviewUser}>
                            <h3>
                                <span>{review.name} {review.lastName}</span> - {review.date.getDate()}/{review.date.getMonth() + 1}/{review.date.getFullYear()}
                            </h3>
                            {/* Estrellas usuario */}
                            <div className={style.reviewStars}>
                                {[...Array(review.rating)].map((_, starIndex) => (
                                    <IoStar key={starIndex}/>
                                ))}
                            </div>
                            {/* Evento - comentario */}
                            <div className={style.reviewUserEvent}>
                                {review.event}
                            </div>
                            <p>{comments[review.rating - 1]}</p>
                        </div>
                    ))}
                </div>

                {/* Btn derecha */}
                <div className={style.btnReviewsUser}>
                    <button onClick={handleNextPage} disabled={indexOfLastReview >= reviews.length}>
                        <FaChevronRight />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ReviewsUser;


