import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/userSlice";
import styles from "./Register.module.css";

const Register = () => {
  
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        identificationCard: "",
      });

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setInput({
          ...input,
          [event.target.name]: event.target.value,
        });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser(input));
        alert("Usuario creado con éxito");
        setInput({
          name: "",
          email: "",
          password: "",
          phone: "",
          identificationCard: "",
        });
      }


    return (
        <>
        <div className={styles.container}>
        <h1>Registro</h1>
        <form onSubmit={handleSubmit}>
        <ul>
            <li>
                <label>Nombre:</label>
                <input 
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                placeholder="Nombre y Apellido completo "
                />
            </li>
            <li>
                <label>e-mail:</label>
                <input 
                type="email"
                name="email"
                value={input.email} 
                onChange={handleChange}
                placeholder="Tu e-mail aquí"
                />
            </li>
            <li>
                <label>Contraseña:</label>
                <input 
                type="password" 
                name="password"
                value={input.password}
                onChange={handleChange}
                placeholder="Tu contraseña aquí"
                />
            </li>
            <li>
                <label>Teléfono de contacto:</label>
                <input 
                type="number" 
                name="phone"
                value={input.phone}
                onChange={handleChange}
                placeholder="Tu teléfono aquí"
                />
                </li>
            <li>
                <label>Cédula:</label>
                <input 
                type="number" 
                name="identificationCard"
                value={input.identificationCard}
                onChange={handleChange}
                placeholder="Tu cédula aquí"
                />
            </li>
        </ul>

        <button>Registrarse</button>
        </form>
        </div>
        </>
    );
}

export default Register;
