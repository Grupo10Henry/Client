
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./Booking.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { instance } from "../../../axios/config";
import BookingSeats from "../../../Components/User/Booking/BookingSeats/BookingSeatsNew";
import { useSelector } from "react-redux";
import Loader from "../../../Components/UserAndAdmin/Loader/Loader";
import { fetchAndSetSeats } from "../../../redux/seatSlice";


const Booking = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const token = useSelector((state) => state.user.token)
  const [loading, setLoading] = useState(true)
  // Cambié el nombre de esta variable para mantener la consistencia
  const [eventDetails, setEventDetails] = useState({
    name: "",
    date: "",
    time: "",
    locationName: "",
    adressLocation: "",
    image: "",
    capacity: "",
    mapLocation: "",
    planImage: "",
    views: "",
    type: "",
  })
  const { id } = useParams()
  const { isDonation } = new URLSearchParams(window.location.search)
  const [selectedSector, setSelectedSector] = useState(null)
  const [selectedSeats, setSelectedSeats] = useState([])
 

  const location = useLocation()
  const sectorPrices = location.state && location.state.sectorPrices
  const [sectorPricesQuery, setSectorPricesQuery] = useState("")

  const [sectorInfo, setSectorInfo] = useState({
    selectedSeats: [],
    totalPrice: 0,
  });

  const handleSectorInfoUpdate = () => {
    // Calcula el total de asientos seleccionados y el precio total
    const totalSeatsSelected = selectedSeats.length;
    const totalPrice = selectedSeats.reduce((total, seat) => total + seat.price, 0);
  
    // Actualiza el estado sectorInfo
    setSectorInfo({
      selectedSeats: totalSeatsSelected,
      totalPrice,
    });
  };


  

  useEffect(() => {
    if (sectorPrices && sectorPrices.length > 0) {
      const sectorPricesJSON = JSON.stringify(sectorPrices)
      const encodedSectorPrices = encodeURIComponent(sectorPricesJSON)
      setSectorPricesQuery(`?sectorPrices=${encodedSectorPrices}`)
    }
  }, [sectorPrices])

  
    useEffect(() => {
      if (!token) {
        window.alert("Por favor inicia sesión para poder reservar una entrada.");
        navigate("/iniciarsesion");
        setLoading(false);
      } else {
        const fetchData = async () => {
          try {
            if (selectedSector) {
              dispatch(fetchAndSetSeats(id, selectedSector));
            }
            const responseEvent = await instance.get(`/event/${id}`);
    
            if (responseEvent.data) {
              const {
                name,
                date,
                time,
                locationName,
                adressLocation,
                image,
                capacity,
                mapLocation,
                planImage,
                views,
                type,
              } = responseEvent.data;
    
              setEventDetails({
                name,
                date,
                time,
                locationName,
                adressLocation,
                image,
                capacity,
                mapLocation,
                planImage,
                views,
                type,
              });
            }
          } catch (error) {
            console.error("Error al obtener los datos:", error);
            navigate("/iniciarsesion");
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }
    }, [token, navigate, id, selectedSector]);
    

  if (loading) {
    return <Loader />
  }

  const originalDate = eventDetails.date
  const parts = originalDate.split("-")

  let dateToRender
  if (parts.length === 3) {
    const newDate = `${parts[2]}/${parts[1]}/${parts[0]}`
    dateToRender = newDate
  } else {
    dateToRender = eventDetails.date // Corregí esta parte para evitar un error
  }

  const handleOnClickcarrito = () => {
    navigate("/carrito")
  }

  const handleSeatSelect = (seat) => {
    if (seat.status === true) {
      const updatedSeats = selectedSeats.includes(seat)
        ? selectedSeats.filter((s) => s !== seat)
        : [...selectedSeats, seat]
      setSelectedSeats(updatedSeats)
    }
  }

  const handleSectorSelect = (sectorName) => {
    setSelectedSector(sectorName)
    console.log(sectorName, "sector seleccionado en Booking")
  }

  /*const handleCheckout = () => {
    // iniciar el proceso de pago
    // enviar los datos de la compra al backend
  };*/

  return (
    <div className={styles.ContainerGlobal}>
      <div className={styles.ContainerUp}>
        <div id="imageContainer" className={styles.ContainerBanner}>
          <img
            id="imagenBanner"
            src={eventDetails.image}
            alt={eventDetails.name}
          />
        </div>
        <div className={styles.ContainerTitulo}>
          <h2>Reserva tu entrada!</h2>
          <h1>{eventDetails.name}</h1>
          <div className={styles.ContainerDate}>
            <h3>
              {" "}
              📆
              {dateToRender.split("-").reverse().join("-")}
              {" | "}🕒
              {eventDetails.time.split(":").slice(0, 2).join(":")} hs.{" "}
            </h3>
          </div>

          <p>Capacidad total: {eventDetails.capacity} personas.</p>
          <p>
            {eventDetails.name} ha sido visto {eventDetails.views} veces.{" "}
          </p>
          <div className={styles.ContainerLocation}>
            <p>
              Lugar: {eventDetails.locationName} | Dirección:{" "}
              {eventDetails.adressLocation}{" "}
            </p>
          </div>
          <div className={styles.ContainerGoogleMap}>
            <iframe
              src={eventDetails.mapLocation}
              className={styles.iframe}
            ></iframe>
          </div>
        </div>

        <div className={styles.ContainerSectores}>
          <br />
          {isDonation ? (
            <>
              <p>Ingresa un importe voluntario:</p>
              <input type="number" placeholder="Cantidad de entradas" />
              <input type="number" placeholder="$ Contribución voluntaria" />
            </>
          ) : (
            <>
              <h3>Selecciona un sector:</h3>
              {sectorPrices.map((sector, index) => (
                <div
                  key={index}
                  className={
                    selectedSector === sector[1]
                      ? styles.selectedSector
                      : styles.sector
                  }
                  onClick={() => handleSectorSelect(sector[1])}
                >
                  {sector[1]} - $ {sector[0]}
                </div>
              ))}
              <div className={styles.ContainerBookingSeatsInfo}>
  <div>Total Seats Selected: {sectorInfo.selectedSeats}</div>
  <div>Total Price: {sectorInfo.totalPrice}</div>
  
</div>

            </>
          )}
        </div>
      </div>
      <div className={styles.ContainerPlan}>
        <div className={styles.ContainerPlanoAsientos}>
          {eventDetails.type === "Grande" ? (
            <img src={eventDetails.planImage} />
          ) : (
            <BookingSeats
              id={id}
              sector={selectedSector}
              selectedSeats={selectedSeats}
              onSeatSelect={handleSeatSelect}
              sectorPricesQuery={sectorPricesQuery}
              handleSectorInfoUpdate={handleSectorInfoUpdate}
            />
          )}
        </div>
      </div>
      <button onClick={handleOnClickcarrito}>Agregar al carrito</button>{" "}
    </div>
  )
}

export default Booking
