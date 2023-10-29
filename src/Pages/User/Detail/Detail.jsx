import React from "react";
import styles from "./Detail.module.css";

const Detail = () => {
  return (
    <>
      <div className={styles.ContainerGlobal}>
        <div className={styles.ContainerBanner}>
          <p>Banner del Evento</p>
          <img
            src="URL_DE_LA_IMAGEN_DEL_BANNER"
            alt="Nombre del Evento"
          />
        </div>
        <div className={styles.ContainerLeftColumn}>
          <div className={styles.ContainerNameDescription}>
            <h1>Nombre del Evento</h1>
            <p>Descripción del evento aquí...</p>
          </div>
          <div className={styles.ContainerAddress}>
            <h3>Lugar: Nombre del Lugar</h3>
            <h3>Dirección: Dirección del Lugar</h3>
            <h4>Capacidad Total: 1000</h4>
          </div>
        </div>
        <div className={styles.ContainerRightColumn}>
          <div className={styles.ContainerEventDate}>
            <h3>Fecha: 31 de Diciembre de 2023</h3>
            <h2>Hora: 20:00:00</h2>
            <h2>Sectores:</h2>
            <div className={styles.ContainerPrices}>
              <p>Sector 1</p>
              <p>$50</p>
            </div>
            <div className={styles.ContainerPrices}>
              <p>Sector 2</p>
              <p>$40</p>
            </div>
            <div className={styles.ContainerPrices}>
              <p>Sector 3</p>
              <p>$30</p>
            </div>
          </div>
        </div>
        <div className={styles.ContainerGoogleMap}>
          <iframe
            src="URL_DEL_MAPA_DE_GOOGLE_MAPS"
            width="600"
            height="450"
            title="Google Maps"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Detail;
