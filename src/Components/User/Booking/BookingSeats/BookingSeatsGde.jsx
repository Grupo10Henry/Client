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
  sector,
  sectorPrices,
  handleSectorSelect,
  handleSeatSelect,
  sectorPricesQuery,
  handleSectorInfoUpdate,
  counterActivated,
  image,
  eventName,
}) => {
  const dispatch = useDispatch();
  const seats = useSelector(selectSeats);
  const isDonation = useSelector((state) => state.event.isDonation);

  const navigate = useNavigate();

  const rows = seats.length > 0 ? seats[0].rows : 0;
  const columns = seats.length > 0 ? seats[0].columns : 0;

  const [remainingTime, setRemainingTime] = useState(900);
  const selectedSeats = useSelector(selectSelectedSeats);
  const [selectedSeatStatus, setSelectedSeatStatus] = useState({});

 

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

  const handleSeatClick = (seat) => {
    if (!seat.status) {
      // El asiento está ocupado, no se puede seleccionar.

      return;
    }

    setSelectedSeatStatus((prevStatus) => ({
      ...prevStatus,
      [seat.seatID]: !prevStatus[seat.seatID], // Cambia el estado de selección del asiento
    }));

    if (handleSeatSelect) {
      handleSeatSelect({ ...seat, userID: userID });
    }

    handleSectorInfoUpdate();
  };

  useEffect(() => {}, [selectedSeats]);

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
        "¿Estás seguro de abandonar la página? Se perderán los lugares seleccionados.";
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
      alert("No has seleccionado ningún lugar.");
      return;
    }

    // Información del evento y asientos seleccionados
    const eventData = {
      userID: userID,
      userName: userName,
      eventID: id,
      eventName: eventName,
      eventImage: image,
      isDonation: isDonation,
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
    console.log("isDonation para Cart:", isDonation);

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

  const sortedSeats = seats
    .slice()
    .sort((a, b) => a.seatLocation.localeCompare(b.seatLocation));

  return (
    <div className={styles.seatMap}>
      <div className={styles.sector}>
        <>
          <h3>Sector: {sector}</h3>
          <div className={styles.selectedInfo}>
            {counterActivated && selectedSeats.length > 0 && (
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
          <table className={styles.seatGrid}>
  <tbody>
    {Array.from({ length: rows }, (_, rowIndex) => (
      <tr key={rowIndex}>
        {Array.from({ length: columns }, (_, colIndex) => {
          const currentSeat =
            sortedSeats[rowIndex * columns + colIndex];

          return (
            <td key={colIndex}>
              {currentSeat && (
                <div className={styles.seatContainer}>
                  {currentSeat.status ? (
                    <label key={currentSeat.seatID} className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={selectedSeatStatus[currentSeat.seatID]}
                        onChange={() => handleSeatClick(currentSeat)}
                        className={styles.checkbox}
                      />
                      <span className={styles.checkmark}></span>
                    </label>
                  ) : (
                    <div className={styles.disabledCheckbox}></div>
                  )}
                  
                </div>
              )}
            </td>
          );
        })}
      </tr>
    ))}
  </tbody>
</table>


        </>
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
        <h3>Lugares seleccionados: {selectedSeats.length}</h3>
        <h3>
          {" "}
          Total: ${" "}
          {selectedSeats
            .reduce((acc, curr) => acc + curr.price, 0)
            .toLocaleString()}
        </h3>
        <button className={styles.Carrito} onClick={handleOnClickcarrito}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

BookingSeatsGde.propTypes = {
  sectorPrices: PropTypes.array,
  sector: PropTypes.string,
  handleSectorSelect: PropTypes.func,
  eventType: PropTypes.string,
};

export default BookingSeatsGde;
