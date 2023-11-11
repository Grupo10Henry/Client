import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSeats,
  selectSelectedSeats,
  fetchAndSetSeats,
} from "../../../../redux/seatSlice";
import {
  addSelectedSeat,
  removeSelectedSeat,
} from "../../../../redux/bookSeatsSlice";
import styles from "./BookingSeats.module.css";
import asiento from "../../../../assets/asiento.svg";
import asientoFree from "../../../../assets/asiento-free.svg";
import asientoSelected from "../../../../assets/asiento-ocup.svg";
import PropTypes from "prop-types";

const BookingSeats = ({
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
  setCounterActivated,
}) => {
  const dispatch = useDispatch();
  const seats = useSelector(selectSeats);

  const rows = seats.length > 0 ? seats[0].rows : 0; // Obtenemos las filas de los asientos
  const columns = seats.length > 0 ? seats[0].columns : 0; // Obtenemos las columnas de los asientos

  const [remainingTime, setRemainingTime] = useState(900);
  const selectedSeats = useSelector(selectSelectedSeats);
  const [selectedSeatStatus, setSelectedSeatStatus] = useState({});

  useEffect(() => {
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
  ]);

  const handleSeatClick = (seat) => {
    if (!seat.status) {
      // El asiento está ocupado, no se puede seleccionar
      return;
    }

    setSelectedSeatStatus((prevStatus) => ({
      ...prevStatus,
      [seat.seatID]: !prevStatus[seat.seatID], // Cambia el estado de selección del asiento
    }));

    if (handleSeatSelect) {
      console.log("Información enviada a handleSeatSelect:", seat);
      handleSeatSelect(seat);
    }
    handleSectorInfoUpdate();
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleOnClickcarrito = () => {
    navigate("/carrito");
  };

  return (
    <div className={styles.seatMap}>
      <div className={styles.sector}>
        {eventType === "Grande" ? (
          <img
            src={bannerImage}
            alt="Banner Image"
            className={styles.BannerImage}
          />
        ) : (
          <>
            <h3>Sector: {sector}</h3>
            <div className={styles.selectedInfo}>
              {counterActivated && (
                <div
                  className={`${styles.Time} ${
                    remainingTime > 0 ? "" : styles.hidden
                  }`}
                >
                  <p>
                    Reservaremos tus asientos por los próximos:{" "}
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
                      const currentSeat = seats[rowIndex * columns + colIndex];

                      return (
                        <td key={colIndex}>
                          {currentSeat && (
                            <div>
                              {currentSeat.status ? (
                                <div>
                                  <img
                                    key={currentSeat.seatID}
                                    src={
                                      selectedSeatStatus[currentSeat.seatID]
                                        ? asiento
                                        : asientoFree
                                    }
                                    alt={`Seat ${currentSeat.seatLocation}`}
                                    className={`${styles.seat} ${
                                      selectedSeatStatus[currentSeat.seatID]
                                        ? styles.selected
                                        : ""
                                    }`}
                                    onClick={() => handleSeatClick(currentSeat)}
                                  />

                                  <p className={styles.seatLocation}>
                                    {currentSeat.seatLocation}
                                  </p>
                                </div>
                              ) : (
                                <div>
                                  <img
                                    key={currentSeat.seatID}
                                    src={asientoSelected}
                                    alt={`Seat ${currentSeat.seatLocation}`}
                                    className={styles.seat}
                                  />
                                  <p className={styles.seatLocation}>
                                    {currentSeat.seatLocation}
                                  </p>
                                </div>
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
        )}
      </div>
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
        <h3>Asientos seleccionados: {selectedSeats.length}</h3>
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

BookingSeats.propTypes = {
  // ... (otras propTypes existentes)
  sectorPrices: PropTypes.array,
  sector: PropTypes.string,
  handleSectorSelect: PropTypes.func,
  eventType: PropTypes.string,
};

export default BookingSeats;
