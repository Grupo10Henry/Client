// SeatMap.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { 
    selectSeats,  
    fetchSeats, 
    removeSelectedSeat, 
    addSelectedSeat, 
} from '../../../../redux/bookSeatsSlice'; // Asegúrate de importar las acciones y selectores adecuados
import styles from './BookingSeats.module.css';
import asiento from '../../../../assets/asiento.svg';
import { instance } from '../../../../axios/config';
import axios from 'axios';

const BookingSeats = ({sector, selectedSeats, onSeatSelect, sectorPricesQuery}) => {
  const {id} = useParams();
  // eventID es = id
  const dispatch = useDispatch();
  const seats = useSelector(selectSeats);

  useEffect(() => {
    const fetchRealSeats = async () => {
      try {
        const response = await axios.post(`http://localhost:3001/seat/${id}/${sector}`);
        console.log(response.data, "response.data en BookingSeats");
        const realSeats = response.data;
    
    console.log(sector, "sector recibido en BookingSeats");
      } catch (error) {
        console.error('Error al obtener los asientos:', error);
      }
    };
    console.log(sector, "sector recibido en BookingSeats")
    console.log(id, "id recibido en BookingSeats")
    fetchRealSeats();
  }, [id, sector, sectorPricesQuery]);

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
    if (onSeatSelect) {
      onSeatSelect(seat);
    }
  };

  return (
    <div className={styles.seatMap}>
      {seats.map((seat) => (
        <div key={seat.seatID} className={styles.sector}>
          <h3>Sector {seat.sector}</h3>
          <table className={styles.seatGrid}>
            <tbody>
              {Array.from({ length: seat.rows }, (_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: seat.columns }, (_, colIndex) => {
                    const currentSeat = seat.find(
                      (s) => s.seatLocation === `${rowIndex + 1}-${colIndex + 1}`
                    );
                    return (
                      <td key={colIndex}>
                        {currentSeat && (
                          <img
                            key={currentSeat.seatID}
                            src={asiento}
                            alt={`Seat ${currentSeat.seatLocation}`}
                            className={`${styles.seat} ${
                              selectedSeats.includes(currentSeat) ? styles.selected : ''
                            }`}
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
      ))}
    </div>
  );
};

export default BookingSeats;
