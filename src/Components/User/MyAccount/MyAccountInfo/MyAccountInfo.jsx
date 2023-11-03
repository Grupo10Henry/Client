// Luissssss
// import { useDispatch, useSelector } from 'react-redux';
import { instance } from '../../../../axios/config';
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

    useEffect(() => {
        setUser(userData)
    }, []);

    const [editMode, setEditMode] = useState(false);
    const [user, setUser] = useState({
        userID: "",
        isAdmin: "",
        name: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        identityCard: "",
        dob: "",
    });

    console.log(editMode);
    console.log(user);

    const handleChange = (field, value) => {
        setUser({
            ...user,
            [field]: value,
        })
    };

    const handleSaveChanges = async () => {
        // try {
        //     await instance.put(`user/${user.userID}`, user);
        //     alert('Se ha actualizado exitosamente la información');
            setEditMode(false);
        // } catch (error) {
        //     alert(error.response.data.error)
        // }
    };

    return (
        <div className={styles.infoContainer}>
            <h1 className={styles.infoTitle}>Datos personales:</h1>
            {editMode ? (
            <div className={styles.infoContainer}>
            <div className={styles.infoRowContainer}>
                <div className={styles.infoInputContainer}>
                    <label className={styles.infoLabel}>Nombre:</label>
                    <input className={styles.infoInput}
                    placeholder={userData.name}
                    type="text"
                    value={user.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    />
                </div>
                <div className={styles.infoInputContainer}>
                    <label className={styles.infoLabel}>Apellido:</label>
                    <input className={styles.infoInput}
                    placeholder={userData.lastName}
                    type="text"
                    value={user.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.infoRowContainer}>
                <div className={styles.infoInputContainer}>
                    <label className={styles.infoLabel}>Fecha de nacimiento:</label>
                    <input className={styles.infoInput}
                    placeholder={userData.dob}
                    type="date"
                    value={user.dob}
                    onChange={(e) => handleChange('dob', e.target.value)}
                    />
                </div>
                <div className={styles.infoInputContainer}>
                    <label className={styles.infoLabel}>Documento de identidad:</label>
                    <input className={styles.infoInput}
                    placeholder={userData.identityCard}
                    type="number"
                    value={user.identityCard}
                    onChange={(e) => handleChange('identityCard', e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.infoRowContainer}>
                <div className={styles.infoInputContainer}>
                    <label className={styles.infoLabel}>Email:</label>
                    <input className={styles.infoInput}
                    placeholder={userData.email}
                    type="text"
                    value={user.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    />
                </div>
                <div className={styles.infoInputContainer}>
                    <label className={styles.infoLabel}>Teléfono:</label>
                    <input className={styles.infoInput}
                    placeholder={userData.phone}
                    type="number"
                    value={user.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    />
                </div>
            </div>
            <button className={styles.saveButton} onClick={handleSaveChanges}>Guardar cambios</button>
            </div>
            ) : (
            <div>
                <div>
                    <div>
                    <p>Nombre:</p>
                    <p>{userData.name}</p>
                    </div>
                    <div>
                    <p>Apellido:</p>
                    <p>{userData.lastName}</p>
                    </div>
                </div>
                <div>
                    <div>
                    <p>Fecha de nacimiento:</p>
                    <p>{userData.dob}</p>
                    </div>
                    <div>
                    <p>Documento de identidad:</p>
                    <p>{userData.identityCard}</p>
                    </div>
                </div>
                <div>
                    <div>
                    <p>Email:</p>
                    <p>{userData.email}</p>
                    </div>
                    <div>
                    <p>Teléfono:</p>
                    <p>{userData.phone}</p>
                    </div>
                </div>
                <button onClick={()=>setEditMode(true)}>Editar</button>
                </div>
            )}
        </div>
    )
}