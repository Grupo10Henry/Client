/* Juli >>>>>>>> */

import React, {useState} from "react";
import logo from "../../../assets/logo_mi_butaca_color.svg";
//import styles from "./UserLogin.module.css";
//import validateLogin from "./validateLogin";
import { useNavigate } from 'react-router-dom';



const Login = ({login}) => {

    const navigate = useNavigate();

    const handleSubmitPrueba = (event) => {
        event.preventDefault();
        navigate('/myaccount')
    }

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

    /*const handleSubmit = (event) => {
        event.preventDefault();
        if (errors.email || errors.password) {
            login(user)
        } else {
            alert('Hay errores en el login');
            
            }
    };*/

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
        <>
        <div className="fixed inset-0 z-100 flex items-center justify-center backdrop-filter backdrop-blur-lg">
      {/* Este div se utilizará para el fondo desenfocado */}
        </div>
        <div className="fixed inset-0 z-101 flex flex-col items-center justify-center">
      {/* Contenedor principal del formulario */}
        {/*<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">*/}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm p-6 h-32 bg-white rounded-lg shadow-lg">
                <img className="mx-auto h-10 w-auto" src={logo} alt="Mi Butaca" />
                <h1 className="text-center text-2xl font-bold text-fuchsia-900 mb-10">
                    Login
                </h1>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmitPrueba} className="space-y-6" action="#" method="POST">
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-500">
                            ✉ EMAIL 
                        </label>
                        <div className="mt-2">
                         <input 
                            type="email" 
                            placeholder="ingresa_tu@email.com"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {errors.email && <p>{errors.email}</p>}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm font-bold leading-6 text-gray-500">
                            🗝 CONTRASEÑA 
                            
                        </label>
                        <div className="text-xs">
                            <a href="http://localhost:5173/recuperarcontrasena" className="font-semibold text-teal-700 hover:text-fuchsia-600">
                            Olvidé mi contraseña
                            </a>
                        </div>
                        </div>
                        <div className="mt-2">
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Tu-clave123"                                                                   
                                value={user.password} 
                                onChange={handleChange}
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            {errors.password && <p>{errors.password}</p>}
                        </div>
                    </div>


                {/* recordar contraseña tildar con checkbox 
                <div >
                <input
                type="checkbox"
                name="recordar"
                checked={recordar}
                onChange={handleRecordar}
                />

                {/* para recuperar contraseña hacer click en el texto "Recuperar contraseña" y llamar a handleRecuperar
                <label> Recuperar contraseña </label>
                <br/>
                <input
                type="checkbox"
                name="recuperar"
                checked={recuperar}
                onChange={handleRecuperar}
                />

        
                </div> 
                */}
                <div>
                   
                <button 
                className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                type="submit"> 
                INGRESAR 
                </button>
                </div>
                </form>


                {/* si no está registrado, link al componente SignUp ( modal) */}
               
                <p className= "mt-10 text-center text-sm text-gray-500"> 
                ¿No estás registrado? {" "}
                <a href="http://localhost:5173/registro" className="font-semibold leading-6 text-teal-700 hover:text-fuchsia-500">
                Regístrate aquí
                </a>
                </p>
        </div>
        </div> 
        
        </>
    )
    };

export default Login;
                
                
