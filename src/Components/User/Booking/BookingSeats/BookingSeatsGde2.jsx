import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSeats,
  //selectSelectedSeats,
  fetchAndSetSeatsGde,
  addSelectedSeats,
} from "../../../../redux/seatSlice";
//import { getDetail } from "../../../../redux/detailSlice";
import { clearSelectedSeats } from "../../../../redux/seatSlice";
import { agregarAlCarrito } from "../../../../redux/carritoSlice";
import styles from "./BookingSeats.module.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BookingSeatsGde = ({
  id,
  userID,
  userName,
  bannerImage,
  sector,
  sectorPrices,
  handleSectorSelect,
  image,
  eventName,
}) => {
  const dispatch = useDispatch();
  const seats = useSelector(selectSeats);
  const navigate = useNavigate();
  const eventID = id;
  console.log("evenID en BookingSeatsGde", eventID);

  // traer de redux el valor de isDonation
  const isDonation = useSelector((state) => state.event.isDonation);
  console.log("isDonation en BookingSeatsGde", isDonation);

  /////////// new /////////////
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  // Obtener la cantidad de asientos disponibles
  const availableSeats = seats.filter((seat) => seat.status);
  const availableSeatsCount = availableSeats.length;
  console.log("availableSeatsCount en BookingSeatsGde", availableSeatsCount);

  // Calcular el total a pagar
  const selectedSector = sector;
  const selectedSectorPrice = sectorPrices.find(
    (sector) => sector[1] === selectedSector
  );
  const totalPrice = selectedSectorPrice
    ? selectedSectorPrice[0] * selectedQuantity
    : 0;

  const handleSeatSelect = async () => {
    try {

      const updatedSeats = await dispatch(
        fetchAndSetSeatsGde(eventID, selectedSector));

      const availableSeats = updatedSeats.filter((seat) => seat.status);

    console.log("Total de asientos disponibles:", availableSeats.length);
    console.log("Cantidad seleccionada:", selectedQuantity);

    if (availableSeats.length === 0) {
      // No hay suficientes asientos disponibles
      alert(
        "No hay suficientes asientos disponibles. Elige menos cantidad por favor."
      );
      return;
    }

    if (selectedQuantity <= availableSeats.length) {
      
      // selecciona la cantidad de asientos ingresada en el inpt
      const selectedSeats = [];
      for (let i = 0; i < selectedQuantity; i++) {
        const randomIndex = Math.floor(Math.random() * availableSeats.length);
        selectedSeats.push(availableSeats[randomIndex].seatID);
      }
      
      // Despacha la acción para agregar el asiento seleccionado
      dispatch(addSelectedSeats(selectedSeats));

    } else  {
      alert(
        "No hay suficientes asientos disponibles. Elige menos cantidad por favor."
      );
    }

  } catch (error) {
    console.error("Error al obtener y seleccionar asientos:", error);
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
      alert(
        "No hay suficientes asientos disponibles. Elige menos cantidad por favor."
      );
      return;
    }

    // Información del evento y asientos seleccionados
    const eventData = {
      userID: userID,
      userName: userName,
      eventID: eventID,
      eventName: eventName,
      eventImage: image,
      isDonation: isDonation,
    };

    const seatsData = {
      seatCount: selectedQuantity,
      seats: [],
    };

    for (let i = 0; i < selectedQuantity; i++) {
      const randomIndex = Math.floor(Math.random() * availableSeats.length);
      const selectedSeat = availableSeats[randomIndex];

      dispatch(addSelectedSeats(selectedSeat.seatID));

      // si isDonation es true seatsData.push de seatId, seatLocation, quiantity: 1, totalPrice = al valor ingresado en el input de Donacion
      if (isDonation) {
        const donationAmount = document.getElementById("donation").value;

        seatsData.seats.push({
          seatID: selectedSeat.seatID,
          seatLocation: selectedSeat.seatLocation,
          quantity: 1,
          totalPrice: donationAmount,
        });
      } else {
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
    }
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
        {isDonation ? (
          <>
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
                  const newValue = parseInt(event.target.value, 10);
                  setSelectedQuantity(newValue);
                  handleSeatSelect(newValue); // Llama a la función cuando cambie la cantidad
                }}
              />
            </div>
            <input
              type="range"
              id="donation"
              min="1000"
              max="20000"
              step="1000"
              value={totalPrice}
            />
            <h3> Total a Donar: ${totalPrice} </h3>
            <button className={styles.Carrito} onClick={handleOnClickcarrito}>
              Agregar al carrito
            </button>
          </>
        ) : (
          <>
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
                        sector === sector[1]
                          ? styles.selectedSector
                          : styles.sector
                      }
                      onClick={() => handleSectorSelect(sector[1])}
                    >
                      {sector[1]} - $
                      {parseFloat(sector[0]).toLocaleString("es-ES")}
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
                  const newValue = parseInt(event.target.value, 10);
                  setSelectedQuantity(newValue);
                  handleSeatSelect(newValue);
                }}
              />
            </div>
            <h3> Total: ${totalPrice} </h3>

            <button className={styles.Carrito} onClick={handleOnClickcarrito}>
              Agregar al carrito
            </button>
          </>
        )}
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
