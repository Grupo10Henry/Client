import React from "react";
import styles from "./Loader.module.css";
import logo from "../../../assets/logo_mi_butaca_color.svg";

const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
            <img src={logo} alt="Mi butaca" className={styles.logo}/>
            <br />
        Cargando ...
      <div className={styles.loader}></div>
      </div>
    );
    }

export default Loader;