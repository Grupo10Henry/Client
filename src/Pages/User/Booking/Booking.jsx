/* Juli >>>>>>>> */

import React from "react";
import styles from "./Booking.module.css";
import {useNavigate} from "react-router-dom";

const Booking = () => {

    const navigate = useNavigate();

    const handleOnClickcarrito = () => {
        navigate("/carrito");
    }

    
        return (
            <div className={styles.ContainerGral}>
                
                <h2>Reserva tu entrada</h2>
                <h1>Nombre del Evento</h1>
                <h3>Datos de los Sectores + Precio</h3>
                <img 
                src="https://www.edrawsoft.com/templates/images/cinema-seating-plan.png">

                </img>
                <button
                onClick={handleOnClickcarrito}
                >Agregar al carrito</button>  <button>Pagar ahora</button>
            </div>
        )
    }

export default Booking;