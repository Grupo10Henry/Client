import { NavLink } from "react-router-dom"
import { useState } from "react"
import { HiOutlineUserCircle } from "react-icons/hi2"

import style from "./Navbar.module.css"

const Nav = () => {
  const [isLogged, setIsLogged] = useState(true)

  return (
    <nav className={style.nav}>
      <div>
        <NavLink to="/">Contacto</NavLink>
        <NavLink to="/">FAQ</NavLink>
      </div>
      <div>
        {isLogged ? (
          <NavLink to="/">
            <HiOutlineUserCircle title="mi cuenta" />
          </NavLink>
        ) : (
          <>
            <NavLink to="/signup">Registro</NavLink>
            <NavLink to="/login">Iniciar sesión</NavLink>
          </>
        )}
      </div>
    </nav>
  )
}
export default Nav
