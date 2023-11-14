// Luiiisssss
import { useState } from 'react';
import styles from './SetReview.module.css';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';

export default function SetReview () {

    const goodReviews = [
        'Muy buena oferta de eventos',
        'Muy fácil de utilizar la página y encontrar eventos',
        'Facilidad de pago de las entradas',
        'Muy buena organización del evento',
        'El evento se desarrolló con impecable puntualidad'
    ];

    const badReviews = [
        'Me gustaría una mayor oferta de eventos',
        'No es tan fácil utilizar la página y encontrar eventos',
        'Dificultad en el pago de las entradas',
        'Se podría mejorar la organización del evento',
        'El evento se desarrolló de forma impuntual'
    ];

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState();
    
    // console.log(rating);
    // console.log(review);

    const handleChange = (e) => {
        setReview(e.target.value)
    };

    return (
        <div className={styles.setReviewContainer}>
        <h1 className={styles.reviewTitle}>Califica tu experiencia</h1>
        <div className={styles.ratingContainer}>
        {rating > 0 ? <button onClick={() => {setRating(1)}}><AiFillStar className={styles.onStar} /></button> : <button onClick={() => {setRating(1)}}><AiOutlineStar className={styles.offStar} /></button> }
        {rating > 1 ? <button onClick={() => {setRating(2)}}><AiFillStar className={styles.onStar} /></button> : <button onClick={() => {setRating(2)}}><AiOutlineStar className={styles.offStar} /></button> }
        {rating > 2 ? <button onClick={() => {setRating(3)}}><AiFillStar className={styles.onStar} /></button> : <button onClick={() => {setRating(3)}}><AiOutlineStar className={styles.offStar} /></button> }
        {rating > 3 ? <button onClick={() => {setRating(4)}}><AiFillStar className={styles.onStar} /></button> : <button onClick={() => {setRating(4)}}><AiOutlineStar className={styles.offStar} /></button> }
        {rating > 4 ? <button onClick={() => {setRating(5)}}><AiFillStar className={styles.onStar} /></button> : <button onClick={() => {setRating(5)}}><AiOutlineStar className={styles.offStar} /></button> }
        </div>
        <div className={styles.reviewContainer}>
            <select className={styles.reviewOption} onChange={handleChange}>
                <option value="">-- Selecciona una opción --</option>
            {rating > 3 ? goodReviews.map((rev, index) => (
                <option key={`goodReview-${index}`}>{rev}</option>
            )) : badReviews.map((rev, index) => (
                <option key={`badReview-${index}`}>{rev}</option>
            ))}
            </select>
        </div>
        {rating && review ? <button className={styles.setReviewButton}>Enviar calificación</button>: null}
        </div>
    )
}