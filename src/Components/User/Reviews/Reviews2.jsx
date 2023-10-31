import React, { useState } from "react";
import style from "./Reviews2.module.css";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Reviews2 = () => {
    const comments = [
    "No recomendaría este servicio. Experimenté dificultades significativas.",
    "No quedé completamente satisfecho con el servicio. Algunos problemas a mejorar.",
    "La experiencia fue promedio. Ni buena ni mala.",
    "Me siento satisfecho con el servicio. Cumple con mis expectativas.",
    "El sitio web funciona de manera excelente. Fácil de usar y muy útil.",
    ];

    const reviews = [
    {
        name: "Guadalupe",
        lastName: "Redondo",
        date: new Date(2023, 2, 14),
        rating: 4
    },
    {
        name: "Belén",
        lastName: "Gonzales",
        date: new Date(2023, 5, 21),
        rating: 3
    },
    {
        name: "Carlos",
        lastName: "Marinez",
        date: new Date(2023, 8, 9),
        rating: 5
    },
    {
        name: "Nicolas",
        lastName: "Perez",
        date: new Date(2023, 1, 5),
        rating: 5
    },
    {
        name: "Guillermo",
        lastName: "Román",
        date: new Date(2023, 10, 3),
        rating: 2
    },
    {
        name: "Juan",
        lastName: "Gomez",
        date: new Date(2023, 9, 6),
        rating: 4
    },
    {
        name: "Sofia",
        lastName: "Aguirre",
        date: new Date(2023, 5, 2),
        rating: 3
    }
    ];

    const reviewsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };


    const averageRating = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;

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
        <div >
        <div className={style.average}>
            <p>{averageRating.toFixed(1)}</p>
            <div className={style.stars}>{renderStars(averageRating)}</div>
            <p>({reviews.length})</p>
        </div>

        <div className={style.Review}>
        <div className={style.btnReviews}>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    <FaChevronLeft />
                </button>
            </div>
            <div className={style.ReviewContainer2}>
                {currentReviews.map((review, index) => (
                    <div key={index} className={style.review2}>
                        <h3>
                        <span>{review.name} {review.lastName}</span> - {review.date.getDate()}/{review.date.getMonth() + 1}/{review.date.getFullYear()}
                        </h3>
                        <div className={style.stars}>
                            {[...Array(review.rating)].map((_, starIndex) => (
                            <IoStar key={starIndex} />
                            ))}
                        </div>
                        <p>{comments[review.rating - 1]}</p>
                    </div>
                ))}
            </div>
            <div className={style.btnReviews}>
                <button onClick={handleNextPage} disabled={indexOfLastReview >= reviews.length}>
                    <FaChevronRight />
                </button>
            </div>
        </div>




        </div>
    );
};

export default Reviews2;


