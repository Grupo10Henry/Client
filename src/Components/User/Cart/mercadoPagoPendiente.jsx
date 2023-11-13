import React from "react";
import logo from "../../../assets/logo_mi_butaca_color.svg";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import styles from "./mercadopago.module.css";

const MercadoPagoPendiente = () => {
    const userName = useSelector((state) => state.user.userInfo.name);


    return (
        <div className={styles.Page}>
        <div className={styles.ContainerGral}>
            <img className={styles.logo} src={logo} alt="Mi Butaca" />
        <h1>
            <span className={styles.Name}>{userName}</span>
            {", "} el proceso de pago está pendiente. </h1> 
        <h3>Espera la confirmación por email por favor. </h3>
        <h3> Ir a: {"   "}
            <span className={styles.Micuenta}> <Link to="/micuenta/:id"> Mi Cuenta </Link> </span>{" | "}
            <span className={styles.Micuenta}> <Link to="/"> Inicio </Link> </span>
           </h3>
                  </div>
        </div>
    );
    }

export default MercadoPagoPendiente;