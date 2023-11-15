import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { instance } from "../../../axios/config";
import logo from "../../../assets/logo_mi_butaca_color.svg";
import fondo from "../../../assets/fondo-tres-scaled.jpg";

const SignUp = () => {
  const navigate = useNavigate();

  const today = new Date();
  today.setFullYear(today.getFullYear() - 18); // Restar 18 años a la fecha actual

  const maxDate = today.toISOString().split("T")[0]; // Formatear la fecha como 'YYYY-MM-DD'

  const [modoOscuro, setModoOscuro] = useState(false);

  const handlerNavigateHome = () => {
    navigate("/");
  };

  const handlerNavigateLogin = () => {
    navigate("/iniciarsesion");
  };

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

  /* const handleGoogle = async (e) => {
    e.preventDefault();
    const response = await instance.get("/auth/google/callback");
    console.log(response.data);
  };*/

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await instance.post("/user", user);

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

  const darkModeClass = modoOscuro ? "dark-mode" : "";

  // Estilos para el modo claro
  const lightModeStyles = {
    container: {
      backgroundColor: "#fff",
      color: "#333",
    },
    button: {
      backgroundColor: "#3498db",
      color: "#fff",
    },
  };

  // Estilos para el modo oscuro
  const darkModeStyles = {
    container: {
      backgroundColor: "#333",
      color: "#fff",
    },
    button: {
      backgroundColor: "#f1c40f",
      color: "#333",
    },
  };

  const currentStyles = modoOscuro ? darkModeStyles : lightModeStyles;

  return (
    <>
      <div
        className={`fixed inset-0 z-1000 flex items-center justify-center backdrop-filter backdrop-blur-lg bg-cover bg-center`}
        style={{
          backgroundImage: `url(${fondo})`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(255, 255, 255, 0.6)", // Fondo blanco semitransparente para aclarar
          }}
        ></div>
      </div>

      <div className="fixed inset-0 z-1001 mt-1 flex flex-col items-center justify-center">
        {/* Contenedor principal del formulario */}
        <div className=" mx-auto w-full max-w-xl p-3 space-y-0 bg-amber-50 bg-opacity-50 rounded-lg shadow-lg">
          {/*<div className="col-12 col-md-6 offset-md-3">*/}
          <img className="mx-auto h-8 w-auto mb-2" src={logo} alt="Mi Butaca" />
          <h1 className="text-center text-2xl font-bold text-fuchsia-900 mb-10">
            Registrarme
          </h1>
        </div>
        <div className="mt-3 mx-auto w-full max-w-xl text-sm md:text-base lg:text-lg xl:text-xl">
          <form
            onSubmit={handleSubmit}
            className="bg-amber-50 bg-opacity-50 pt-2 p-5 rounded-lg shadow-lg space-y-1"
            action="#"
            method="POST"
          >
            <div className="flex space-x-4">
              <div className="w-1/2">
                <div>
                  <label
                    style={{ marginBottom: "0.1rem" }}
                    className="block font-medium leading-6 text-gray-900"
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
                      pattern="^[A-Za-zÁáÉéÍíÓóÚúÜüÇçÑñ\s]{1,15}"
                      title="Solo letras y espacios, máximo 15 caracteres"
                      placeholder="Tu nombre aquí."
                      className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      style={{ paddingTop: "-0.5rem" }}
                    />
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="flex flex-col">
                  <label className="block font-medium leading-6 text-gray-900">
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
                      pattern="^[A-Za-zÁáÉéÍíÓóÚúÜüÇçÑñ\s]{1,15}"
                      title="Solo letras y espacios, máximo 15 caracteres"
                      placeholder="Tus apellidos aquí."
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
                  placeholder="email@tu-email.com"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="block font-medium leading-6 text-gray-900">
                Teléfono
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  className="block w-full flex-grow rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="phoneS"
                  name="phone"
                  onChange={handleChange}
                  value={user.phone}
                  required
                  pattern="^\+?\d{1,19}$"
                  title="Debe contener solo números. El primer carácter puede ser el signo '+'. Máximo 20 caracteres."
                  placeholder="+573142939772"
                />
                <p class="text-xs text-center text-teal-600">
                  Sin espacios, ni puntos{" (.)"}, ni guiones {" (-)"}. Puede o
                  no tener el signo "+" adelante.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex space-x-2">
                <div className="w-1/2">
                  <label
                    htmlFor="identityCard"
                    className="block font-medium leading-6 text-gray-900"
                  >
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
                    placeholder="19457869"
                  />
                  <p class="text-xs text-center text-teal-600">
                    Sin puntos {" (.)"} ni guiones {" (-)"}
                  </p>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="dob"
                    className="block font-medium leading-6 text-gray-900"
                  >
                    Fecha de Nacimiento
                  </label>
                  <input
                    type="date"
                    className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    id="dob"
                    name="dob"
                    onChange={handleChange}
                    value={user.dob}
                    max={maxDate}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
  <label className="block font-medium leading-6 text-gray-900">
    Contraseña
  </label>
  <div className="mt-1 relative">
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
      placeholder=""
    />
    <button
      onClick={() => {
        const passwordInput = document.getElementById("password");
        passwordInput.type =
          passwordInput.type === "password" ? "text" : "password";
      }}
      className="absolute inset-y-0 bottom-4 right-0 flex items-center pr-2 cursor-pointer text-gray-600"
      type="button"
    >
      👁️
    </button>
    <p class="text-xs text-center text-teal-600">
      Debe tener: entre 6 y 12 caracteres, al menos 1 número, 1 letra mayúscula y 1 minúscula
    </p>
  </div>
</div>

            <div className="flex flex-col">
              <label className="block font-medium leading-6 text-gray-900">
                Repetir Contraseña
              </label>
              <div className="mt-1 relative">
                <input
                  type="password"
                  className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  id="repeatPassword"
                  name="repeatPassword"
                  onChange={handleChange}
                  value={user.repeatPassword}
                  required
                />
                 <button
      onClick={() => {
        const passwordInput = document.getElementById("repeatPassword");
        passwordInput.type =
          passwordInput.type === "password" ? "text" : "password";
      }}
      className="absolute inset-y-0 bottom-4 right-0 flex items-center pr-2 cursor-pointer text-gray-600 top-4"
      type="button"
    >
      👁️
    </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full mt-1 justify-center rounded-md bg-teal-600 px-2 py-1.5 text-sm md:text-base lg:text-lg xl:text-xl font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Registrarme
              </button>
            </div>
          </form>
          <p className="mt-1 text-center text-sm md:text-base lg:text-lg xl:text-xl text-gray-800">
            ¿Ya estás registrado?{" "}
            <p
              onClick={handlerNavigateLogin}
              className="cursor-pointer font-semibold leading-6 text-teal-700 hover:text-fuchsia-500"
            >
              Iniciar Sesión {" | "}
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
              <button className="flex items-center justify-center w-54 px-2 py-0 font-medium text-white bg-fuchsia-900 hover:bg-red-600 rounded-md transition duration-300 ease-in-out  shadow-sm">
                <span className="text-xl pr-2">G</span> Registrarse con Google
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/*</div>*/}
    </>
  );
};

export default SignUp;
