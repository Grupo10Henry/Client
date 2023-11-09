import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSeats, fetchAndSetSeats } from '../../../../redux/seatSlice';
import { selectSelectedSeats, addSelectedSeat, removeSelectedSeat } from '../../../../redux/bookSeatsSlice';

import styles from './BookingSeats.module.css';
import asiento from '../../../../assets/asiento.svg';
import asientoFree from '../../../../assets/asiento-free.svg';
import asientoSelected from '../../../../assets/asiento-ocup.svg';

const BookingSeats = ({ id, sector, selectedSeats, onSeatSelect, sectorPricesQuery }) => {
  const dispatch = useDispatch();
  const seats = useSelector(selectSeats);
  console.log('Seats en BookingSeats:', seats);
  const rows = seats.length > 0 ? seats[0].rows : 0; // Obtenemos las filas de los asientos
  const columns = seats.length > 0 ? seats[0].columns : 0; // Obtenemos las columnas de los asientos
  console.log('Rows in Bookingseats:', rows, 'Columns:', columns);

  useEffect(() => {
    
    // Cuando el componente se monta, obtén los asientos del servidor
    dispatch(fetchAndSetSeats(id, sector, sectorPricesQuery));
  }, [id, sector, sectorPricesQuery, dispatch]);

  const handleSeatClick = (seat) => {
    if (!seat.status) {
      // El asiento está ocupado, no se puede seleccionar
      return;
    }

    if (selectedSeats.includes(seat)) {
      dispatch(removeSelectedSeat(seat));
    } else {
      dispatch(addSelectedSeat(seat));
    }

    if (onSeatSelect) {
      onSeatSelect(seat);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className={styles.seatMap}>
      <div className={styles.sector}>
        <h3>Sector {sector}</h3>
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
                                src={selectedSeats.includes(currentSeat) ? asiento : asientoFree}
                                alt={`Seat ${currentSeat.seatLocation}`}
                                className={`${styles.seat} ${
                                  selectedSeats.includes(currentSeat)
                                    ? styles.selected
                                    : ''
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
      <div className={styles.selectedInfo}>
        <div>Total Seats Selected: {selectedSeats.length}</div>
        <div>
          Total Price:{' '}
          {selectedSeats.reduce((total, seat) => total + seat.price, 0)}
        </div>
        <div>Time Left: {formatTime(900)}</div>
      </div>
    </div>
  );

};

export default BookingSeats;
