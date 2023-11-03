// Luissssss
// import { useDispatch, useSelector } from 'react-redux';
// import { instance } from '../../../axios/config';
import { useState, useEffect } from 'react';
import styles from './MyAccountInfo.module.css';

export default function MyAccountInfo() {

    // const dispatch = useDispatch();

    // const {user} = useSelector((s) => s.user)

    // const getUserData = async () => {
    //     try {
    //       const { data } = await instance.get("/user/:id") // http://localhost:3001/user
    //     //   console.log(data)
    //       return data
    //     } catch (error) {
    //       console.log(error)
    //     }
    // };
    
    //     useEffect(() => {
    //       getEvents().then((data) => (dispatch(getUserByID(data)))) // Crear esta función en reducer
    //     }, []
    // );

    const userData = {
        userID: 3,
        isAdmin: false,
        name: "franco",
        lastName: "rinque",
        email: "Franco2@gmail.com",
        phone: "1122334455",
        password: "$2a$10$j50dnsZi5UBlsDyYGq/JdeyMJWOO9unSZrO7ydZu5EhvjB6op3ogy",
        identityCard: "43336633",
        dob: "2024-04-02",
        createdAt: "2023-10-31T21:03:24.225Z",
        updatedAt: "2023-10-31T21:03:24.225Z",
        deletedAt: null
      }

    const [editMode, setEditMode] = useState(false);
    const [user, setUser] = useState({
        userID: 3,
        isAdmin: false,
        name: "franco",
        lastName: "rinque",
        email: "Franco2@gmail.com",
        phone: "1122334455",
        password: "$2a$10$j50dnsZi5UBlsDyYGq/JdeyMJWOO9unSZrO7ydZu5EhvjB6op3ogy",
        identityCard: "43336633",
        dob: "2024-04-02",
    })

    console.log(editMode)

    return (
        <div>
            <h1>Datos personales:</h1>
            <div>
                <div>
                    <label>Nombre:</label>
                    <input />
                </div>
                <div>
                    <label>Apellido:</label>
                    <input />
                </div>
            </div>
            <div>
                <div>
                    <label>Fecha de nacimiento:</label>
                    <input />
                </div>
                <div>
                    <label>Documento de identidad:</label>
                    <input />
                </div>
            </div>
            <div>
                <div>
                    <label>Email:</label>
                    <input />
                </div>
                <div>
                    <label>Teléfono:</label>
                    <input />
                </div>
            </div>
            <button onClick={()=>setEditMode(true)}>Editar</button>
        </div>
    )
}