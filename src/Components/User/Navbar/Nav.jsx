import { BsList, BsXLg } from "react-icons/bs"
import useNav from "../../../hooks/useNav"
import Logo from "../Logo/Logo"

import Menu from "../Menu/Menu"
import style from "./Navbar.module.css"

const Nav = () => {
  const { isOpen, setIsOpen, handlerOpenContact, handleLogout, links } =
    useNav()

  const isLogged = localStorage.getItem("token")

  return (
    <nav className={style.nav}>
      <Logo />
      <button
        className={`${style.icon} ${style.iconToggle}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <BsXLg /> : <BsList />}
      </button>

      <Menu
        isOpen={isOpen}
        links={links}
        isLogged={isLogged}
        handleLogout={handleLogout}
        handlerOpenContact={handlerOpenContact}
      />
    </nav>
  )
}
export default Nav
