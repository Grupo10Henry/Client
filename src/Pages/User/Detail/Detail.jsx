/* Juli >>>>>>>> */

/*
Detalle de cada evento por id (EventId)
Deberá tener:
nombre del evento: name
descripción: description
fecha: date
horario: time
lugar: locationName
dirección: adressLocation
ubicación: mapLocation
imagen: image
banner: bannerImage
plano de la locación: planImage
capacidad de lugar: capacity


<iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13624.914338136074!2d-64.18331629999999!3d-31.3802601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298455dd969bd%3A0x3ff06309ac9b1992!2sHospital%20Infantil%20%7C%20Municipalidad%20de%20C%C3%B3rdoba!5e0!3m2!1ses!2sar!4v1698193516689!5m2!1ses!2sar" 
width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
</iframe>

*/

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail } from "../../../redux/eventSlice";
import { getSeat } from "../../../redux/seatSlice";

const Detail = () => {

const { eventID } = useParams();
const dispatch = useDispatch();
const eventDetail = useSelector((state) => state.eventDetail);
const seatDetail = useSelector((state) => state.seatDetail);

useEffect(() => {
    dispatch(getDetail(eventID));
    }, [dispatch, eventID]);

    if (!eventDetail) {
        return <div>Loading...</div>;
    }
    if (!seatDetail) {
        return <div>Loading...</div>;
    }

const {
    name,
    description,
    date,
    time,
    locationName,
    adressLocation,
    mapLocation,
    //image,
    bannerImage,
    //planImage,
    } = eventDetail;


    const {
        sector,
        price,
    } = seatDetail;

    const { Seat } = require('./models'); // Asegúrate de importar Seat adecuadamente

/*async function getSectorPrices(eventID) {
  try {
    const sectors = await Seat.findAll({
      where: { eventID },
      attributes: ['sector', 'price'], // Obtén el sector y el precio del asiento
      group: ['sector'],
    });

    return sectors;
  } catch (error) {
    console.error('Error al obtener los sectores y precios:', error);
    throw error;
  }
}

module.exports = { getSectorPrices };*/



return (
        <>
    <div>    
        <div>
            <div>
                <img src={bannerImage} alt={name} />
            </div>
            <div>
                <div>
                    <h1>{name} </h1>
                    <p>{description}</p>
                </div>
                <dic>
                    <h3>Lugar: {locationName}</h3>
                    <h3>Dirección: {adressLocation}</h3>
                    <h4>Capacidad Total: {capacity}</h4>
                </dic>
            </div>
            <div>
                <div>
                    <h3>Fecha: {date}</h3>
                    <h2>Hora: {time}</h2>
                    <h2>{sector} : $ {price}</h2>
                </div>
            </div>

        </div>
        <div>
            <div>
                {/*  https://maps.app.goo.gl/BmXV2uXhsaGRsDbYA 
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.120652310018!2d-58.38611082450305!3d-34.60111047295521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac630121623%3A0x53386f2ac88991a9!2sTeatro%20Col%C3%B3n!5e0!3m2!1ses!2sar!4v1698529402781!5m2!1ses!2sar" 
                width="600" 
                height="450" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>*/}
                <iframe 
                src={mapLocation} 
                width="600" 
                height="450" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                

            </div>
        </div>
    </div>
</>
);
};

export default Detail;
