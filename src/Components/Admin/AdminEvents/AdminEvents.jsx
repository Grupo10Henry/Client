// Luissssss
import styles from './AdminEvents.module.css';
import events from '../../User/Events/Events';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from '../../../redux/eventsSlice';
import { useEffect } from 'react';
import { instance } from '../../../axios/config';

export default function AdminEvents() {

  const dispatch = useDispatch();
  const {allEvents} = useSelector((s) => s.events)

  const getEvents = async () => {
      try {
        const { data } = await instance.get("/event") // http://localhost:3001/event
      //   console.log(data)
        return data
      } catch (error) {
        console.log(error)
      }
  };
  
      useEffect(() => {
        getEvents().then((data) => (dispatch(getAllEvents(data))))
      }, []
  );

  console.log(allEvents)

  const handleDeleteEvent = async (eventID) => {
    try {
      await instance.delete(`/event/${eventID}`)
      alert('Evento eliminado con éxito')
    } catch (error) {
      alert(error.response.data.error)
    }
  };

    return (
        <div>
            <h1>Editar y eliminar eventos creados</h1>
            <table>
         <thead>
           <tr>
             <th>Nombre</th>
             <th>Categoría</th>
             <th>Afoto</th>
             <th>Fecha</th>
             <th>Hora</th>
             <th>Precio Mínimo</th>
             <th>Ubicación</th>
             <th>Imagen</th>
           </tr>
         </thead>
         <tbody>
           {allEvents?.map((event) => (

               <tr key={event.eventID}>
               <td>{event.name}</td>
               <td>{event.category}</td>
               <td>{event.capacity}</td>
               <td>{event.date}</td>
               <td>{event.time}</td>
               <td>{event.priceMin}</td>
               <td>{event.locationName}</td>
               <td>{event.image}</td>
               <td>
                 <button className={styles.etablebutton} onClick={() => handleBlockUser(event.eventID)}>Editar</button>
               </td>
               <td>
                 <button className={styles.etablebutton} onClick={() => handleDeleteEvent(event.eventID)}>Eliminar</button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
        </div>
    )
}