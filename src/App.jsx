import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/User/Home/Home';
import SignUp from './Components/User/SignUp/SignUp';
import styles from './App.module.css';
import Navbar from "./Components/User/Navbar/Navbar"
import AdminNavbar from './Components/Admin/AdminNavbar/AdminNavbar';
import MyAccount from './Pages/User/MyAccount/MyAccount';
import AdminEvents from './Pages/Admin/AdminEvents/AdminEvents';
import AdminLogin from './Pages/Admin/AdminLogin/AdminLogin';
import AdminUsers from './Pages/Admin/AdminUsers/AdminUsers';
import AdminEventsCreate from './Pages/Admin/AdminEventsCreate/AdminEventsCreate';
import UserLogin from './Components/User/UserLogin/UserLogin';
import Detail from "./Pages/User/Detail/Detail";
import Booking from "./Pages/User/Booking/Booking";
import Cart from "./Components/User/Cart/Cart";


function App() {

  const location = useLocation();

  return (
    <div className={styles.App}>
        <Navbar />
        {location.pathname === "/adminevents" ||
        location.pathname === "/admineventscreate" ||
        location.pathname === "/adminusers"
        ? <AdminNavbar /> : null}
        {/* Pendiente rutas de Admin de Guada: FAQ, Reviews, Login. Rutas: "/adminfooter", "/adminfaq", "/adminreviews" */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<SignUp />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/detalledelevento" element={<Detail />} />
          <Route path="/reserva" element={<Booking />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/myaccount/:id" element={<MyAccount />} />
          <Route path="/adminevents" element={<AdminEvents />} />
          <Route path="/admineventscreate" element={<AdminEventsCreate />} />
          <Route path="/adminusers" element={<AdminUsers />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
    </div>
  )
}

export default App
