import { BsList, BsXLg } from "react-icons/bs"
import { Link, NavLink, useNavigate } from "react-router-dom"
import logoWhite from "../../../assets/logo_mi_butaca_blanco.svg"
import useNav from "../../../hooks/useNav"

import style from "./Navbar.module.css"

const Nav = () => {
  const { isOpen, setIsOpen, handlerOpenContact, links } = useNav()

  const linksClass = isOpen && style.showme

  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token")
    // Realiza alguna acción adicional, como redirigir a otra página después de eliminar el token
    navigate("/") // Cambia '/nuevaruta' por la ruta a la que deseas redirigir
  }

  const isLogged = localStorage.getItem("token")

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
      <div className={`${style.menu} ${linksClass}`}>
        <div className={style.links}>
          {links.map((link) => (
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
        {isLogged ? (
          <div className={style.options}>
            <NavLink
              title="Mi perfil"
              to={`micuenta/2`}
              className={style.optionsBtn}
            >
              Mi perfil
            </NavLink>
            <button onClick={handleLogout} className={style.optionsBtn}>
              Salir
            </button>
          </div>
        ) : (
          <div className={style.options}>
            <NavLink to="iniciarsesion" className={style.optionsBtn}>
              Iniciar sesión
            </NavLink>
            <NavLink to="registro" className={style.optionsBtn}>
              Registrarse
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Nav
