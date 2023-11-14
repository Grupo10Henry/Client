import React from "react"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import styles from "./App.module.css"
import Cart from "./Components/User/Cart/CartPequeño"
import Contact from "./Components/User/Contact/Contact"
import Footer from "./Components/User/Footer/Footer"
import Login from "./Components/User/Login/Login"
import PasswordRecover from "./Components/User/Login/PasswordRecover"
import Navbar from "./Components/User/Navbar/Navbar"
import SignUp from "./Components/User/SignUp/SignUp"
import ScrollToTop from "./Components/UserAndAdmin/ScrollToTop"
import AdminHome from "./Pages/Admin/AdminHome/AdminHome"
import Booking from "./Pages/User/Booking/Booking"
import Detail from "./Pages/User/Detail/Detail"
import FAQ from "./Pages/User/FAQ/FAQ"
import Home from "./Pages/User/Home/Home"
import MyAccount from "./Pages/User/MyAccount/MyAccount"

import axios from "axios"
import { useDispatch } from "react-redux"
import AdminEventsDetail from "./Components/Admin/AdminEventsDetail/AdminEventsDetail"
import AdminFAQDetail from "./Components/Admin/AdminFAQDetail/AdminFAQDetail"
import Ticket from "./Components/User/MyAccount/Ticket/Ticket"
import NotFound from "./Components/User/NotFound/NotFound"
import { config } from "./axios/config"
import AuthGuardUser from "./guards/AuthGuard"
import { loginSuccess } from "./redux/userSlice"

import MercadoPagoExitoso from "./Components/User/Cart/mercadoPagoExitoso"
import MercadoPagoError from "./Components/User/Cart/mercadoPagoError"
import MercadoPagoPendiente from "./Components/User/Cart/mercadoPagoPendiente"
import AuthGuardAdmin from "./guards/AuthGuardAdmin"

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const allowedPaths = [
    "/admin",
    "/faq",
    "/reserva",
    "/carrito",
    "/micuenta",
    "/detalle",
    "/preguntas",
    "/evento",
    "/mercadopagoexitoso",
    "/mercadopagoerro",
    "/mercadopagopendiente",
  ]
  const allowedPathsFooter = ["/faq", "/reserva", "/carrito", "/detalle"]

  const shouldRenderNavbar = allowedPaths.some(
    (path) => location.pathname === path || location.pathname.includes(path)
  )

  const shouldRenderFooter =
    allowedPathsFooter.some(
      (path) => location.pathname === path || location.pathname.includes(path)
    ) && !location.pathname.startsWith("/admin")

  return (
    <div className={styles.App}>
      {(location.pathname === "/" || shouldRenderNavbar) && <Navbar />}
      <Contact />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthGuardUser />}>
          <Route path="/micuenta/:id" element={<MyAccount />} />
          <Route element={<AuthGuardAdmin />}>
            <Route path="/admin" element={<AdminHome />} />
          </Route>
        </Route>

        <Route path="/registro" element={<SignUp />} />
        <Route path="/iniciarsesion" element={<Login />} />
        <Route path="/detalle/:id" element={<Detail />} />
        <Route path="/reserva/:id" element={<Booking />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/ticket/:id" element={<Ticket />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/evento/:id" element={<AdminEventsDetail />} />
        <Route path="/preguntas/:id" element={<AdminFAQDetail />} />
        <Route path="/recuperarcontrasena" element={<PasswordRecover />} />
        <Route path="/mercadopagoexitoso" element={<MercadoPagoExitoso />} />
        <Route path="/mercadopagoerror" element={<MercadoPagoError />} />
        <Route
          path="/mercadopagopendiente"
          element={<MercadoPagoPendiente />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />

      {(location.pathname === "/" || shouldRenderFooter) && <Footer />}
    </div>
  )
}

export default App
