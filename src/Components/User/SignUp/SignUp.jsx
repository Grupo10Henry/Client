import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../../../assets/logo_mi_butaca_color.svg";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    identityCard: "",
    dob: "",
    password: "",
    repeatPassword: "",
  });

  // logica necesaria para permitir al usuario registrarse con Google
  const handleGoogle = async (e) => {
    e.preventDefault();
    const response = await axios.get("http://localhost:3001/auth/google");
    console.log(response.data);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/user", user);

      if (response.status === 200) {
        alert("Usuario creado correctamente");
        window.location.href = "/iniciarsesion";
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert("Error: " + error.response.data.error);
      } else {
        alert("Ocurrió un error desconocido");
      }
    }
  };

  // prueba de validaciones

  return (
    <>
      <div className="fixed inset-0 z-1000 flex items-center justify-center backdrop-filter backdrop-blur-lg">
        {/* Este div se utilizará para el fondo desenfocado */}
      </div>
  
      <div
        className="fixed inset-0 z-1001 mt-20 flex flex-col items-center justify-center"
      >
        {/* Contenedor principal del formulario */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm p-3 space-y-0 bg-white rounded-lg shadow-lg">
          {/*<div className="col-12 col-md-6 offset-md-3">*/}
            <img className="mx-auto h-8 w-auto mb-2" src={logo} alt="Mi Butaca" />
            <h1 className="text-center text-2xl font-bold text-fuchsia-900 mb-10">
              Registrarse
            </h1>
            </div>
            <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              onSubmit={handleSubmit}
              className="bg-white pt-2 p-5 rounded-lg shadow-lg space-y-1"
              action="#"
              method="POST"
            >
             <div className="flex space-x-4">
  <div className="w-1/2">
    <div>
      <label
        style={{ marginBottom: "0.1rem" }}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Nombre
      </label>
      <div className="mt-1">
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={user.name}
          required
          pattern="[A-Za-z\s]{1,15}"
          title="Solo letras y espacios, máximo 15 caracteres"
          placeholder="Su nombre aquí."
          className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          style={{ paddingTop: "-0.5rem" }}
        />
      </div>
    </div>
  </div>
  <div className="w-1/2">
    <div className="flex flex-col">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        Apellidos
      </label>
      <div className="mt-1">
        <input
          type="text"
          className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          id="lastName"
          name="lastName"
          onChange={handleChange}
          value={user.lastName}
          required
          pattern="[A-Za-z\s]{1,15}"
          title="Solo letras y espacios, máximo 15 caracteres"
          placeholder="Sus apellidos aquí."
        />
      </div>
    </div>
  </div>
</div>


              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Correo Electrónico
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={user.email}
                    required
                    placeholder="Su correo electrónico aquí."
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Teléfono
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    className="block w-full flex-grow rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id="phone"
                    name="phone"
                    onChange={handleChange}
                    value={user.phone}
                    required
                    pattern="^\+?\d{1,19}$"
                    title="Debe contener solo números. El primer carácter puede ser el signo '+'. Máximo 20 caracteres."
                  />
                </div>
              </div>
              <div className="flex flex-col">
  <div className="flex space-x-2">
    <div className="w-1/2">
      <label htmlFor="identityCard" className="block text-sm font-medium leading-6 text-gray-900">
        Cédula
      </label>
      <input
        type="text"
        className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        id="identityCard"
        name="identityCard"
        onChange={handleChange}
        value={user.identityCard}
        required
        pattern="^[a-zA-Z0-9]{6,15}$"
        title="Debe contener entre 6 y 15 caracteres alfanuméricos"
      />
    </div>
    <div className="w-1/2">
      <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
        Fecha de Nacimiento
      </label>
      <input
        type="date"
        className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        id="dob"
        name="dob"
        onChange={handleChange}
        value={user.dob}
      />
    </div>
  </div>
</div>
<div className="flex flex-col">
  <label className="block text-sm font-medium leading-6 text-gray-900">
    Contraseña
  </label>
  <div className="mt-1">
    <input
      type="password"
      className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      id="password"
      name="password"
      onChange={handleChange}
      value={user.password}
      required
      pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$"
      title="Debe contener entre 6 y 12 caracteres, al menos 1 número, 1 letra mayúscula y 1 letra minúscula"
    />
  </div>
</div>
<div className="mt-1 flex flex-col">
  <label className="block text-sm font-medium leading-6 text-gray-900">
    Repetir Contraseña
  </label>
  <div className="mt-1">
    <input
      type="password"
      className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      id="repeatPassword"
      name="repeatPassword"
      onChange={handleChange}
      value={user.repeatPassword}
      required
    />
  </div>
</div>


              <div>
                <button
                  type="submit"
                  className="flex w-full mt-1 justify-center rounded-md bg-teal-600 px-2 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Registrarse
                </button>
              </div>
              
            </form>
            <p className= "mt-1 text-center text-sm text-gray-800"> 
                ¿Ya está registrado? {" "}
                <a href="/iniciarsesion" className="font-semibold leading-6 text-teal-700 hover:text-fuchsia-500">
                Iniciar Sesión
                </a>
                </p>
                {/* botón para loguearse con Google */}
                <div className="mt-1 flex items-center justify-center ">
                <button
                onClick={handleGoogle}
                className="flex items-center justify-center w-54 px-2 py-0 font-medium text-white bg-fuchsia-900 hover:bg-red-600 rounded-md transition duration-300 ease-in-out  shadow-sm"
                >
                <span className="text-xl pr-2">G</span> Registrarse con Google
                </button>
                </div>


            
            
            
            </div>
          </div>
        {/*</div>*/}
      
    </>
  );
};

export default SignUp;