// Luissssss
import styles from './AdminEvents.module.css';
import events from '../../User/Events/Events';

export default function AdminEvents() {

    // Traer lista de usuarios con dispatch y useEffect
    // Renderizar tabla de todos
    // Crear botón de bloquear y desbloquear
    // Poner buscador para mostrar sólo uno en específico?


    return (
        <div>
            <h1>Editar y eliminar eventos creados</h1>
            <table>
         <thead>
           <tr>
             <th>Nombre</th>
             <th>Descripción</th>
             <th>Categoría</th>
             <th>Afoto</th>
             <th>Fecha</th>
             <th>Hora</th>
             <th>Precio Mínimo</th>
             <th>Ubicación</th>
           </tr>
         </thead>
         <tbody>
           {events.map((event, index) => (
               <tr key={index}>
               <td>{event.name}</td>
               <td>{event.description}</td>
               <td>{event.category}</td>
               <td>{event.capacity}</td>
               <td>{event.date}</td>
               <td>{event.time}</td>
               <td>{event.priceMin}</td>
               <td>{event.locationName}</td>
               <td>
                 <button className={styles.etablebutton} onClick={() => handleBlockUser(index)}>Editar</button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
        </div>
    )
}