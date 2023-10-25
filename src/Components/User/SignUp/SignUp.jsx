// Juli >>>>>>>>

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser, checkEmail } from "../../../redux/userSlice";
import styles from "./Register.module.css";
import { validate } from "./validate";
import axios from "axios";

// aquí será necesario que Back despache un email de confirmación cuando la cuenta se cree.
// seguramente lo mejor sea que, ante cada nuevo usuario que se incorpora en la tabla User, se dispare ese email.
// el email se llama signUpEmail.html y está en la carpeta Emails en Client.

const SignUp = () => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const [phone, setPhone] = useState({
    countryCode: "+57",
    areaCode: "314",
    phoneNumber: "2299661",
  });

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    email: "",
    identityCard: "",
    dob: "",
    password: "",
  });

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = validate(input);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    
    const formData = new FormData(event.target);
    const fullPhoneNumber = `${phone.countryCode}${phone.areaCode}${phone.phoneNumber}`;

    const userData = {
      name: formData.get("name"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      fullPhoneNumber: fullPhoneNumber,
      identityCard: formData.get("identityCard"),
      dob: formData.get("dob"),
      password: formData.get("password"),
    };

    try {
      const url = `http://localhost:3001/users?email=${userData.email}`;
      const response = await axios.get(url);

      const isEmailAvailable = !response.data || response.data.length === 0;

      if (isEmailAvailable) {
        const createUserResponse = await axios.post(
          "http://localhost:3001/users",
          userData
        );

        if (createUserResponse.status === 201) {
          alert("Registración exitosa");
        } else {
          alert("Hubo un error al registrarse");
        }
      } else {
        alert("El email ya está registrado");
      }
    } catch (error) {
      console.error("Error checking email or creating the user:", error);
      alert;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Registro</h1>
        <h3>*necesario para poder reservar localidades*</h3>
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                placeholder="Tu nombre aquí "
              />
            </li>
            <li>
              <label>Apellido:</label>
              <input
                type="text"
                name="lastName"
                value={input.lastName}
                onChange={handleChange}
                placeholder="Tu apellido aquí"
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
              <label>Teléfono de contacto:</label>
              <label>Cód. País</label>
              <input
                type="number"
                name="countryCode"
                value={phone.countryCode}
                onChange={handleChange}
                placeholder="+57"
              />
              <label>Característica</label>
              <input
                type="number"
                name="areaCode"
                value={phone.areaCode}
                onChange={handleChange}
                placeholder="314"
              />
              <label>Número</label>
              <input
                type="number"
                name="phoneNumber"
                value={phone.phoneNumber}
                onChange={handleChange}
                placeholder="2299661"
              />
            </li>
            <li>
              <label>Fecha de nacimiento:</label>
              <input
                type="date"
                name="dob"
                value={input.dob}
                onChange={handleChange}
                placeholder="Tu fecha de nacimiento aquí"
              />
            </li>
            <li>
              <label>Cédula:</label>
              <input
                type="number"
                name="identityCard"
                value={input.identityCard}
                onChange={handleChange}
                placeholder="Tu cédula aquí"
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
              <label>Repetir contraseña:</label>
              <input
                type="password"
                name="password2"
                value={input.password2}
                onChange={handleChange}
                placeholder="Repetí tu contraseña aquí"
              />
            </li>
          </ul>

          <button>Registrarse</button>
          <h3>Si ya estás registrado: LogIn</h3>
        </form>
      </div>
    </>
  );
};

export default SignUp;
