import { Link, NavLink } from "react-router-dom"
import { useState } from "react"
import {
  BsFillQuestionCircleFill,
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsList,
  BsXLg,
} from "react-icons/bs"
import logoColor from "../../../assets/logo_mi_butaca_color.svg"

import style from "./Navbar.module.css"

const Nav = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const linksClass = isOpen && style.showme

  return (
    <nav className={style.nav}>
      <Link to="/" className={style.logo}>
        <img src={logoColor} alt="imagen logo mi butaca" />
      </Link>
      <button
        className={`${style.icon} ${style.iconToggle}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <BsXLg /> : <BsList />}
      </button>

      <div className={`${style.links} ${linksClass}`}>
        {isLogged ? (
          <NavLink to="/account" title="mi cuenta" className={style.link}>
            Mi cuenta
          </NavLink>
        ) : (
          <>
            <NavLink to="/login" className={style.link}>
              Iniciar sesión
            </NavLink>
            <NavLink to="/signup" className={style.link}>
              Registro
            </NavLink>
          </>
        )}
        <NavLink to="/contact" title="contacto" className={style.link}>
          Contacto
        </NavLink>
        <NavLink to="/faq" title="preguntas frecuentes" className={style.link}>
          FAQ
        </NavLink>
      </div>
    </nav>
  )
}
export default Nav
