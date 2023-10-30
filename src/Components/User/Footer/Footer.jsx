//Guada

//import { useState } from 'react-redux'
import style from "./Footer.module.css"
//GET - Trae la info del back 

const Footer = () => {

    const data = {
        address: '123 Calle Principal',
        phone: '555-1234',
        email: 'contacto@example.com',
        businessHours: '9:00 AM - 5:00 PM',
        dataPolicy: 'Nuestra política de datos...',
    }

    return(
        <div className={style.footerContainer}>
            <h1>Contacto</h1>
            <p>Dirección: {data.address}</p>
            <p>Teléfono: {data.phone}</p>
            <p>Email: {data.email}</p>
            <p>Horario de atención: {data.businessHours}</p>
            <p>Política de datos: {data.dataPolicy}</p>
        </div>
    )

}

export default Footer;