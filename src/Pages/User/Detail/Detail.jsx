/* Juli >>>>>>>> */

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

//import { getDetail } from "../../../redux/eventSlice";
//import { getSeat } from "../../../redux/seatSlice";
import { selectEventID } from "../../../redux/eventIDSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import styles from "./Detail.module.css";
import BookingButton from "./BookingButton";

const Detail = () => {

  const eventID = useSelector(selectEventID);

  
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
    /*const fetchEventData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/seat?eventID=${eventID}`);
        
        if (response.data && response.data.length > 0) {
          // Agrupa los asientos por sector y calcula el precio promedio
          const sectorData = response.data.reduce((result, seat) => {
            const { sector, price } = seat;
            if (!result[sector]) {
              result[sector] = [price];
            } else {
              result[sector].push(price);
            }
            return result;
          }, {});
          
          const sectorPricesArray = Object.entries(sectorData).map(([sector, prices]) => ({
            sector,
            price: prices.reduce((total, price) => total + price, 0) / prices.length,
          }));
          
          setSectorPrices(sectorPricesArray);
        }
      } catch (error) {
        console.error("Error al obtener los sectores y precios:", error);
      }
    };*/
    
    
    


    
    const fetchEventDetails = async () => {
      try {
        
        const response = await axios.get(`http://localhost:3001/event/${eventID}`);


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
    
    //fetchEventData();
    
    fetchEventDetails();
  }, [eventID]);

  const originalDate = eventDetails.date;
  const parts = originalDate.split("-");

  if (parts.length === 3) {
    const newDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    <h1>{newDate}</h1>;
  }
  else {
    <h1>{eventDetails.date}</h1>;
  }

  // counter down timer
  
  const targetDateTime = new Date(`${eventDetails.date} ${eventDetails.time}`).getTime();
  const currentDate = new Date().getTime();
  const timeDifference = targetDateTime - currentDate;

  const [ countdown, setCountdown ] = useState({
    days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
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
        hours: Math.floor((newTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((newTimeDifference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((newTimeDifference % (1000 * 60)) / 1000),
      });
    }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateTime]);


  return (
    <>
      <div className={styles.ContainerGlobal}>
        
          <div className={styles.ContainerBanner}>
            
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
              <h4>Capacidad Total: {eventDetails.capacity}{" "} personas. </h4>
            </div>
          </div>

          <div className={styles.ContainerRightColumn}>
            <div className={styles.ContainerEventDate}>
              <h2>{eventDetails.date.split("-").reverse().join("-")}</h2>
              <h2>{eventDetails.time.split(":").slice(0,2).join(":") }{" "} hs.</h2>
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

              
              <h2>Sectores:</h2>
              {/*{sectorPrices.map((sector) => (
                <div
                className={styles.ContainerPrices} 
                key={sector.sector}>
                  <p>{sector.sector}</p>
                  <p>$ {sector.price}</p>
                </div>
              ))}*/}
            </div>
          </div>
        
        
          <div className={styles.ContainerGoogleMap}>
            <iframe
              src={eventDetails.mapLocation}
              className={styles.iframe}
            ></iframe>
          </div>
          <div className={styles.ContainerBookingButton}>
            <BookingButton />
            </div>
        </div>
      
    </>
  );
};

export default Detail;
