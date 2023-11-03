/* Juli >>>>>>>> */

import React, { useState } from "react";
import logo from "../../../assets/logo_mi_butaca_color.svg";
//import styles from "./UserLogin.module.css";
//import validateLogin from "./validateLogin";
import { useNavigate, Link } from "react-router-dom";
import { instance } from "../../../axios/config";

const Login = ({ login }) => {
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //const [shown, setShown] = useState(false);

  //const switchShown = () => setShown(!shown);

  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm(user);

    if (validationErrors) {
      setErrors(validationErrors);
      alert("Hay errores en el login");
    } else {
      console.log("Datos del formulario enviados:", user);
      login(user);
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.email) {
      errors.email = "El email es obligatorio";
    }
    if (!formData.password) {
      errors.password = "La contraseña es obligatoria";
    }
    return Object.keys(errors).length ? errors : null;
  };

  const navigate = useNavigate();

  

  const handlerNavigateSignUp = () => {
    navigate("/registro");
  };

  const handlerNavigateHome = () => {
    navigate("/");
  };

  const handlePasswordRecuperation = () => {
    navigate("/recuperarcontrasena");
  };

  const togglePasswordVisibility = (inputId) => {
    const passwordInput = document.getElementById(inputId);
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
  };

  return (
    <>
      <div className="fixed inset-0 z-100 flex items-center justify-center backdrop-filter backdrop-blur-lg">
        {/* Este div se utilizará para el fondo desenfocado */}
      </div>

      <div className="fixed inset-0 z-101 flex flex-col items-center justify-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm p-6 h-32 bg-white rounded-lg shadow-lg">
          <img
            className="mx-auto h-10 w-auto mb-3"
            src={logo}
            alt="Mi Butaca"
          />
          <h1 className="text-center text-2xl font-bold text-fuchsia-900 mb-10">
            Iniciar Sesión
          </h1>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-6 rounded-lg shadow-lg"
            action="#"
            method="POST"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold leading-6 text-gray-500"
              >
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
                <label
                  htmlFor="password"
                  className="block text-sm font-bold leading-6 text-gray-500"
                >
                  🗝 CONTRASEÑA
                </label>
                <div className="text-xs">
                  <p
                    onClick={handlePasswordRecuperation}
                    className="font-semibold text-teal-700 hover:text-fuchsia-600 cursor-pointer"
                  >
                    Olvidé mi contraseña
                  </p>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                id="password"
                  type="password"
                  name="password"
                  placeholder=""
                  value={user.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && <p>{errors.password}</p>}
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("password")} // Llamar a togglePasswordVisibility con el id del campo de contraseña
                  className="absolute inset-y-0 bottom-4 right-0 flex items-center pr-2 cursor-pointer text-gray-600 top-4"
                >
                  👁️
                </button>
              </div>
            </div>

            <div>
              <button
                className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                type="submit"
              >
                INGRESAR
              </button>
            </div>
          </form>

          {/* si no está registrado, link al componente SignUp ( modal) */}

          <p className="mt-1 text-center text-sm md:text-base lg:text-lg xl:text-xl text-gray-800">
            ¿No está registrado?{" "}
            <p
              onClick={handlerNavigateSignUp}
              className="cursor-pointer font-semibold leading-6 text-teal-700 hover:text-fuchsia-500"
            >
              Regístrese aquí
            </p>
            <p
              onClick={handlerNavigateHome}
              className=" cursor-pointer leading-6 text-teal-600 hover:text-fuchsia-500"
            >
              Seguir como visitante
            </p>
          </p>
          {/* botón para loguearse con Google */}
          <div className="mt-1 flex items-center justify-center ">
            <Link to="http://localhost:3001/auth/google/callback">
              <button className="flex items-center justify-center w-54 px-2 py-1 mt-1 font-medium text-white bg-fuchsia-900 hover:bg-red-600 rounded-md transition duration-300 ease-in-out  shadow-sm">
                <span className="text-xl pr-2">G</span> Ingresar con Google
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
