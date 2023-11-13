import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSeats,
  selectSelectedSeats,
  fetchAndSetSeats,
} from "../../../../redux/seatSlice";
import { clearSelectedSeats } from "../../../../redux/seatSlice";
import { agregarAlCarrito } from "../../../../redux/carritoSlice";
import styles from "./BookingSeats.module.css";
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
  const seats = useSelector(selectSeats);

  const navigate = useNavigate();

  //const rows = seats.length > 0 ? seats[0].rows : 0; 
  //const columns = seats.length > 0 ? seats[0].columns : 0; 

  const [remainingTime, setRemainingTime] = useState(900);
  const selectedSeats = useSelector(selectSelectedSeats);
  //const [selectedSeatStatus, setSelectedSeatStatus] = useState({});

  useEffect(() => {
    
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
  ]);

  /*const handleSeatClick = (seat) => {
    if (!seat.status) {
      // El asiento está ocupado, no se puede seleccionar.

      return;
    }

    setSelectedSeatStatus((prevStatus) => ({
      ...prevStatus,
      [seat.seatID]: !prevStatus[seat.seatID], // Cambia el estado de selección del asiento
    }));
    console.log("selectedSeats local state in BookingSeats:", selectedSeats);
    if (handleSeatSelect) {
      console.log("Información enviada a handleSeatSelect:", seat);
      handleSeatSelect({ ...seat, userID: userID });
    }
    handleSectorInfoUpdate();
  };*/

  useEffect(() => {
    console.log("selectedSeats local state in BookingSeats:", selectedSeats);
  }, [selectedSeats]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const clearSelectedSeatsTimer = setTimeout(() => {
      dispatch(clearSelectedSeats());
    }, 15 * 60 * 1000);

    const handleBeforeUnload = (event) => {
      dispatch(clearSelectedSeats());
      event.returnValue =
        "¿Estás seguro de abandonar la página?";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearTimeout(clearSelectedSeatsTimer);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [dispatch, clearSelectedSeats]);

  const handleOnClickcarrito = () => {
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
      eventName: eventName, 
      eventImage: image, 
    };

    const seatsData = {
      seatCount: selectedSeats.length, 
      seats: selectedSeats.map((seat) => ({
        seatID: seat.seatID,
        seatLocation: seat.seatLocation,
        sector: seat.sector, 
        price: seat.price, 
        quantity: 1, // cada asiento será una entrada
        totalPrice: seat.price * selectedSeats.length, 
      })),
    };

    // Enviar datos al carrito
    dispatch(agregarAlCarrito({ eventData, seatsData }));

    // Limpiar asientos seleccionados después de agregar al carrito
    dispatch(clearSelectedSeats());

    navigate("/carrito", {
      state: {
        ...eventData,
        seatsData,
      },
    });
  };

  return (
    <div className={styles.seatMap}>
      <div className={styles.sector}>
        <h3>Sector: {sector}</h3>
        <div className={styles.selectedInfo}>
          {counterActivated && (
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
            <img
              src={bannerImage}
              alt="imagen del sector"
              className={styles.bannerImage}
            />
      </div>

        <div className={styles.seatInfo}>
          <div className={styles.TituloBlink}>
            <h3>Selecciona un sector:</h3>
          </div>
          <div className={styles.ContainerSelect}>
            {sectorPrices && sectorPrices.length > 0 ? (
              <div className={styles.SectorContainer}> 
              {sectorPrices.map((sector, index) => (
                <div
                  key={index}
                  className={
                    sector === sector[1] ? styles.selectedSector : styles.sector
                  }
                  onClick={() => handleSectorSelect(sector[1])}
                >
                  {sector[1]} - ${parseFloat(sector[0]).toLocaleString("es-ES")}
                </div>
              ))}
              </div>
            ) : (
              <p>Error en la carga de precios.</p>
            )}
          </div>
          <div className={styles.cantidad}> 
          Cantidad de entradas:{" "}
          <input type="number" min="1" max="100" value="1" className={styles.input} id="cantidad" />
          </div> 
          <h3> Total: $ </h3>
          <button className={styles.Carrito} onClick={handleOnClickcarrito}  >Agregar al carrito</button>
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
