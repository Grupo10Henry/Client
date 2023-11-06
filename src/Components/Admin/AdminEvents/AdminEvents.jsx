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
        <div className={styles.eventsTableContainer}>
            <h1 className={styles.eventsTableTitle}>Editar y eliminar eventos creados</h1>
            <table className={styles.eventsTable}>
         <thead className={styles.eventsTableHead}>
           <tr>
             <th className={styles.eventsTableHeadContent}>Nombre</th>
             <th className={styles.eventsTableHeadContent}>Categoría</th>
             <th className={styles.eventsTableHeadContent}>Aforo</th>
             <th className={styles.eventsTableHeadContent}>Fecha</th>
             <th className={styles.eventsTableHeadContent}>Hora</th>
             <th className={styles.eventsTableHeadContent}>Precio Mínimo</th>
             <th className={styles.eventsTableHeadContent}>Ubicación</th>
             <th className={styles.eventsTableHeadContent}>Evento pago</th>
             <th className={styles.eventsTableHeadContent}>Tipo</th>
             <th className={styles.eventsTableHeadContent}>Editar</th>
             <th className={styles.eventsTableHeadContent}>Eliminar</th>
           </tr>
         </thead>
         <tbody>
           {allEvents?.map((event) => (

               <tr className={styles.eventTableRows} key={event.eventID}>
               <td className={styles.eventTableRowsContent}>{event.name}</td>
               <td className={styles.eventTableRowsContent}>{event.category}</td>
               <td className={styles.eventTableRowsContent}>{event.capacity}</td>
               <td className={styles.eventTableRowsContent}>{event.date}</td>
               <td className={styles.eventTableRowsContent}>{event.time}</td>
               <td className={styles.eventTableRowsContent}>{event.priceMin}</td>
               <td className={styles.eventTableRowsContent}>{event.locationName}</td>
               <td className={styles.eventTableRowsContent}>{event.isDonation === false ? 'Sí' : 'No'}</td>
               <td className={styles.eventTableRowsContent}>{event.type}</td>
               <td className={styles.eventTableRowsContent}>
                 <button className={styles.etablebutton} onClick={() => handleBlockUser(event.eventID)}>Editar</button>
               </td>
               <td className={styles.eventTableRowsContent}>
                 <button className={styles.etablebutton} onClick={() => handleDeleteEvent(event.eventID)}>Eliminar</button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
        </div>
    )
}