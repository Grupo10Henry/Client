/* Juli >>>>>>>> */

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
//import { getDetail } from "../../../redux/eventSlice";
//import { getSeat } from "../../../redux/seatSlice";
import axios from "axios";
import styles from "./Detail.module.css";

const Detail = ({ eventID }) => {
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
  });

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/seat?eventID=${eventID}`
        );

        if (response.data && response.data.length > 0) {
          const sectorData = response.data.reduce((result, seat) => {
            const { sector, price } = seat;
            if (!result[sector]) {
              result[sector] = price;
            }
            return result;
          }, {});

          const sectorPricesArray = Object.entries(sectorData).map(
            ([sector, price]) => ({
              sector,
              price,
            })
          );

          setSectorPrices(sectorPricesArray);
        }
      } catch (error) {
        console.error("Error al obtener los sectores y precios:", error);
      }
    };

    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/event?eventID=${eventID}`
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
          });
        }
      } catch (error) {
        console.error("Error al obtener los detalles del evento:", error);
      }
    };

    fetchEventData();
    fetchEventDetails();
  }, [eventID]);

  return (
    <>
      <div className={styles.ContainerGlobal}>
        
          <div className={styles.ContainerBanner}>
            <p>Banner del Evento</p>
            <img src={eventDetails.bannerImage} alt={eventDetails.name} />
          </div>
          <div className={styles.ContainerLeftColumn}>
            <div className={styles.ContainerNameDescription}>
              <h1>{eventDetails.name} </h1>
              <p>{eventDetails.description}</p>
            </div>
            <div className={styles.ContainerAddress}>
              <h3>Lugar: {eventDetails.locationName}</h3>
              <h3>Dirección: {eventDetails.adressLocation}</h3>
              <h4>Capacidad Total: {eventDetails.capacity}</h4>
            </div>
          </div>

          <div className={styles.ContainerRightColumn}>
            <div className={styles.ContainerEventDate}>
              <h3>Fecha: {eventDetails.date}</h3>
              <h2>Hora: {eventDetails.time}</h2>
              <h2>Sectores:</h2>
              {setSectorPrices.map((sector) => (
                <div
                className={styles.ContainerPrices} 
                key={sector.sector}>
                  <p>{sector.sector}</p>
                  <p>$ {sector.price}</p>
                </div>
              ))}
            </div>
          </div>
        
        
          <div className={styles.ContainerGoogleMap}>
            <iframe
              src={eventDetails.mapLocation}
              className={styles.iframe}
            ></iframe>
          </div>
        </div>
      
    </>
  );
};

export default Detail;
