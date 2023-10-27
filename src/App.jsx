import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import styles from "./App.module.css"
import Cart from "./Components/User/Cart/Cart"
import Contact from "./Components/User/Contact/Contact"
import Navbar from "./Components/User/Navbar/Navbar"
import MyAccount from './Pages/User/MyAccount/MyAccount';
import Login from './Components/User/Login/Login';
import AdminHome from './Pages/Admin/AdminHome/AdminHome';
import SignUp from "./Components/User/SignUp/SignUp"
import Booking from "./Pages/User/Booking/Booking"
import Home from "./Pages/User/Home/Home"
import PasswordRecover from "./Components/User/Login/PasswordRecover"
import Detail from "./Pages/User/Detail/Detail"
import Footer from "./Components/User/Footer/Footer"
import FAQ from "./Pages/User/FAQ/FAQ"



function App() {
  const location = useLocation()

  return (
    <div className={styles.App}>

        <Navbar />
        <Contact />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<SignUp />} />
          <Route path="/iniciarsesion" element={<Login />} />
          <Route path="/detalle/:id" element={<Detail />} />
          <Route path="/reserva" element={<Booking />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/micuenta/:id" element={<MyAccount />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/recuperarcontrasena" element={<PasswordRecover />} />
        </Routes>
        {location.pathname === "admin" ? null : <Footer />}
    </div>
  )
}

export default App
