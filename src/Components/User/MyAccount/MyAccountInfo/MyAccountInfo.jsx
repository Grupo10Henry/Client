// Luissssss
import { useDispatch, useSelector } from 'react-redux';
import { instance } from '../../../../axios/config';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getUserById } from '../../../../redux/userSlice';
import axios from 'axios';
import Swal from 'sweetalert2';
import styles from './MyAccountInfo.module.css';

export default function MyAccountInfo() {

    const dispatch = useDispatch();
    const params = useParams();
    // console.log(params.id);

    const {userData} = useSelector((s) => s.user)

    const getUserData = async () => {
        try {
          const { data } = await instance.get(`/user/${params.id}`) // instance.get(`/user/${params.id}`) || axios.get(`http://localhost:3001/user/${params.id}`)
        //   console.log(data)
          return data
        } catch (error) {
          console.log(error)
        }
    };

        useEffect(() => {
          getUserData().then((data) => {
            dispatch(getUserById(data));
            setUser(data);
          });
        }, []
    );

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
        googleId: "",
        image: "",
    });

    const [userCopy, setUserCopy] = useState({
        userID: "",
        isAdmin: "",
        name: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        identityCard: "",
        dob: "",
        googleId: "",
        image: "",
    });

    // console.log(user);
    // console.log(userCopy);

    const handleChange = (field, value) => {
        setUser({
            ...user,
            [field]: value,
        })
    };

    const handleSaveChanges = async () => {
        try {
            await instance.put(`user/${user.userID}`, user); // instance.put(`user/${user.userID}`, user) || axios.put(`http://localhost:3001/user/${user.userID}`, user)
            getUserData().then((data) => {
                dispatch(getUserById(data));
                setUser(data);
              });
            // alert('Se ha actualizado exitosamente la información');
            Swal.fire({
                title: 'Se ha actualizado exitosamente la información',
                icon: "success"
              });
            setEditMode(false);
        } catch (error) {
            alert(error.response.data.error)
        }
    };

    const handleCancelChanges = async () => {
        setEditMode(false);
        setUser(userCopy);
        setUserCopy({
            userID: "",
            isAdmin: "",
            name: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            identityCard: "",
            dob: "",
            googleId: "",
            image: "",
        });
    };

    const HandleEditMode = () => {
        setEditMode(true);
        setUserCopy(user);
    }

    return (
        <div className={styles.infoContainer}>
            <h1 className={styles.infoTitle}>Datos personales:</h1>
            {editMode ? (
            <div className={styles.infoContainer}>
            <div className={styles.infoRowContainer}>
                <div className={styles.infoInputContainer}>
                    <label className={styles.infoLabel}>Nombre:</label>
                    <input className={styles.infoInput}
                    placeholder={userData?.name}
                    type="text"
                    value={user.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    />
                </div>
                <div className={styles.infoInputContainer}>
                    <label className={styles.infoLabel}>Apellido:</label>
                    <input className={styles.infoInput}
                    placeholder={userData?.lastName}
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
                    placeholder={userData?.dob}
                    type="date"
                    value={user.dob}
                    onChange={(e) => handleChange('dob', e.target.value)}
                    />
                </div>
                <div className={styles.infoInputContainer}>
                    <label className={styles.infoLabel}>Documento de identidad:</label>
                    <input className={styles.infoInput}
                    placeholder={userData?.identityCard}
                    type="number"
                    value={user.identityCard}
                    onChange={(e) => handleChange('identityCard', e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.infoRowContainer}>
                {/* <div className={styles.infoInputContainer}>
                    <label className={styles.infoLabel}>Email:</label>
                    <input className={styles.infoInput}
                    placeholder={userData?.email}
                    type="text"
                    value={user.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    />
                </div> */}
                <div className={styles.infoInputContainer}>
                    <label className={styles.infoLabel}>Teléfono:</label>
                    <input className={styles.infoInput}
                    placeholder={userData?.phone}
                    type="number"
                    value={user.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    />
                </div>
            </div>
            <div>
            <button className={styles.saveButtonN} onClick={handleCancelChanges}>Cancelar</button>
            <button className={styles.saveButton} onClick={handleSaveChanges}>Guardar</button>
            </div>
            </div>
            ) : (
            <div className={styles.infoContainer}>
                <div className={styles.infoRowContainer}>
                    <div className={styles.infoInputContainer}>
                    <p className={styles.infoLabel}>Nombre:</p>
                    <p className={styles.infoDisplay}>{userData?.name}</p>
                    </div>
                    <div className={styles.infoInputContainer}>
                    <p className={styles.infoLabel}>Apellido:</p>
                    <p className={styles.infoDisplay}>{userData?.lastName}</p>
                    </div>
                </div>
                <div className={styles.infoRowContainer}>
                    <div className={styles.infoInputContainer}>
                    <p className={styles.infoLabel}>Fecha de nacimiento:</p>
                    <p className={styles.infoDisplay}>{userData?.dob}</p>
                    </div>
                    <div className={styles.infoInputContainer}>
                    <p className={styles.infoLabel}>Documento de identidad:</p>
                    <p className={styles.infoDisplay}>{userData?.identityCard}</p>
                    </div>
                </div>
                <div className={styles.infoRowContainer}>
                    {/* <div className={styles.infoInputContainer}>
                    <p className={styles.infoLabel}>Email:</p>
                    <p className={styles.infoDisplay}>{userData?.email}</p>
                    </div> */}
                    <div className={styles.infoInputContainer}>
                    <p className={styles.infoLabel}>Teléfono:</p>
                    <p className={styles.infoDisplay}>{userData?.phone}</p>
                    </div>
                </div>
                <button className={styles.saveButton} onClick={
                    // ()=>setEditMode(true)
                    HandleEditMode
                    }>Editar</button>
                </div>
            )}
        </div>
    )
}