/*
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../../assets/logo_mi_butaca_color.svg";
import { recoverPassword } from "../../../redux/recoverPasswordSlice";
import { instance } from "../../../axios/config";

const PasswordRecover = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const status = useSelector((state) => state.recoverPassword.status);
  const error = useSelector((state) => state.recoverPassword.error);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRecoverPassword = async (e) => {
    dispatch(recoverPassword(email));
  };

  return (
    <>
      <div className="fixed inset-0 z-100 flex items-center justify-center backdrop-filter backdrop-blur-lg">
        {/* Este div se utilizará para el fondo desenfocado */
     /*{ </div>
      <div className="fixed inset-0 z-101 flex flex-col items-center justify-center">
        {/* Contenedor principal del formulario */
      /* <div className="sm:mx-auto sm:w-full sm:max-w-sm p-6 h-32 bg-white rounded-lg shadow-lg"> }
          <img className="mx-auto h-10 w-auto" src={logo} alt="Mi Butaca" />
          <h1 className="text-center text-2xl font-bold text-fuchsia-900 mb-10">
            Recuperar Contraseña
          </h1>
          <p className="text-sm">
            Ingresa tu email para recuperar tu contraseña
          </p>
          <form>
            <input
              type="email"
              placeholder="ingresa_tu@email.com"
              name="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            <button
              className="flex w-full justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              type="submit"
              onClick={handleRecoverPassword}
              disabled={status === "loading"}
            >
              Enviar
            </button>
          </form>
          {status === "failed" && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PasswordRecover;
*/

