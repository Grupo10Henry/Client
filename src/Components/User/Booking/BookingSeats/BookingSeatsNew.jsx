import React, { useState,useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSeats, selectSelectedSeats, fetchAndSetSeats } from '../../../../redux/seatSlice';
import { addSelectedSeat, removeSelectedSeat } from '../../../../redux/bookSeatsSlice';
import styles from './BookingSeats.module.css';
import asiento from '../../../../assets/asiento.svg';
import asientoFree from '../../../../assets/asiento-free.svg';
import asientoSelected from '../../../../assets/asiento-ocup.svg';

const BookingSeats = ({ id, sector, onSeatSelect, sectorPricesQuery, handleSectorInfoUpdate }) => {  
  const dispatch = useDispatch();
  const seats = useSelector(selectSeats);
  console.log('Seats en BookingSeats:', seats);
  const rows = seats.length > 0 ? seats[0].rows : 0; // Obtenemos las filas de los asientos
  const columns = seats.length > 0 ? seats[0].columns : 0; // Obtenemos las columnas de los asientos
  
  const [remainingTime, setRemainingTime] = useState(900);
  const selectedSeats = useSelector(selectSelectedSeats);
  const [selectedSeatStatus, setSelectedSeatStatus] = useState({});
const [counterActivated, setCounterActivated] = useState(false);

  useEffect(() => {
    
    // Cuando el componente se monta, obtén los asientos del servidor
    dispatch(fetchAndSetSeats(id, sector, sectorPricesQuery));
    const interval = setInterval(() => {
      if (counterActivated && remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      }
    }, 1000); // Actualizar cada segundo

    return () => clearInterval(interval);
  }, [id, sector, sectorPricesQuery, dispatch, counterActivated, remainingTime, setCounterActivated ]);

  const handleSeatClick = useCallback(
    (seat) => {
      if (!seat.status) {
        return;
      }
      setSelectedSeatStatus((prevStatus) => ({
      ...prevStatus,
          [seat.seatID]: !prevStatus[seat.seatID], // Cambia el estado de selección del asiento
        }));

        if (onSeatSelect) {
          console.log('Asiento seleccionado:', seat);
          onSeatSelect(seat);

          if(!counterActivated) {
            setCounterActivated(true);
          }
        } else {
          const noSelectedSeats = selectedSeats.length === 0;

            if (noSelectedSeats) {
              console.log('No hay asientos seleccionados');
              setCounterActivated(false);
            }
          }
        handleSectorInfoUpdate();
      },
      [onSeatSelect, handleSectorInfoUpdate, counterActivated, setCounterActivated, selectedSeats]
      ); 
      
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  

  return (
    <div className={styles.seatMap}>
      <div className={styles.sector}>
        <h3>Sector: {sector}</h3>
        <div className={styles.selectedInfo}>
        {counterActivated && (
            <div className={`${styles.Time} ${remainingTime > 0 ? '' : styles.hidden}`}>
              <p>
                Reservaremos tus asientos por los próximos:{" "}
                <span className={styles.TimeText}>{formatTime(remainingTime)}</span> minutos.
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
  src={selectedSeatStatus[currentSeat.seatID] ? asiento : asientoFree}
  alt={`Seat ${currentSeat.seatLocation}`}
  className={`${styles.seat} ${
    selectedSeatStatus[currentSeat.seatID] ? styles.selected : ''
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
      </div>
      
    </div>
  );

};

export default BookingSeats;
