/* Juli >>>>>>>> */

import React, {useState} from "react";
import styles from "./UserLogin.module.css";
//import validateLogin from "./validateLogin";



const UserLogin = ({login}) => {

    const [errors, setErrors] = useState({email: '', password: ''})

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [shown, setShown] = useState(false);

    const switchShown = () => setShown(!shown);

    const handleChange = (event) => {
        setUser({
        ...user,
        [event.target.name]: event.target.value
        })
        setErrors(validateLogin({
            ...user}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (errors.email || errors.password) {
            login(user)
        } else {
            alert('Hay errores en el login');
            
            }
    };

    // recordar contraseña

    const [recordar, setRecordar] = useState(false);

    const handleRecordar = (event) => {
        setRecordar(event.target.checked)
    }

    // recuperar contraseña

    const [recuperar, setRecuperar] = useState(false);

    const handleRecuperar = (event) => {
        setRecuperar(event.target.checked)
    }





    return (
        <div className={styles.routeContainer}>
        <div className={styles.contenedorForm}>

            <div className={styles.tituloForm} >

                <h1>Login</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles.contenedorInput}>
                <label className={styles.textoLogin}> ✉ EMAIL </label>
                <br/>
                <input 
                type="text" 
                placeholder="ingresa_tu@email.com"
                name="email"
                value={user.email}
                onChange={handleChange}
                />
                {errors.email && <p className={styles.error}>{errors.email}</p>}
                </div>
            
                <div className={styles.contenedorInput}>
                <label className={styles.textoLogin}> 🗝 CONTRASEÑA 
                    <span className={styles.mostrar} onClick={switchShown}>
                        {shown ? " ( ocultar )" : " ( mostrar )"}
                    </span>
                </label>
                <br/>
                <input 
                type={shown ? "text" : "password"} 
                name="password" 
                placeholder="Tu-clave123"                                                                   
                value={user.password} 
                onChange={handleChange}
                
                />
                {errors.password && <p className={styles.error}>{errors.password}</p>}
                </div>
                {/* recordar contraseña tildar con checkbox */}
                <div className={styles.contenedorInput}>
                <input
                type="checkbox"
                name="recordar"
                checked={recordar}
                onChange={handleRecordar}
                />

                {/* para recuperar contraseña hacer click en el texto "Recuperar contraseña" y llamar a handleRecuperar */}
                <label className={styles.textoLogin}> Recuperar contraseña </label>
                <br/>
                <input
                type="checkbox"
                name="recuperar"
                checked={recuperar}
                onChange={handleRecuperar}
                />

        
                </div>

                <button className={styles.botonSubmit} type="submit"> INGRESAR </button>

                {/* si no está registrado, link al componente SignUp ( modal) */}
                <div className={styles.contenedorInput}>
                <label className={styles.textoLogin}> ¿No estás registrado? </label>
                <br/>
                <input
                type="checkbox"
                name="registrarse"
                />
                </div>
                
            </form>
        </div>
        </div> 
    )
    };

export default UserLogin;
