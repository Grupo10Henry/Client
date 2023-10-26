// Juli >>>>>>>>

import React, { useState } from "react";
import { useDispatch } from "react-redux";
/*import { addUser, checkEmail } from "../../../redux/userSlice";*/
import { validateSignUp } from "./validateSignUp";
import axios from "axios";

// aquí será necesario que Back despache un email de confirmación cuando la cuenta se cree.
// seguramente lo mejor sea que, ante cada nuevo usuario que se incorpora en la tabla User, se dispare ese email.
// el email se llama signUpEmail.html y está en la carpeta Emails en Client.

const SignUp = () => {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});


  const [input, setInput] = useState({
    name: "",
    lastName: "",
    email: "",
    identityCard: "",
    dob: "",
    password: "",
    phone: "",
  });

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = validateSignUp(input);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    
    const formData = new FormData(event.target);
   
    const userData = {
      name: formData.get("name"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Regístrate
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
          <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Nombre:
              </label>
              <div className="mt-2">
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                autoComplete="name"
                placeholder="Tu nombre aquí "
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
              </div>
          
            
              <div className="flex flex-col">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Apellido:
              </label>
              <div className="mt-2">
              <input
                type="text"
                name="lastName"
                value={input.lastName}
                onChange={handleChange}
                autoComplete="lastName"
                placeholder="Tu apellido aquí"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
              </div>

            
              <div className="flex flex-col">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                e-mail:
              </label>
              <div className="mt-2">
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                placeholder="Tu e-mail aquí"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
              </div>
              
              <div className="flex flex-col">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Teléfono de contacto:
                </label>
                
                <div className="mt-2 flex">
              <input
                type="text"
                name="phone"
                value={input.phone}
                onChange={handleChange}
                placeholder="+573142299661"
                autoComplete="phone"
                required
                className="flex-grow rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              
              
               </div>
              </div>

              
              <div className="flex items-center justify-between">
            
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Fecha de nacimiento:
              </label>
              <div className="mt-2">
              <input
                type="date"
                name="dob"
                value={input.dob}
                onChange={handleChange}
                placeholder="Tu fecha de nacimiento aquí"
                autoComplete="dob"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                </div>
              </div>
              
              
              <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Cédula:
              </label>
              <div className="mt-2">
              <input
                type="text"
                name="identityCard"
                value={input.identityCard}
                onChange={handleChange}
                placeholder="Tu número de cédula aquí"
                autoComplete="identityCard"
                required
                className="block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
              </div>

              <div>
              <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Contraseña:
                </label>
                {/*<div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-xs-indigo-600 hover:text-indigo-500">
                  Olvidé mi contraseña
                </a>
                </div>*/}
                </div>
                
                <div className="mt-2">
              <input
                type="password"
                name="password"
                value={input.password}
                onChange={handleChange}
                placeholder="Tu contraseña aquí"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
              </div>

              
              <div className="flex flex-col">
           
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Repetir contraseña:
              </label>
              <div className="mt-2">
              <input
                type="password"
                name="password2"
                value={input.password2}
                onChange={handleChange}
                placeholder="Repetí tu contraseña aquí"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
              </div>

           <div>
          <button 
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Registrarse
            </button>
            </div>


            <div className="flex justify-center items-center  text-sm">
            <a
                  href="#"
                  className="font-semibold text-center-xs-indigo-600 hover:text-indigo-500">
                  Ya estoy registrado
                </a>
                </div>

        </form>
      </div>
      </div>
    </>
  );
};

export default SignUp;
