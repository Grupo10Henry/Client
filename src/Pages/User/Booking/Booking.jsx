/* Juli >>>>>>>> */

import React, { useState, useEffect } from "react";
import styles from "./Booking.module.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const Booking = () => {
  const { id } = useParams();

  const { isDonation } = new URLSearchParams(window.location.search);

  const [sectorPrices, setSectorPrices] = useState([]);

  const [eventDetails, setEventDetails] = useState({
    name: "",
    date: "",
    time: "",
    locationName: "",
    adressLocation: "",
    image: "",
    capacity: "",
    mapLocation: "",
    planImage: "",
    views: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3001/event/${id}`)
      .then((response) => {
        if (response.data) {
          setEventDetails(response.data);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los detalles del evento:", error);
      });
  }, [id]);

  const navigate = useNavigate();

  const originalDate = eventDetails.date;
  const parts = originalDate.split("-");

  if (parts.length === 3) {
    const newDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    <h1>{newDate}</h1>;
  } else {
    <h1>{eventDetails.date}</h1>;
  }

  const handleOnClickcarrito = () => {
    navigate("/carrito");
  };

  return (
    <div className={styles.ContainerGlobal}>
      <div className={styles.ContainerUp}>
        <div className={styles.ContainerTitulo}>
          <h2>Reserva tu entrada!</h2>
          <h1>{eventDetails.name}</h1>
          <div className={styles.ContainerDate}>
            <h3>
              {" "}
              📆
              {eventDetails.date.split("-").reverse().join("-")}
              {" | "}🕒
              {eventDetails.time.split(":").slice(0, 2).join(":")} hs.{" "}
            </h3>
          </div>

          <p>Capacidad total: {eventDetails.capacity} personas.</p>
          <p>
            {eventDetails.name} ha sido visto {eventDetails.views} veces.{" "}
          </p>
          <div className={styles.ContainerLocation}>
            <p>
              Lugar: {eventDetails.locationName} | Dirección:{" "}
              {eventDetails.adressLocation}{" "}
            </p>
          </div>
          <div className={styles.ContainerGoogleMap}>
            <iframe
              src={eventDetails.mapLocation}
              className={styles.iframe}
            ></iframe>
          </div>
        </div>

        <div id="imageContainer" className={styles.ContainerBanner}>
          <img
            id="imagenBanner"
            src={eventDetails.image}
            alt={eventDetails.name}
          />
        </div>
      </div>
      <div className={styles.ContainerPlan}>
        <div className={styles.ContainerSectores}>
          <h3>Datos de los Sectores + Precio</h3>
        </div>
        <div className={styles.ContainerPlanoAsientos}>
          <img src={eventDetails.planImage} />
        </div>
      </div>
      <button onClick={handleOnClickcarrito}>Agregar al carrito</button>{" "}
      <button>Pagar ahora</button>
    </div>
  );
};

export default Booking;
