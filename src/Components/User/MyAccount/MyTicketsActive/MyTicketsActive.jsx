// Luissssss
import { NavLink, useParams } from 'react-router-dom';
import SetReview from '../SetReview/SetReview';
import styles from './MyTicketsActive.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MyTicketsActive() {

    const params = useParams();

    const [paystub, setPaystub] = useState();
    const [seat, setSeat] = useState();

    const getPaystub = async () => {
    try {
        const {data} = await axios.get(`http://localhost:3001/paystub/${params.id}`)
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
    };

    const getSeat = async () => {
        try {
            const {data} = await axios.get(`http://localhost:3001/seat/user/${params.id}`)
            // console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
        };

    useEffect(() => {
        getPaystub().then((data) => {
            setPaystub(data)
        })
        getSeat().then((data) => {
            setSeat(data)
        })
    }, []
    );

    // console.log(paystub)
    // console.log(seat)

    return (
        <div className={styles.aTicketContainer}>
            <h1 className={styles.activeTicketsTitle}>Entradas activas</h1>
            <div className={styles.aTicketInfoContainer}>
            <div>
                <div>
                    <p className={styles.aTicketInfo}>ID de compra: ASXC6D</p>
                    <p className={styles.aTicketInfo}>Karol G</p>
                    <p className={styles.aTicketInfo}>2 x PLATEA</p>
                    <p className={styles.aTicketInfo}>25-10-2023 - 7:00 PM</p>
                    <p className={styles.aTicketInfo}>Estadio Atanasio Girardot</p>
                </div>
                <div>
                    <NavLink to='/ticket/1'>
                    <button className={styles.aTicketButton}>Ver</button>
                    </NavLink>
                    <button className={styles.aTicketButton}>Imprimir</button>
                    <button className={styles.aTicketButton}>Descargar</button>
                </div>
            </div>
            <div>
                <SetReview />
                {/* Poner este componente como condicional, si el paystub no tiene review. De lo contrario, poner "¡Gracias por calificar tu experiencia!" */}
            </div>
        </div>
            </div>
    )
}