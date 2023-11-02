//Guada

//import { useState } from 'react-redux'
import style from "./Footer.module.css"
import { FaEnvelope} from "react-icons/fa6"; //EMAIL
import { IoCall, IoLocationSharp} from "react-icons/io5"; //TEL UBI
import { BsLinkedin, BsFacebook, BsWhatsapp, BsInstagram} from "react-icons/bs"; //LINKEDIN FACE
import { IoLogoWhatsapp } from "react-icons/io"; //WPP
//GET - Trae la info del back 
import logo1 from "../../../assets/logo_tres__blanco_720-1024x689.png"

const Footer = () => {

    const data = {
        address: 'Calle 44 #90a - 43, La América. Medellín - Colombia',
        phone: 'Colombia: (604) 500 5640',
        email: 'info@trescreativo.com',
        wpp: 'Colombia: 302 2360759',
    }

    return(
        <div>
            <div className={style.footerContainer}>
                <div className={style.mapaContainer}>
                    <h1>Donde encontrarnos?</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.0841564857737!2d-75.608472!3d6.252642!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442857797212db%3A0x6f9b481bd11f7d8a!2sTres%20Grupo%20Creativo!5e0!3m2!1ses-419!2sus!4v1698759264797!5m2!1ses-419!2sus" className={style.mapa}></iframe>
                </div>
                <div className={style.infoContainer}>
                    <h2>Contacto</h2>
                    <p><IoLocationSharp/> {data.address}</p>
                    <p><IoCall/> {data.phone}</p>
                    <p><IoLogoWhatsapp/> {data.wpp}</p>
                    <p><FaEnvelope/> {data.email}</p>
                    <div className={style.footerRedes}>
                        <p><BsFacebook/></p>
                        <p><BsWhatsapp/></p> 
                        <p><BsLinkedin/></p>
                        <p><BsInstagram/></p> 
                    </div>
                </div>
            </div>
            <div className={style.footer2}>
                <img src={logo1} className={style.footer2Logo}/>
                <div className={style.footer2Info}>
                    <p>Copyright © 2023 Tres || <a href="https://trescreativo.com/politica-de-privacidad/" target="_blank" rel="noopener noreferrer">Política de Privacidad</a></p>
                    <p>Developed By Tres Creativo</p>
                </div>
            </div>
        </div>
    )

}

export default Footer;