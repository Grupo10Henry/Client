import { Link, NavLink, useLocation } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { BsList, BsXLg } from "react-icons/bs"
import { Context } from "../../../Context/Context"
import logoWhite from "../../../assets/logo_mi_butaca_blanco.svg"

import style from "./Navbar.module.css"

const linksItems = [
  { id: 1, text: "Inicio", to: "/" },
  { id: 2, text: "Iniciar sesión", to: "/iniciarsesion" },
  { id: 3, text: "Registrarse", to: "/registro" },
  { id: 4, text: "Preguntas frecuentes", to: "/faq" },
]

const Nav = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const location = useLocation()
  const { view, contactTrue } = useContext(Context)
  const linksClass = isOpen && style.showme

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    view && setIsOpen(false)
  }, [view])

  const handlerOpenContact = () => contactTrue()

  return (
    <nav className={style.nav}>
      <Link to="/" className={style.logo}>
        <img src={logoWhite} alt="imagen logo blanco mi butaca" />
      </Link>
      <button
        className={`${style.icon} ${style.iconToggle}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <BsXLg /> : <BsList />}
      </button>
      {/* menu */}
      <div className={`${style.links} ${linksClass}`}>
        {isLogged && (
          <NavLink
            to="/micuenta/:id"
            title="mi cuenta"
            className={({ isActive }) => isActive && style.active}
          >
            Mi cuenta
          </NavLink>
        )}
        {!isLogged &&
          linksItems.map((link) => (
            <NavLink
              key={link.id}
              to={link.to}
              className={({ isActive }) => isActive && style.active}
            >
              {link.text}
            </NavLink>
          ))}
        <button onClick={handlerOpenContact}>Contacto</button>
      </div>
    </nav>
  )
}
export default Nav
