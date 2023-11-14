import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSeats,
  selectSelectedSeats,
  fetchAndSetSeats,
  addSelectedSeat,
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

  console.log("sectorPrices:", sectorPrices)

  /////////// new /////////////
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  // Obtener la cantidad de asientos disponibles
  const availableSeats = seats.filter((seat) => seat.status);
  const availableSeatsCount = availableSeats.length;
console.log("availableSeatsCount:", availableSeatsCount)
  // Calcular el total a pagar
  const selectedSector = sector;
  const selectedSectorPrice = sectorPrices.find(
    sector => sector[1] === selectedSector );
  const totalPrice = selectedSectorPrice ? selectedSectorPrice[0] * selectedQuantity : 0;
  console.log("selectedSectorPrice:", selectedSectorPrice)

  const handleSeatSelect = () => {
    const availableSeats = seats.filter(seat => seat.status);
  
    if (availableSeats.length < selectedQuantity) {
      // No hay suficientes asientos disponibles
      alert('No hay suficientes asientos disponibles. Elige menos cantidad por favor.');
      return;
      // si la cantidad de asientos disponibles es mayor a la cantidad de asientos seleccionados
    } else if (availableSeats.length >= selectedQuantity) {
      // Selecciona un asiento al azar entre los disponibles
      const randomIndex = Math.floor(Math.random() * availableSeats.length);
      const selectedSeat = availableSeats[randomIndex];
  
      // Despacha la acción para agregar el asiento seleccionado
      dispatch(addSelectedSeat(selectedSeat.seatID));
    } else {
      // No hay asientos disponibles
      console.error('No hay asientos disponibles para seleccionar.');
    }
  };
  

  

  const handleOnClickcarrito = () => {
    // Verificar si hay asientos seleccionados
    if (selectedQuantity <= 0) {
      alert("Completa con la cantidad de entradas.");
      return;
    }

    const availableSeats = seats.filter((seat) => seat.status);
    if (availableSeats.length < selectedQuantity) {
      alert('No hay suficientes asientos disponibles. Elige menos cantidad por favor.');
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
      seatCount: selectedQuantity, 
      seats: [],
     
    };

    for (let i = 0; i < selectedQuantity; i++) {
      const randomIndex = Math.floor(Math.random() * availableSeats.length);
      const selectedSeat = availableSeats[randomIndex];

      dispatch (addSelectedSeat(selectedSeat.seatID));

      seatsData.seats.push({
        seatID: selectedSeat.seatID,
        seatLocation: selectedSeat.seatLocation,
        sector: selectedSeat.sector,
        price: selectedSeat.price,
        quantity: 1,
        totalPrice: selectedSeat.price,
      });
    }

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
          <h3>Sector elegido: {sector}</h3>
          <div className={styles.cantidad}> 
          Cantidad de entradas:{" "}
          <input 
          type="number" 
          min="1" 
          max={availableSeatsCount} 
          value={selectedQuantity} 
          className={styles.input} 
          id="cantidad" 
          onChange={(event) => {
            setSelectedQuantity(parseInt(event.target.value, 10));
            handleSeatSelect(); // Llama a la función cuando cambie la cantidad
          }}  
          />
          </div> 
          <h3> Total: ${totalPrice} </h3>
          <button className={styles.Carrito} onClick={handleOnClickcarrito}  >Agregar al carrito</button>
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
