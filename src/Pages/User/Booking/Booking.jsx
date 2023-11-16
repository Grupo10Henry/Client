import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./Booking.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { instance } from "../../../axios/config";
import BookingSeats from "../../../Components/User/Booking/BookingSeats/BookingSeatsPeq";
import BookingSeatsGde from "../../../Components/User/Booking/BookingSeats/BookingSeatsGde";
import { useSelector } from "react-redux";
import Loader from "../../../Components/UserAndAdmin/Loader/Loader";
import {
  addSelectedSeat,
  removeSelectedSeat,
  selectSelectedSeats,
  fetchAndSetSeats,
} from "../../../redux/seatSlice";


const Booking = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.token);
  const userID = useSelector((state) => state.user?.userInfo?.userID);
  const userName = useSelector((state) => state.user?.userInfo?.name);

  const eventID = useSelector((state) => state.event.id);
  console.log("evenID en Booking", eventID);

  const { id } = useParams();
  const urlSearchParams = new URLSearchParams(window.location.search);
  const isDonation = urlSearchParams.get("isDonation") === "true";
  console.log("id en Booking", id);

  const [loading, setLoading] = useState(true);
  const [selectedSector, setSelectedSector] = useState(null);
  const selectedSeats = useSelector(selectSelectedSeats);

  //const [selectedSeatID, setSelectedSeatID] = useState(null);
  const [seatID, setSelectedSeatID] = useState(null);

  const location = useLocation();
  const sectorPrices = location.state && location.state.sectorPrices;
  const [sectorPricesQuery, setSectorPricesQuery] = useState("");
  
  const [eventDetails, setEventDetails] = useState({
    name: "",
    date: "",
    time: "",
    locationName: "",
    adressLocation: "",
    image: "",
    bannerImage: "",
    capacity: "",
    mapLocation: "",
    planImage: "",
    views: "",
    type: "",
  });


  const [sectorInfo, setSectorInfo] = useState({
    selectedSeats: [],
    totalPrice: 0,
  });
  const [counterActivated, setCounterActivated] = useState(false);

  useEffect(() => {
    if (sectorPrices && sectorPrices.length > 0) {
      const sectorPricesJSON = JSON.stringify(sectorPrices);
      const encodedSectorPrices = encodeURIComponent(sectorPricesJSON);
      setSectorPricesQuery(`?sectorPrices=${encodedSectorPrices}`);
    }
  }, [sectorPrices]);

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
          const responseEvent = await instance.get(
            `/event/${id}`
          );

          if (responseEvent.data) {
            const {
              name,
              date,
              time,
              locationName,
              adressLocation,
              image,
              bannerImage,
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
              bannerImage,
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



  const handleSectorInfoUpdate = () => {
    // Calcula el total de asientos seleccionados y el precio total
    const totalSeatsSelected = selectedSeats.length;
    const totalPrice = selectedSeats.reduce(
      (total, seat) => total + seat.price,
      0
    );

    // Actualiza el estado sectorInfo
    setSectorInfo({
      selectedSeats: totalSeatsSelected,
      totalPrice,
    });
    setCounterActivated(true);
  };



  const originalDate = eventDetails.date;
  const parts = originalDate.split("-");

  let dateToRender;
  if (parts.length === 3) {
    const newDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    dateToRender = newDate;
  } else {
    dateToRender = eventDetails.date; // Corregí esta parte para evitar un error
  }

  

  const handleSeatSelect = async (seat) => {
    const seatID = seat.seatID;
    setSelectedSeatID(seatID);
    console.log("seatID en handleSeatSelect", seatID);
  
  if (seat.status === true) {
    if (selectedSeats.some(selectedSeat => selectedSeat.seatID === seat.seatID)) {
        dispatch(removeSelectedSeat(seat));
    } else {
        dispatch(addSelectedSeat(seat));
        try {
          // realizar la solicitud put para cambiar el estado del asiento a ocupado y enviar el userID
          await updateSeatStatus(seat.seatID, false);
        } catch (error) {
          console.error("Error al actualizar el estado del asiento:", error);
        }
    };
  }
};

    const updateSeatStatus = async (seatID, newStatus) => {
        await instance.put(`/seat/${seatID}`, { 
          status: newStatus,
          userID: userID,
         });
};



const checkPaystubID = async () => {
  console.log("ejecutando checkPaystubID");
  try {
    console.log("seatID en checkPaystubID", seatID);
    // hacer la solciitud get para saber si el campo paystubID de la tabla seat está vacío. Si lo está, cambiar el estado del asiento a disponible y borrar el userID
    const responseSeat = await instance.get(`/seat/by-id/${seatID}`);
    console.log(responseSeat);
    if (responseSeat.data.paystubID === null) {
      //cambiar el estado (status) del asiento a disponible (true) y borrar el userID
    await updateSeatStatus(seatID, true); 
    }   

  }catch(error) {
    console.error("Error al obtener el paystubID:", error);
  }
};

useEffect(() => {
  const timer = setTimeout(() => {
    checkPaystubID();
  }, 5 * 60 * 1000);
  return () => clearTimeout(timer);
}, [seatID]);


if (loading) {
  //return <Loader />
  return null;
}


  const handleSectorSelect = (sectorName) => {
    setSelectedSector(sectorName);
  };

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
          <img src={eventDetails.planImage} />
        </div>
      </div>
      <div className={styles.ContainerPlan}>
        <div className={styles.ContainerPlanoAsientos}>
          {eventDetails.type === "Grande" ? (
             <BookingSeatsGde
             id={id}
             userID={userID}
             userName={userName}
             isDonation={isDonation}
             sector={selectedSector}
             sectorPrices={sectorPrices}
             handleSectorSelect={handleSectorSelect}
             handleSeatSelect={handleSeatSelect}
             sectorPricesQuery={sectorPricesQuery}
             handleSectorInfoUpdate={handleSectorInfoUpdate}
             counterActivated={counterActivated}
             setCounterActivated={setCounterActivated}
             bannerImage={eventDetails.bannerImage}
             image={eventDetails.image}
             eventName={eventDetails.name}
           />
          ) : (
            <BookingSeats
              id={id}
              userID={userID}
              userName={userName}
              isDonation={isDonation}
              sector={selectedSector}
              sectorPrices={sectorPrices}
              handleSectorSelect={handleSectorSelect}
              handleSeatSelect={handleSeatSelect}
              
              sectorPricesQuery={sectorPricesQuery}
              handleSectorInfoUpdate={handleSectorInfoUpdate}
              counterActivated={counterActivated}
              setCounterActivated={setCounterActivated}
              bannerImage={eventDetails.bannerImage}
              image={eventDetails.image}
              eventName={eventDetails.name}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
