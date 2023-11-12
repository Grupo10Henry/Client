import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { agregarAlCarrito } from "../../../../redux/carritoSlice";
import styles from "./BookingSeatsGde.module.css";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BookingSeatsGde = ({
  userID,
  userName,
  eventType,
  bannerImage,
  id,
  isDonation,
  sector,
  sectorPrices,
  handleSectorSelect,
  sectorPricesQuery,
  handleSectorInfoUpdate,
  counterActivated,
  setCounterActivated,
  image,
  eventName,
}) => {
  const dispatch = useDispatch();


  const navigate = useNavigate();

  const [remainingTime, setRemainingTime] = useState(900);


  /*useEffect(() => {
    // Cuando el componente se monta, obtén los asientos del servidor
    dispatch(fetchAndSetSeats(id, sector, sectorPricesQuery));
    const interval = setInterval(() => {
      if (counterActivated && remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      }
    }, 1000); // Actualizar cada segundo

    return () => clearInterval(interval);
  }, [
    id,
    sector,
    sectorPricesQuery,
    dispatch,
    counterActivated,
    remainingTime,
  ]);*/




  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  
  /*const handleOnClickcarrito = () => {
    // Verificar si hay asientos seleccionados
    if (selectedSeats.length === 0) {
      alert("No has seleccionado ningún asiento.");
      return;
    }

    // Información del evento y asientos seleccionados
    const eventData = {
      userID: userID,
      userName: userName,
      eventID: id,
      eventName: eventName, // Otra propiedad del evento que desees enviar
      eventImage: image, // Otra propiedad del evento que desees enviar
    };

    const seatsData = {
      seatCount: selectedSeats.length, // Agregar la cantidad de asientos seleccionados
      seats: selectedSeats.map((seat) => ({
        seatID: seat.seatID,
        seatLocation: seat.seatLocation,
        sector: seat.sector, // Puedes ajustar esto según la estructura de tu asiento
        price: seat.price, // Puedes ajustar esto según la estructura de tu asiento
        quantity: 1, // cada asiento será una entrada
        totalPrice: seat.price * selectedSeats.length, // Puedes ajustar esto según la estructura de tu asiento
      })),
    };

    // Enviar datos al carrito (puedes ajustar según la estructura de tu carrito)
    dispatch(agregarAlCarrito({ eventData, seatsData }));

    // Limpiar asientos seleccionados después de agregar al carrito
    dispatch(clearSelectedSeats());

    // Navegar a la página del carrito
    navigate("/carrito", {
      state: {
        ...eventData,
        seatsData,
      },
    });
  };*/

  return (
    <div className={styles.seatMap}>
      <div className={styles.sector}>
       
            <h3>Sector: {sector}</h3>
            <div className={styles.selectedInfo}>
              {counterActivated  && (
                <div
                  className={`${styles.Time} ${
                    remainingTime > 0 ? "" : styles.hidden
                  }`}
                >
                  <p>
                    Reservaremos tus lugares por los próximos:{" "}
                    <span className={styles.TimeText}>
                      {formatTime(remainingTime)}
                    </span>{" "}
                    minutos.
                  </p>
                </div>
              )}
            </div>
            <img src={bannerImage} alt="imagen del sector" className= {styles.bannerImage} />
          
        
      
      <div className={styles.seatInfo}>
        <div className={styles.TituloBlink}>
          <h3>Selecciona un sector:</h3>
        </div>
        <div className={styles.ContainerSelect}>
          {sectorPrices && sectorPrices.length > 0 ? (
            sectorPrices.map((sector, index) => (
              <div
                key={index}
                className={
                  sector === sector[1] ? styles.selectedSector : styles.sector
                }
                onClick={() => handleSectorSelect(sector[1])}
              >
                {sector[1]} - ${parseFloat(sector[0]).toLocaleString("es-ES")}
              </div>
            ))
          ) : (
            <p>Error en la carga de precios.</p>
          )}
        </div>
        
        <h3>
          {" "}
          Total: ${" "}
          
        </h3>
        <button className={styles.Carrito} >
          Agregar al carrito
        </button>
      </div>
      </div>
    </div>
  );
};

BookingSeatsGde.propTypes = {
  // ... (otras propTypes existentes)
  sectorPrices: PropTypes.array,
  sector: PropTypes.string,
  handleSectorSelect: PropTypes.func,
  eventType: PropTypes.string,
};

export default BookingSeatsGde;
