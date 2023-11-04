// SeatMap.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { 
    selectSeats, selectSelectedSeats, selectTotalPrice, selectEventId, fetchSeats, selectStatus, 
    removeSelectedSeat, addSelectedSeat 
} from '../../../../redux/bookSeatsSlice'; // Asegúrate de importar las acciones y selectores adecuados
import styles from './BookingSeats.module.css';
import asiento from '../../../../assets/asiento.svg';
import { instance } from '../../../../axios/config';

const BookingSeats = () => {
  const {id} = useParams();
  // eventID es = id


  const seats = useSelector(selectSeats);
  const selectedSeats = useSelector(selectSelectedSeats);
  const totalPrice = useSelector(selectTotalPrice);
  const eventId = useSelector(selectEventId);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    // Aquí debes cargar los asientos desde la API al montar el componente.
    // hacer un get.instance a /seat/${id}/${sector}
    // Asumiremos que tienes una función fetchSeats que hace una solicitud GET a '/seat/' con el eventId como parámetro.
    dispatch(fetchSeats(eventId));
  }, [dispatch, eventId]);

  const handleSeatClick = (seat) => {
    if (seat.status === 'occupied') {
      // Si el asiento está ocupado, no se puede seleccionar
      return;
    }

    if (selectedSeats.includes(seat)) {
      // Si el asiento ya está seleccionado, quítalo de los asientos seleccionados
      dispatch(removeSelectedSeat(seat));
    } else {
      // Si el asiento no está seleccionado, agrégalo a los asientos seleccionados
      dispatch(addSelectedSeat(seat));
    }
  };

  return (
    <div className={styles.seatMap}>
      {seats.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
          {row.map((seat, colIndex) => (
            <div
              key={seat.seatID}
              className={`${styles.seat} ${selectedSeats.includes(seat) ? styles.selected : ''}`}
              onClick={() => handleSeatClick(seat)}
            >
              <svg xmlns={asiento} width="30" height="30" viewBox="0 0 30 30">
                {/* Aquí debes agregar el gráfico SVG del asiento o butaca */}
              </svg>
              <div className={styles.seatInfo}>
                <div>Status: {seat.status}</div>
                <div>Price: {seat.sector === 'A' ? 'Precio A' : 'Precio B'}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <div className={styles.selectedInfo}>
        <div>Total Seats Selected: {selectedSeats.length}</div>
        <div>Total Price: {totalPrice}</div>
      </div>
    </div>
  );
};

export default BookingSeats;
