import React from 'react';
import styles from './Ticket.module.css';
import QRImage from "../../../../assets/qrRandom.jpg";
import logo from "../../../../assets/logo_mi_butaca_blanco.svg"

const Ticket = () => {
    const infoTicket = {
        name: "Milagros",
        lastName: "Martinez",
        issueDate: "27 oct 2024",
        eventName: "Coldplay",
        price: "50.000",
        phone: 155188569,
        email: "milagros_martinez@gmail.com",
        paymentNum: "4653453454",
        locationName: "Teatro Nacional",
        adressLocation: "calle 22 n.° 5-62",
        sector: "platea",
        seatLocation: "1-A",
        QR: QRImage,
        time:"22:00 pm"
    };

    return (
        <div className={styles.ticket}>
            <div className={styles.ticketContainer}>
                <div className={styles.mainInfo}>
                    <div className={styles.titles}>
                    <h2>{infoTicket.eventName}</h2>
                    <div className={styles.logo}>
                        <img src={logo} alt="Logo Mi Butaca" />
                    </div>
                    </div>
                        
                        <h3>{infoTicket.locationName}</h3>


                    <div className={styles.subtitles}>
                        <h4>Fecha</h4>
                        <h4>Horario</h4>
                    </div>
                    <div className={styles.time}>
                        <p>{infoTicket.issueDate}</p>
                        <p>{infoTicket.time}</p>
                    </div>
                    <div className={styles.subtitles}>
                        <h4>Sector</h4>
                        <h4>Asiento</h4>
                    </div>
                    <div className={styles.location}>
                        <p>{infoTicket.sector}</p>
                        <p>{infoTicket.seatLocation}</p> 
                    </div>
                </div>
                <div className={styles.info}>
                    <p>Nombre: {infoTicket.name} {infoTicket.lastName}</p>
                    <p>Teléfono: {infoTicket.phone}</p>
                    <p>Email: {infoTicket.email}</p>
                    <p>Dirección: {infoTicket.adressLocation}</p>
                </div>

                <div className={styles.lastInfo}>
                        <div className={styles.subtitles}>
                            <h4>ID compra</h4>
                            <h4>Precio</h4>
                        </div>
                        <div className={styles.idPrice}>
                        <p>{infoTicket.paymentNum}</p>
                        <p>${infoTicket.price}</p>
                        </div>

                </div>
                <div className={styles.qrTicket}>
                    <div className={styles.qrContainer}>
                    <img src={infoTicket.QR} alt="Código QR" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Ticket;
