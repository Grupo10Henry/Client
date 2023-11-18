// Luissssss
import styles from './AdminEvents.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from '../../../redux/eventsSlice';
import { useEffect } from 'react';
import { instance } from '../../../axios/config';
import { AiFillEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function AdminEvents() {

  const dispatch = useDispatch();
  const {allEvents} = useSelector((s) => s.events)
  const navigate = useNavigate();

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

  // console.log(allEvents)

  const handleDeleteEvent = async (eventID) => {
    try {
      await instance.delete(`/event/${eventID}`) // instance.delete(`/event/${eventID}`) | axios.delete(`http://localhost:3001/event/${eventID}`)
      // alert('Evento eliminado con éxito')
      Swal.fire({
        title: "Evento eliminado con éxito",
        icon: "success"
      });
    } catch (error) {
      alert(error.response.data.error)
    }
  };

  const handleEditEvent = (eventID) => {
    navigate(`../evento/${eventID}`)
  }

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
                 <AiFillEdit className={styles.adminEventsEditButton} onClick={() => handleEditEvent(event.eventID)} />
               </td>
               <td className={styles.eventTableRowsContent}>
                 <BsFillTrashFill className={styles.adminEventsDeleteButton} onClick={() => handleDeleteEvent(event.eventID)} />
               </td>
             </tr>
           ))}
         </tbody>
       </table>
        </div>
    )
}