import React from "react";
import styles from "./BookingButton.module.css";
import { useNavigate } from "react-router-dom";


function BookingButton() {
const navigate = useNavigate();



    return (
        <div>
        <button
            className={styles.bookingButton}

        >Reservar ahora!</button>
        </div>
    );
    }

export default BookingButton;