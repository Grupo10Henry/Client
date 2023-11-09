import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedSeats, addSelectedSeat, removeSelectedSeat } from '../../../../redux/bookSeatsSlice';
import styles from './BookingSeats.module.css';
import asiento from '../../../../assets/asiento.svg';
import axios from 'axios';

const BookingSeats = ({ id, sector, selectedSeats, onSeatSelect, sectorPricesQuery }) => {
  
  const dispatch = useDispatch();
  const [seats, setSeats] = useState([]);
  const [rows, setRows] = useState(0);
  const [columns, setColumns] = useState(0);

  const [countdown, setCountdown] = useState(900);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    const fetchRealSeats = async () => {
      try {
        console.log('Fetching seats for event ID:', id, 'and sector:', sector);
        const response = await axios.post(`http://localhost:3001/seat/${id}/${sector}`);
        console.log('Response from server:', response.data);
        const realSeats = response.data;

        // Obtenemos rows y columns del primer objeto
        const firstSeat = realSeats[0];
        const { rows, columns } = firstSeat || { rows: 0, columns: 0 };

        console.log('Fetched seats:', realSeats);
        console.log('Rows:', rows, 'Columns:', columns);

        setRows(rows);
        setColumns(columns);
        setSeats(realSeats);
      } catch (error) {
        console.error('Error al obtener los asientos:', error);
      }
    };

    fetchRealSeats();
  }, [id, sector, sectorPricesQuery]);

  useEffect(() => {
    let interval;

    if (timerActive && countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }

    if (countdown === 0) {
      clearInterval(interval);
      setTimerActive(false);
      alert('El tiempo ha expirado. Los asientos volverán a estar disponibles.');
    }

    return () => clearInterval(interval);
  }, [countdown, timerActive]);

  const handleSeatClick = (seat) => {
    if (seat.status === 'occupied') {
      return;
    }

    if (selectedSeats.includes(seat)) {
      dispatch(removeSelectedSeat(seat));
    } else {
      dispatch(addSelectedSeat(seat));
      setTimerActive(true);
      setCountdown(900);
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
                const currentSeat = seats.find(
                  (seat) => seat.seatLocation === `${rowIndex + 1}-${colIndex + 1}`
                );

                console.log('Renderizando celda de asiento en columna:', colIndex);
                
                return (
                  <td key={colIndex}>
                    {currentSeat && (
                      <img
                        key={currentSeat.seatID}
                        src={asiento}
                        alt={`Seat ${currentSeat.seatLocation}`}
                        className={`${styles.seat} ${selectedSeats.includes(currentSeat) ? styles.selected : ''}`}
                        onClick={() => handleSeatClick(currentSeat)}
                      />
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
      <div>Total Price: {selectedSeats.reduce((total, seat) => total + seat.Price, 0)}</div>
      <div>Time Left: {formatTime(countdown)}</div>
    </div>
  </div>
);

};

export default BookingSeats;
