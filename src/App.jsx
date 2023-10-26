import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import styles from "./App.module.css"
import Cart from "./Components/User/Cart/Cart"
import Contact from "./Components/User/Contact/Contact"
import Navbar from "./Components/User/Navbar/Navbar"
import SignUp from "./Components/User/SignUp/SignUp"
import UserLogin from "./Components/User/UserLogin/UserLogin"
import AdminHome from "./Pages/Admin/AdminHome/AdminHome"
import Booking from "./Pages/User/Booking/Booking"
import Detail from "./Pages/User/Detail/Detail"
import Home from "./Pages/User/Home/Home"
import MyAccount from "./Pages/User/MyAccount/MyAccount"

function App() {
  const location = useLocation()

  return (
    <div className={styles.App}>
      <Navbar />
      <Contact />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<SignUp />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/detalledelevento" element={<Detail />} />
        <Route path="/reserva" element={<Booking />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/myaccount/:id" element={<MyAccount />} />
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </div>
  )
}

export default App
