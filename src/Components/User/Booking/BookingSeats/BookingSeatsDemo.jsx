import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  selectSelectedSeats,
  addSelectedSeat,
  removeSelectedSeat,
} from "../../../../redux/bookSeatsSlice"
import styles from "./BookingSeats.module.css"
import asiento from "../../../../assets/asiento.svg"

const sectorData = {
  sector: "General",
  rows: 3,
  columns: 10,
}

const generateSampleSeats = (sectorInfo) => {
  const sampleSeats = []
  let seatID = 1

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
        Price: 200000, // Precio de ejemplo (cambia según el sector si es necesario)
        status: "free", // Estado de ejemplo
        exits: null,
      })
      seatID++
    }
  }

  return sampleSeats
}

const BookingSeats = () => {
  const dispatch = useDispatch()
  const selectedSeats = useSelector(selectSelectedSeats)

  const [seats] = useState(generateSampleSeats(sectorData))
  const [countdown, setCountdown] = useState(900) // 15 minutos en segundos
  const [timerActive, setTimerActive] = useState(false)

  useEffect(() => {
    let interval

    if (timerActive && countdown > 0) {
      interval = setInterval(() => {
        setCountdown(countdown - 1)
      }, 1000)
    }

    if (countdown === 0) {
      // Cuando se agota el tiempo
      clearInterval(interval)
      setTimerActive(false)
      alert("El tiempo ha expirado. Los asientos volverán a estar disponibles.")
      // Aquí puedes deseleccionar los asientos si es necesario
    }

    return () => clearInterval(interval)
  }, [countdown, timerActive])

  const handleSeatClick = (seat) => {
    if (seat.status === "occupied") {
      return
    }

    if (selectedSeats.includes(seat)) {
      dispatch(removeSelectedSeat(seat))
    } else {
      dispatch(addSelectedSeat(seat))
      setTimerActive(true) // Iniciar el contador cuando se selecciona un asiento
      setCountdown(900) // Reiniciar el contador a 15 minutos
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <div className={styles.seatMap}>
      <div className={styles.sector}>
        <h3>Sector {sectorData.sector}</h3>
        <table className={styles.seatGrid}>
          <tbody>
            {Array.from({ length: sectorData.rows }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: sectorData.columns }, (_, colIndex) => (
                  <td key={colIndex}>
                    {seats
                      .filter(
                        (seat) =>
                          seat.sector === sectorData.sector &&
                          seat.seatLocation ===
                            `${rowIndex + 1}-${colIndex + 1}`
                      )
                      .map((seat) => (
                        <img
                          key={seat.seatID}
                          src={asiento}
                          alt={`Seat ${seat.seatLocation}`}
                          className={`${styles.seat} ${
                            selectedSeats.includes(seat) ? styles.selected : ""
                          }`}
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
      <div className={styles.selectedInfo}>
        <div>Total Seats Selected: {selectedSeats.length}</div>
        <div>
          Total Price:{" "}
          {selectedSeats.reduce((total, seat) => total + seat.Price, 0)}
        </div>
        <div>Time Left: {formatTime(countdown)}</div>
      </div>
    </div>
  )
}

export default BookingSeats
