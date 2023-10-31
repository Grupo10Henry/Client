import React from "react";
import styles from "./BookingButton.module.css";
import { useNavigate } from "react-router-dom";


function BookingButton() {
const navigate = useNavigate();

const handleClick = () => {
    navigate("/reserva");
}

    return (
        <div>
        <button
            className={styles.bookingButton}
            onClick={handleClick}

        >Reservar ahora!</button>
        </div>
    );
    }

export default BookingButton;