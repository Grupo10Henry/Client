// Luiiisssss
import { useState } from 'react';
import styles from './SetReview.module.css';

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
    console.log(rating);

    const handleClick1 = () => {
        setRating(1)
    };

    const handleClick2 = () => {
        setRating(2)
    };

    const handleClick3 = () => {
        setRating(3)
    };

    const handleClick4 = () => {
        setRating(4)
    };

    const handleClick5 = () => {
        setRating(5)
    };

    return (
        <div>
        <h1 className={styles.abc}>Califica tu experiencia</h1>
        <div>
        {rating > 0 ? <button onClick={handleClick1}>X</button> : <button onClick={handleClick1}>O</button> }
        {rating > 1 ? <button onClick={handleClick2}>X</button> : <button onClick={handleClick2}>O</button> }
        {rating > 2 ? <button onClick={handleClick3}>X</button> : <button onClick={handleClick3}>O</button> }
        {rating > 3 ? <button onClick={handleClick4}>X</button> : <button onClick={handleClick4}>O</button> }
        {rating > 4 ? <button onClick={handleClick5}>X</button> : <button onClick={handleClick5}>O</button> }
        </div>
        <div>
            <select>
                <option>-- Selecciona una opción --</option>
            {rating > 3 ? goodReviews.map((rev) => (
                <option>{rev}</option>
            )) : badReviews.map((rev) => (
                <option>{rev}</option>
            ))}
            </select>
        </div>
        </div>
    )
}