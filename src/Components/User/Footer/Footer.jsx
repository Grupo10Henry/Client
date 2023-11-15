//Guada

import style from "./Footer.module.css"
import { FaEnvelope } from "react-icons/fa6" //EMAIL
import { IoCall, IoLocationSharp } from "react-icons/io5" //TEL UBI
import { BsLinkedin, BsFacebook, BsWhatsapp, BsInstagram } from "react-icons/bs" //LINKEDIN FACE
import { IoLogoWhatsapp } from "react-icons/io" //WPP
import { AiFillClockCircle } from "react-icons/ai"
//GET - Trae la info del back
import logo1 from "../../../assets/logo_tres__blanco_720-1024x689.png"
import { useDispatch, useSelector } from "react-redux"
import { getContactData } from "../../../redux/footerSlice"
import { useEffect, useState } from "react"
import { instance } from "../../../axios/config"
import { Link } from "react-router-dom"

const Footer = () => {
  const { contactData } = useSelector((s) => s.footer)
  const dispatch = useDispatch()

  const getFooterInfo = async () => {
    try {
      const { data } = await instance.get(`/companyInfo/`) // instance.get(`/companyInfo/`) || axios.get(`http://localhost:3001//companyInfo/`)
      //   console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFooterInfo().then((data) => {
      dispatch(getContactData(data))
    })
  }, [])

  // console.log(contactData);

  return (
    <div>
      <div className={style.footerContainer}>
        <div className={style.mapaContainer}>
          <h1>¿Dónde encontrarnos?</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3966.0841564857737!2d-75.608472!3d6.252642!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442857797212db%3A0x6f9b481bd11f7d8a!2sTres%20Grupo%20Creativo!5e0!3m2!1ses-419!2sus!4v1698759264797!5m2!1ses-419!2sus"
            className={style.mapa}
          ></iframe>
        </div>
        {/* {contactData > 0 ? ( */}
        <div className={style.infoContainer}>
          <h2>Contacto</h2>
          <p>
            <IoLocationSharp /> {contactData?.[0]?.adress}
          </p>
          <p>
            <IoCall /> {contactData?.[0]?.phone}
          </p>
          <p>
            <IoLogoWhatsapp /> {contactData?.[0]?.dataPolicy}
          </p>
          <p>
            <FaEnvelope /> {contactData?.[0]?.email}
          </p>
          <p>
            <AiFillClockCircle /> {contactData?.[0]?.businessHours}
          </p>
          <div className={style.footerRedes}>
            <a
              href="https://www.facebook.com/trescreativo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </a>
            <a
              href="https://wa.link/19cdpo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/company/85616218/admin/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://instagram.com/tresgrupocreativo?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className={style.footer2}>
        <img src={logo1} className={style.footer2Logo} />
        <div className={style.footer2Info}>
          <p>
            Copyright © 2023 Tres ||{" "}
            <a
              href="https://trescreativo.com/politica-de-privacidad/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de Privacidad
            </a>
          </p>
          <Link to="/desarrolladores" className={style.linkDesarrolladores}>
            Desarrolladores
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
