import React from "react";
import styles from "./Detail.module.css";

const Detail = () => {
  return (
    <>
      <div className={styles.ContainerGlobal}>
        <div className={styles.ContainerBanner}>
          
          <img
            src="https://fcefyn.unc.edu.ar/media/images/Paula_Tecco.2e16d0ba.fill-1600x390-c100.jpg"
            alt="Nombre del Evento"
          />
        </div>
        <div className={styles.ContainerLeftColumn}>
          <div className={styles.ContainerNameDescription}>
            <h1>Paula tecco</h1>
            <p>Descripción del evento aquí...</p>
          </div>
          <div className={styles.ContainerAddress}>
            <h3>Lugar: Nombre del Lugar</h3>
            <h3>Dirección: Dirección del Lugar</h3>
            <h4>Capacidad Total: 1000 lugares</h4>
          </div>
        </div>
        <div className={styles.ContainerRightColumn}>
          <div className={styles.ContainerEventDate}>
            <h3>Fecha: 31 de Diciembre de 2023</h3>
            <h2>Hora: 20:00:00</h2>
            <h2>Sectores:</h2>
            <div className={styles.ContainerPrices}>
              <p>Sector 1</p>
              <p>$3000</p>
            </div>
            <div className={styles.ContainerPrices}>
              <p>Sector 2</p>
              <p>$4000</p>
            </div>
            <div className={styles.ContainerPrices}>
              <p>Sector 3</p>
              <p>$5000</p>
            </div>
          </div>
        </div>
        <div className={styles.ContainerGoogleMap}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0841572917016!2d-75.61104692530301!3d6.252641893735832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442857797212db%3A0x6f9b481bd11f7d8a!2sTres%20Grupo%20Creativo!5e0!3m2!1ses!2sar!4v1698754997511!5m2!1ses!2sar" 
        className={styles.iframe}
        ></iframe>
          {/*<iframe
            src="URL_DEL_MAPA_DE_GOOGLE_MAPS"
            width="600"
            height="450"
            title="Google Maps"
            allowFullScreen=""
            loading="lazy"
  ></iframe>*/}
        </div>
      </div>
    </>
  );
};

export default Detail;
