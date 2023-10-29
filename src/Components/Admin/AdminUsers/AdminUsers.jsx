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
            <h1>Admin Users :{")"}</h1>
         <table>
         <thead>
           <tr>
             <th>Name</th>
             <th>Last Name</th>
             <th>Email</th>
             <th>Phone</th>
             <th>Password</th>
             <th>Identity Card</th>
             <th>DOB</th>
             <th>Action</th>
           </tr>
         </thead>
         <tbody>
           {Users.map((user, index) => (
               <tr key={index}>
               <td>{user.name}</td>
               <td>{user.lastName}</td>
               <td>{user.email}</td>
               <td>{user.phone}</td>
               <td>{user.password}</td>
               <td>{user.identityCard}</td>
               <td>{user.dob}</td>
               <td>
                 <button onClick={() => handleBlockUser(index)}>Block</button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
           </div>
    )
}