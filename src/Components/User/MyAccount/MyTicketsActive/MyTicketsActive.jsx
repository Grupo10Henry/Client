// Luissssss
import { NavLink, useParams } from 'react-router-dom';
import SetReview from '../SetReview/SetReview';
import styles from './MyTicketsActive.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function MyTicketsActive(props) {

    const {eventID, issueDate, paymentNum, paystubID, tickets} = props

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, '0');
    const currentDay = String(currentDate.getDate()).padStart(2, '0');
    const minDate = `${currentYear}-${currentMonth}-${currentDay}`;

    const params = useParams();
    const [seat, setSeat] = useState();
    const [event, setEvent] = useState();

    const getSeat = async () => {
        try {
            // const {data} = await axios.get(`http://localhost:3001/seat/user/${params.id}`)
            const {data} = await axios.get(`http://localhost:3001/seat/seats/${params.id}/${eventID}`)
            // console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
        };

    const getEvent = async () => {
    try {
        const {data} = await axios.get(`http://localhost:3001/event/${eventID}`)
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
    };

    useEffect(() => {
        getSeat().then((data) => {
            setSeat(data)
        })
        getEvent().then((data) => {
            setEvent(data)
        })
    }, []
    );

    // console.log(seat)
    // console.log(event)

    return (
        <div className={event?.date < minDate ? styles.aTicketContainer : styles.pTicketContainer}>
            <div className={styles.aTicketInfoContainer}>
            <div>
                <div>
                    {event?.date < minDate ? (
                    <p className={styles.aTicketInfo}>Estado: Activa</p>
                    ) : (
                    <p className={styles.aTicketInfo}>Estado: Inactiva</p>
                    )}
                    <p className={styles.aTicketInfo}>ID de compra: {paymentNum}</p>
                    <p className={styles.aTicketInfo}>{event?.name}</p>
                    {seat?.map((s) => (
                        <p key={s.seatID} className={styles.aTicketInfo}>{s.sector} | ${s.price.toLocaleString()} | {s.seatLocation} {event?.date < minDate ? (<NavLink to={`/ticket/${s.seatID}`}>
                        <button className={styles.aTicketButton}>Ver</button>
                        </NavLink>) : null}</p>
                    ))}
                    <p className={styles.aTicketInfo}>{event?.date} | {event?.time}</p>
                    <p className={styles.aTicketInfo}>{event?.locationName}</p>
                </div>
                {/* <div>
                    <NavLink to='/ticket/1'>
                    <button className={styles.aTicketButton}>Ver</button>
                    </NavLink>
                    <button className={styles.aTicketButton}>Imprimir</button>
                    <button className={styles.aTicketButton}>Descargar</button>
                </div> */}
            </div>
            <div>
                <SetReview
                eventID={eventID}
                />
                {/* Poner este componente como condicional, si el paystub no tiene review. De lo contrario, poner "¡Gracias por calificar tu experiencia!" */}
            </div>
        </div>
            </div>
    )
}