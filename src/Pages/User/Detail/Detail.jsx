/* Juli >>>>>>>> */

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectEventID } from "../../../redux/eventIDSlice";
import { useSelector } from "react-redux";
import {instance} from "../../../axios/config";
import styles from "./Detail.module.css";
import BookingButton from "./BookingButton";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../Components/UserAndAdmin/Loader/Loader";

const Detail = () => {
  const eventID = useSelector(selectEventID);
  const [isLoading, setIsLoading] = useState(true);
const navigate = useNavigate();

  const handleClick = () => {
    console.log("Sector Prices:", sectorPrices);
    navigate(`/reserva/${eventID}?isDonation=${isDonation}`, {
      state: { sectorPrices }
    });
  };

  const [isDonation, setIsDonation] = useState(false);

  const [sectorPrices, setSectorPrices] = useState([]);
  const dispatch = useDispatch();
  const [eventDetails, setEventDetails] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    locationName: "",
    adressLocation: "",
    mapLocation: "",
    bannerImage: "",
    capacity: "",
    views: "",
  });

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        /* traer de la ruta /seat/:eventID los sectores y precios. La respuesta es un array de arrays, que contiene [price, sector] */
        const response = await instance.get(
          `/seat/${eventID}`
        );
        if (response.data) {
          setSectorPrices(response.data);
          if(eventDetails.name ) {

            setIsLoading(false);
          }
        }
      } catch (error) {
        console.error("Error al obtener los sectores y precios:", error);
      }
    };

    const fetchEventDetails = async () => {
      try {
        const response = await instance.get(
          `/event/${eventID}`
        );

        if (response.data) {
          const {
            name,
            description,
            date,
            time,
            locationName,
            adressLocation,
            mapLocation,
            bannerImage,
            capacity,
            planImage,
            views,
          } = response.data;
          

          setEventDetails({
            name,
            description,
            date,
            time,
            locationName,
            adressLocation,
            mapLocation,
            bannerImage,
            capacity,
            planImage,
            views,
          });

          setIsDonation(response.data.isDonation);
          if (sectorPrices.length > 0) {
          setIsLoading(false);
          }
        }
      } catch (error) {
        console.error("Error al obtener los detalles del evento:", error);
      }
    };

    fetchEventData();

    fetchEventDetails();
  }, [eventID, sectorPrices, eventDetails]);

  const originalDate = eventDetails.date;
  const parts = originalDate.split("-");

  if (parts.length === 3) {
    const newDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    <h1>{newDate}</h1>;
  } else {
    <h1>{eventDetails.date}</h1>;
  }

  // counter down timer

  const targetDateTime = new Date(
    `${eventDetails.date} ${eventDetails.time}`
  ).getTime();
  const currentDate = new Date().getTime();
  const timeDifference = targetDateTime - currentDate;

  const [countdown, setCountdown] = useState({
    days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ),
    minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeDifference = targetDateTime - new Date().getTime();
      if (newTimeDifference < 0) {
        clearInterval(interval);
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setCountdown({
          days: Math.floor(newTimeDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (newTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (newTimeDifference % (1000 * 60 * 60)) / (1000 * 60)
          ),
          seconds: Math.floor((newTimeDifference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateTime]);

  return (
    <>
      <div className={styles.ContainerGlobal}>
      {isLoading ? ( // Verifica si isLoading es verdadero
          <Loader />
          ) : (
      <>
        <div className={styles.ContainerBanner}>
          <img src={eventDetails.bannerImage} alt={eventDetails.name} />
        </div>
        <div className={styles.ContainerLeftColumn}>
          <div className={styles.ContainerNameDescription}>
            <h1>{eventDetails.name} </h1>
            <p>{eventDetails.description}</p>
            <br />
          </div>
          <div className={styles.ContainerAddress}>
            <h3>Lugar: {eventDetails.locationName}</h3>
            <h3>Dirección: {eventDetails.adressLocation}</h3>
            <h4>Capacidad Total: {eventDetails.capacity} personas. </h4>
          </div>
          <br />
          <h5>A {eventDetails.views} usuarios les interesa este evento.</h5>
        </div>

        <div className={styles.ContainerRightColumn}>
          <div className={styles.ContainerEventDate}>
            <br />
            <h2> 📆 {eventDetails.date.split("-").reverse().join("-")}</h2>
            <h2>🕒 {eventDetails.time.split(":").slice(0, 2).join(":")} hs.</h2>
            <br />
            <div className={styles.divCount}>
              <p>Restan...</p>
              <div className={styles.countdownContainer}>
                <div>
                  <h1>{countdown.days}</h1>
                  <p>días</p>
                </div>
                <div>
                  <h1>{countdown.hours}</h1>
                  <p>horas</p>
                </div>
                <div>
                  <h1>{countdown.minutes}</h1>
                  <p>minutos</p>
                </div>
                <div>
                  <h1>{countdown.seconds}</h1>
                  <p>segundos</p>
                </div>
              </div>
            </div>
            <br />
            {isDonation ? (
              <>
              <p>Ingreso con contribución voluntaria.</p>
              <button onClick={handleClick}>Ver sectores y Reservar</button>
              </>
            ) : (
              <>
            <h2>Sectores:</h2>
            {sectorPrices.map((sector) => (
              <div className={styles.ContainerPrices} key={sector[1]}>
                <p>{sector[1]}</p>
                <p>$ {sector[0]}</p>
              </div>
            ))}

            <button onClick={handleClick}>Ver sectores y Reservar</button>
            </>
            )}
          </div>
        </div>

        <div className={styles.ContainerGoogleMap}>
          <h3>Mapa de Ubicación {eventDetails.name}:</h3>
          <iframe
            src={eventDetails.mapLocation}
            className={styles.iframe}
          ></iframe>
        </div>
        <div className={styles.ContainerBookingButton}>
          <Link to={`/reserva/${eventID}`}>
          <BookingButton  />
          </Link>
        </div>
      </>
  
    )}
      </div>
    </>
  );
};

export default Detail;
