import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectSelectedSeats, addSelectedSeat, removeSelectedSeat } from '../../../../redux/bookSeatsSlice'; // Asegúrate de importar las acciones y selectores adecuados
import styles from './BookingSeats.module.css';
import asiento from '../../../../assets/asiento.svg';

const sampleData = [
  // Sector 1: rows: 3, columns: 10
  {
    sector: 'A',
    rows: 3,
    columns: 10,
  },
  // Sector 2: rows: 4, columns: 11
  {
    sector: 'B',
    rows: 4,
    columns: 11,
  },
  // Sector 3: rows: 5, columns: 12
  {
    sector: 'C',
    rows: 5,
    columns: 12,
  },
];

const generateSampleSeats = () => {
  const sampleSeats = [];
  let seatID = 1;

  sampleData.forEach((sectorInfo) => {
    for (let row = 1; row <= sectorInfo.rows; row++) {
      for (let col = 1; col <= sectorInfo.columns; col++) {
        sampleSeats.push({
          seatID: `seat-${seatID}`,
          eventID: 1, // Evento de ejemplo
          userID: null,
          paystubID: null,
          rows: sectorInfo.rows,
          columns: sectorInfo.columns,
          seatLocation: `${row}-${col}`,
          sector: sectorInfo.sector,
          Price: 5000, // Precio de ejemplo (cambia según el sector si es necesario)
          status: 'free', // Estado de ejemplo
          exits: null,
        });
        seatID++;
      }
    }
  });

  return sampleSeats;
};

const BookingSeats = () => {
  const dispatch = useDispatch();
  const selectedSeats = useSelector(selectSelectedSeats);

  const [seats] = useState(generateSampleSeats());

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
      {sampleData.map((sectorInfo) => (
        <div key={sectorInfo.sector} className={styles.sector}>
          <h3>Sector {sectorInfo.sector}</h3>
          <table className={styles.seatGrid}>
            <tbody>
              {Array.from({ length: sectorInfo.rows }, (_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array.from({ length: sectorInfo.columns }, (_, colIndex) => (
                    <td key={colIndex}>
                      {seats
                        .filter(
                          (seat) => seat.sector === sectorInfo.sector && seat.seatLocation === `${rowIndex + 1}-${colIndex + 1}`
                        )
                        .map((seat) => (
                          <img
                            key={seat.seatID}
                            src= {asiento}
                            alt={`Seat ${seat.seatLocation}`}
                            className={`${styles.seat} ${selectedSeats.includes(seat) ? styles.selected : ''}`}
                            onClick={() => handleSeatClick(seat)}
                          />
                        ))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      <div className={styles.selectedInfo}>
        <div>Total Seats Selected: {selectedSeats.length}</div>
        <div>Total Price: {selectedSeats.reduce((total, seat) => total + seat.Price, 0)}</div>
      </div>
    </div>
  );
};

export default BookingSeats;
