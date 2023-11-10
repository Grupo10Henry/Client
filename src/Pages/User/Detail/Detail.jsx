/* Juli >>>>>>>> */
import React from "react"
import { Link, useParams } from "react-router-dom"
import Loader from "../../../Components/UserAndAdmin/Loader/Loader"
import useDetail from "../../../hooks/useDetail"
import BookingButton from "./BookingButton"
import styles from "./Detail.module.css"

const Detail = () => {
  const params = useParams()

  const {
    eventDetails,
    isDonation,
    sectorPrices,
    //isLoading,
    //error,
    handleClick,
    countdown,
  } = useDetail(params?.id)

  const originalDate = eventDetails?.date
  const parts = originalDate.split("-")

  if (parts.length === 3) {
    const newDate = `${parts[2]}/${parts[1]}/${parts[0]}`
    ;<h1>{newDate}</h1>
  } else {
    ;<h1>{eventDetails?.date}</h1>
  }

  return (
    <>
      <div className={styles.ContainerGlobal}>
        {/*{isLoading ? ( // Verifica si isLoading es verdadero
          <Loader />
  ) : (*/}
          <>
            <div className={styles.ContainerBanner}>
              <img src={eventDetails.bannerImage} alt={eventDetails.name} />
            </div>
            <div className={styles.ContainerLeftColumn}>
              <div className={styles.ContainerNameDescription}>
                <h1>{eventDetails.name} </h1>
                <p>{eventDetails.description}</p>
                <br />
              </div>
              <div className={styles.ContainerAddress}>
                <h3>Lugar: {eventDetails.locationName}</h3>
                <h3>Dirección: {eventDetails.adressLocation}</h3>
                <h4>Capacidad Total: {eventDetails.capacity.toLocaleString("es-ES")} personas.</h4>

              </div>
              <br />
              <h5>A {eventDetails.views.toLocaleString("es-ES")} usuarios les interesa este evento.</h5>
            </div>

            <div className={styles.ContainerRightColumn}>
              <div className={styles.ContainerEventDate}>
                <br />
                <h2> 📆 {eventDetails.date.split("-").reverse().join("-")}</h2>
                <h2>
                  🕒 {eventDetails.time.split(":").slice(0, 2).join(":")} hs.
                </h2>
                <br />
                <div className={styles.divCount}>
                  <p>Restan...</p>
                  <div className={styles.countdownContainer}>
                    <div>
                      <h1>{countdown.days}</h1>
                      <p>días</p>
                    </div>
                    <div>
                      <h1>{countdown.hours}</h1>
                      <p>horas</p>
                    </div>
                    <div>
                      <h1>{countdown.minutes}</h1>
                      <p>minutos</p>
                    </div>
                    <div>
                      <h1>{countdown.seconds}</h1>
                      <p>segundos</p>
                    </div>
                  </div>
                </div>
                <br />
                {isDonation ? (
                  <>
                    <p>Ingreso con contribución voluntaria.</p>
                    <button onClick={handleClick}>
                      Ver sectores y Reservar
                    </button>
                  </>
                ) : (
                  <>
                    <h2>Sectores:</h2>
                    {sectorPrices.map((sector) => (
  <div className={styles.ContainerPrices} key={sector[1]}>
    <p>{sector[1]}</p>
    <p>$ {Number(sector[0]).toLocaleString("es-ES")}</p>
  </div>
))}


                    <button onClick={handleClick}>
                      Ver sectores y Reservar
                    </button>
                  </>
                )}
              </div>
            </div>

            <div className={styles.ContainerGoogleMap}>
              <h3>Mapa de Ubicación {eventDetails.name}:</h3>
              <iframe
                src={eventDetails.mapLocation}
                className={styles.iframe}
              ></iframe>
            </div>
            <div className={styles.ContainerBookingButton}>
              
                <BookingButton handleClick={handleClick}/>
              
            </div>
          </>
        {/* )} */}
      </div>
    </>
  )
}

export default Detail