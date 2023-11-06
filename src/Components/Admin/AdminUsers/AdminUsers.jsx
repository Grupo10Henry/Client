// Luissssss
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../../redux/userSlice';
import { instance } from '../../../axios/config';
import styles from './AdminUsers.module.css';

export default function AdminUsers() {

  const dispatch = useDispatch();
  const {allUsers} = useSelector((s) => s.user);

  const getAllUsersData = async () => {
    try {
      const { data } = await instance.get(`/user/`) // instance.get(`/user/`) || axios.get(`http://localhost:3001/user/`)
      console.log(data)
      return data
    } catch (error) {
      console.log(error)
    }
};

  useEffect(() => {
    getAllUsersData().then((data) => {
      dispatch(getAllUsers(data));
    });
  }, []);

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
        <div className={styles.usersTableContainer}>
            <h1 className={styles.usersTableTitle}>Bloquear y desbloquear usuarios</h1>
         <table className={styles.usersTable}>
         <thead className={styles.usersTableHead}>
           <tr>
             <th className={styles.usersTableHeadContent}>Nombre</th>
             <th className={styles.usersTableHeadContent}>Apellido</th>
             <th className={styles.usersTableHeadContent}>Email</th>
             <th className={styles.usersTableHeadContent}>Teléfono</th>
             <th className={styles.usersTableHeadContent}>Documento</th>
             <th className={styles.usersTableHeadContent}>Fecha de nacimiento</th>
             <th className={styles.usersTableHeadContent}>Acción</th>
           </tr>
         </thead>
         <tbody>
           {allUsers.map((user, index) => (
               <tr className={styles.userTableRows} key={index}>
               <td className={styles.userTableRowsContent}>{user.name}</td>
               <td className={styles.userTableRowsContent}>{user.lastName}</td>
               <td className={styles.userTableRowsContent}>{user.email}</td>
               <td className={styles.userTableRowsContent}>{user.phone}</td>
               <td className={styles.userTableRowsContent}>{user.identityCard}</td>
               <td className={styles.userTableRowsContent}>{user.dob}</td>
               <td className={styles.userTableRowsContent}>
                 <button className={styles.utablebutton} onClick={() => handleBlockUser(index)}>Bloquear</button>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
           </div>
    )
}