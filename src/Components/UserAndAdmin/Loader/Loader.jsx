import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={styles.loaderContainer}>
        Cargando ...
      <div className={styles.loader}></div>
      </div>
    );
    }

export default Loader;