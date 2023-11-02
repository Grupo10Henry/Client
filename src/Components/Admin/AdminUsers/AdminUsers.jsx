// Luissssss

import styles from './AdminUsers.module.css';

export default function AdminUsers() {

    const Users = [
        {
            isAdmin: false,
            name: 'Luis',
            lastName: 'Carrillo',
            email: 'lccarrillo247@gmail.com',
            phone: '1234567',
            password: 'Luchito123',
            identityCard: '1234567',
            dob: '10-12-1989'
        },
        {
            isAdmin: false,
            name: 'Luis',
            lastName: 'Carrillo',
            email: 'lccarrillo247@gmail.com',
            phone: '1234567',
            password: 'Luchito123',
            identityCard: '1234567',
            dob: '10-12-1989'
        },
        {
            isAdmin: false,
            name: 'Luis',
            lastName: 'Carrillo',
            email: 'lccarrillo247@gmail.com',
            phone: '1234567',
            password: 'Luchito123',
            identityCard: '1234567',
            dob: '10-12-1989'
        },
        {
            isAdmin: false,
            name: 'Luis',
            lastName: 'Carrillo',
            email: 'lccarrillo247@gmail.com',
            phone: '1234567',
            password: 'Luchito123',
            identityCard: '1234567',
            dob: '10-12-1989'
        },
    ]

    return (
        <div>
            <h1>Bloquear y desbloquear usuarios</h1>
         <table>
         <thead>
           <tr>
             <th>Nombre</th>
             <th>Apellido</th>
             <th>Email</th>
             <th>Teléfono</th>
             <th>Documento</th>
             <th>Fecha de nacimiento</th>
             <th>Acción</th>
           </tr>
         </thead>
         <tbody>
           {Users.map((user, index) => (
               <tr key={index}>
               <td>{user.name}</td>
               <td>{user.lastName}</td>
               <td>{user.email}</td>
               <td>{user.phone}</td>
               <td>{user.identityCard}</td>
               <td>{user.dob}</td>
               <td>
                 <button className={styles.utablebutton} onClick={() => handleBlockUser(index)}>Bloquear</button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
           </div>
    )
}