import React from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
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
import ScrollToTop from "./Components/UserAndAdmin/ScrollToTop"
import BookingSeats from "./Components/User/Booking/BookingSeats/BookingSeatsDemo"

import {instance, config} from "./axios/config"
import axios from "axios"
import NotFound from "./Components/User/NotFound/NotFound"

function App() {
  const location = useLocation()
  const navigate = useNavigate()

const getUserEmailFromGoogle = async (token) => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      return response.data.email;
    } catch (error) {
      console.error("Error al obtener el correo electrónico del usuario de Google", error);
      return null; // Manejo de error, puedes ajustar esto según tus necesidades
    }
  };
  

  const login = async (userData) => {
    const { email, password, token } = userData;
    const URL = "http://localhost:3001/login";
  
    try {
      // Comprobar si se proporciona un token en la URL
      const urlSearchParams = new URLSearchParams(window.location.search);
      const tokenFromURL = urlSearchParams.get("token");
  
      let userEmail = email;
  
      if (tokenFromURL) {
        // Si hay un token en la URL, obtén el correo electrónico del usuario desde Google
        userEmail = await getUserEmailFromGoogle(tokenFromURL);
        if (!userEmail) {
          // Manejo de error, puedes mostrar un mensaje o redirigir al usuario
          alert("Error al obtener el correo electrónico del usuario.");
          return;
        }
      }
  
      // Incluir el token en el cuerpo de la solicitud si se encuentra en la URL
      const requestBody = tokenFromURL
        ? { email, password, token: tokenFromURL }
        : { email, password };
  
      console.log("Datos de la solicitud POST:", requestBody);
  
      const response = await axios.post(URL, requestBody);
      const responseData = response.data;
  
      if (responseData.token) {
        localStorage.setItem("token", responseData.token.token);
  
        // Aquí verifica la propiedad isAdmin
        const isAdmin = responseData.token.isAdmin;
        localStorage.setItem("isAdmin", isAdmin);
  
        console.log("isAdmin:", isAdmin);
  
        if (isAdmin) {
          navigate("/admin");
        } else {
          navigate("/");
        }
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error(error);
      alert("Error en el inicio de sesión");
    }
  };
  
  

    
        
        
    

  const allowedPaths = [
    "/admin",
    "/faq",
    "/reserva",
    "/carrito",
    "/micuenta",
    "/detalle",
  ]
  const shouldRenderNavbar = allowedPaths.some(
    (path) => location.pathname === path || location.pathname.includes(path)
  )

  const shouldRenderFooter = allowedPaths.some(
    (path) => location.pathname === path || location.pathname.includes(path)
  ) && !location.pathname.startsWith("/admin");

  return (
    <div className={styles.App}>
      {(location.pathname === "/" || shouldRenderNavbar) && <Navbar />}
      <Contact />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path="/iniciarsesion" element={<Login login={login} />} />
        <Route path="/detalle/:id" element={<Detail />} />
        <Route path="/reserva/:id" element={<Booking />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/micuenta/:id" element={<MyAccount />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/recuperarcontrasena" element={<PasswordRecover />} />
        <Route path="/reserva/seats" element={<BookingSeats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
      
      {(location.pathname === "/" || shouldRenderFooter) && <Footer />}

    </div>
  )
}

export default App
