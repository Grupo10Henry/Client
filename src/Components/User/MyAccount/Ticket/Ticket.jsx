import React, { useEffect, useState } from 'react';
import QRImage from "../../../../assets/qrRandom.jpg";
import logo from "../../../../assets/logo_mi_butaca_color.svg"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import html2pdf from 'html2pdf.js';
import styles from './Ticket.module.css';
import { instance } from '../../../../axios/config';

const Ticket = () => {

    const params = useParams()
    const [info, setInfo] = useState();

    const getSeatById = async () => {
    try {
        const {data} = await instance.get(`/seat/details/${params.id}`) // axios.get(`http://localhost:3001/seat/details/${params.id}`) | instance.get(`/seat/details/${params.id}`)
        return data
    } catch (error) {
        console.log(error)
    }
    };

    useEffect(() => {
        getSeatById().then((data) => {
            setInfo(data)
        })
    }, []
    );

    console.log(info)


    const handleSaveAsPDF = () => {
        const element = document.getElementById('Ticket');
        const opt = {
            margin: 0,
            filename: `${info?.paystub.paymentNum}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'px', format: 'a4', orientation: 'portrait' },
          };
      
          html2pdf().from(element).set(opt).save();
    };
      
    const handlePrint = () => {
          window.print();
    };

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
        <>
        <div className={styles.btnTicket}>
            <button onClick={handleSaveAsPDF} >Descargar</button>
            <button onClick={handlePrint}>Imprimir</button>
        </div>
        <div id="Ticket" className={styles.ticket}>
            <div className={styles.ticketContainer}>
                <div className={styles.mainInfo}>
                    <div className={styles.titles}>
                    <h2>{info?.event.name}</h2>
                    <div className={styles.logo}>
                        <img src={logo} alt="Logo Mi Butaca" />
                    </div>
                    </div>
                        
                        <h3>{info?.event?.locationName}</h3>
                        <h4>{info?.event?.adressLocation}</h4>

                    <div className={styles.subtitles}>
                        <h4>Fecha</h4>
                        <h4>Horario</h4>
                    </div>
                    <div className={styles.time}>
                        <p>{info?.event?.date}</p>
                        <p>{info?.event?.time}</p>
                    </div>
                    <div className={styles.subtitles}>
                        <h4>Sector</h4>
                        <h4>Asiento</h4>
                    </div>
                    <div className={styles.location}>
                        <p>{info?.seat?.sector}</p>
                        <p>{info?.seat?.seatLocation}</p> 
                    </div>
                </div>
                <div className={styles.info}>
                    <p>Nombre: {info?.user?.name} {info?.user?.lastName}</p>
                    <p>Teléfono: {info?.user?.phone}</p>
                    <p>Email: {info?.user?.email}</p>
                    
                </div>

                <div className={styles.lastInfo}>
                        <div className={styles.subtitles}>
                            <h4>ID compra</h4>
                            <h4>Precio</h4>
                        </div>
                        <div className={styles.idPrice}>
                        <p>{info?.paystub?.paymentNum}</p>
                        <p>${info?.seat?.price.toLocaleString()}</p>
                        </div>

                </div>
                <div className={styles.qrTicket}>
                    {/* <div className={styles.qrContainer}>
                    <img src={infoTicket.QR} alt="Código QR" />
                    </div> */}
                </div>
            </div>
        </div>
        </>
    );
}

export default Ticket;
