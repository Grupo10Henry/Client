import React from "react";
import logo from "../../../assets/logo_mi_butaca_color.svg";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import styles from "./mercadopago.module.css";

const MercadoPagoExitoso = () => {

    const userName = useSelector((state) => state.user.userInfo.name);


    return (
        <div className={styles.Page}>
        <div className={styles.ContainerGral}>
            <img className={styles.logo} src={logo} alt="Mi Butaca" />
        <h1>Muchas Gracias por tu compra 
            <span className={styles.Name}>{" "} {userName}</span>  ! </h1>
        <h3>Ya puedes ver, descargar e imprimir tus entradas desde la sección {" "} </h3>
        <h3> 
            <span className={styles.Micuenta}> <Link to="/micuenta/:id"> Mi Cuenta </Link> </span>
           </h3>
                  </div>
        </div>
    );
    }

export default MercadoPagoExitoso;