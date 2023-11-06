import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"

import style from "./Menu.module.css"

const Menu = ({
  isAdmin,
  userId,
  isOpen,
  links,
  isLogged,
  handleLogout,
  handlerOpenContact,
}) => {
  const linksClass = isOpen ? style.showme : ""

  const renderLinks = links.map((link) => (
    <NavLink
      key={link.id}
      to={link.to}
      className={({ isActive }) => (isActive ? style.active : "")}
    >
      {link.text}
    </NavLink>
  ))
  return (
    <div className={`${style.menu} ${linksClass}`}>
      <div className={style.links}>
        {renderLinks}
        <button onClick={handlerOpenContact}>Contacto</button>
        {isAdmin && (
          <NavLink
            to="/admin"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Administrador
          </NavLink>
        )}
      </div>
      {isLogged ? (
        <div className={style.options}>
          <NavLink
            title="Mi perfil"
            to={`micuenta/${userId}`}
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
  )
}

export default Menu
