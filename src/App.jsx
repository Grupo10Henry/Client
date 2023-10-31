import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import styles from "./App.module.css"
import Cart from "./Components/User/Cart/Cart"
import Contact from "./Components/User/Contact/Contact"
import Navbar from "./Components/User/Navbar/Navbar"
import MyAccount from "./Pages/User/MyAccount/MyAccount"
import Login from "./Components/User/Login/Login"
import AdminHome from "./Pages/Admin/AdminHome/AdminHome"
import SignUp from "./Components/User/SignUp/SignUp"
import Booking from "./Pages/User/Booking/Booking"
import Home from "./Pages/User/Home/Home"
import PasswordRecover from "./Components/User/Login/PasswordRecover"
import Detail from "./Pages/User/Detail/Detail"
import Footer from "./Components/User/Footer/Footer"
import FAQ from "./Pages/User/FAQ/FAQ"

import axios from "axios"
import Reviews from "./Components/User/Reviews/Reviews"

function App() {
  const location = useLocation()

  /* La función login deberá verificar el email y el password del usuario en la ruta http://localhost:3001/login/ 
   Si e usuario existe, deberá verificar si el usuario es admin true o false en http://localhost:3001/user  
    Si es admin, deberá redirigir a la ruta /admin
    Si no es admin, deberá redirigir a la ruta /micuenta/:id
    si no existe deberá mostrar un mensaje de error
    en ambos casos, deberá guardar el token en localStorage
  */

  async function login(userData) {
    const { email, password } = userData
    const URL = "http://localhost:3001/login/"

    try {
      const response = await axios.post(URL, { email, password })
      const token = response.data

      if (token) {
        localStorage.setItem("token", token)

        const userResponse = await axios.get("http://localhost:3001/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const user = userResponse.data

        if (user.isAdmin) {
          window.location.href = "/admin"
        } else {
          window.location.href = "/"
        }
      } else {
        alert("Usuario o contraseña incorrectos")
      }
    } catch (error) {
      console.error(error) // Muestra la respuesta del servidor en la consola
      alert("Error en el inicio de sesión")
    }
  }

  return (
    <div className={styles.App}>
      {(location.pathname === "/" ||
        location.pathname === "/admin" ||
        location.pathname === "/faq" ||
        location.pathname.includes("/detalle")) && <Navbar />}
      <Contact />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path="/iniciarsesion" element={<Login login={login} />} />
        <Route path="/detalle/:id" element={<Detail />} />
        <Route path="/reserva" element={<Booking />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/micuenta/:id" element={<MyAccount />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/recuperarcontrasena" element={<PasswordRecover />} />
        <Route path="/reviews" element={<Reviews/>}/>
      </Routes>
      {location.pathname === "admin" ? null : <Footer />}
    </div>
  )
}

export default App
