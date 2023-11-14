import { PiSignOutBold, PiUserBold } from "react-icons/pi"
import { BiHomeAlt2 } from "react-icons/bi"
import {
  BiCart,
  BiMessageAltDetail,
  BiPhone,
  BiBarChartSquare,
  BiArrowFromLeft,
  BiUserPlus,
} from "react-icons/bi"
import { NavLink } from "react-router-dom"

import style from "./Menu.module.css"

let links = [
  { id: 1, text: "Inicio", to: "/", icon: <BiHomeAlt2 /> },
  {
    id: 2,
    text: "Preguntas frecuentes",
    to: "/faq",
    icon: <BiMessageAltDetail />,
  },
]

const Menu = ({
  isAdmin,
  userInfo,
  token,
  isOpen,

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
      {link.icon}
      <p>{link.text}</p>
    </NavLink>
  ))
  return (
    <div className={`${style.menu} ${linksClass}`}>
      <div className={style.links}>
        {renderLinks}
        <button onClick={handlerOpenContact}>
          <BiPhone />
          <p>Contacto</p>
        </button>
        {isAdmin && (
          <NavLink
            to="/admin"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            <BiBarChartSquare />
            <p>Administrador</p>
          </NavLink>
        )}
      </div>
      {token ? (
        <div className={style.options}>
          <NavLink
            title="Mi perfil"
            to={`micuenta/${userInfo?.userID}`}
            className={style.optionsBtn}
          >
            <PiUserBold className={style.profile} />
            <p>{userInfo?.name}</p>
          </NavLink>
          <button onClick={handleLogout} className={style.optionsBtn}>
            <PiSignOutBold />
            <p>Salir</p>
          </button>
          <NavLink className={style.optionsBtn} to="/carrito">
            <BiCart />
            <p>Carrito</p>
          </NavLink>
        </div>
      ) : (
        <div className={style.options}>
          <NavLink to="iniciarsesion" className={style.optionsBtn}>
            <BiArrowFromLeft />
            <p>Iniciar Sesión</p>
          </NavLink>
          <NavLink to="registro" className={style.optionsBtn}>
            <BiUserPlus />
            <p>Registrarse</p>
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Menu
