import { BsList, BsXLg } from "react-icons/bs"
import { useSelector } from "react-redux"
import useNav from "../../../hooks/useNav"
import Logo from "../Logo/Logo"
import Menu from "../Menu/Menu"

import { isAuthenticated } from "../../../utils/auth"
import style from "./Navbar.module.css"

const Nav = () => {
  const { isOpen, setIsOpen, handlerOpenContact, handleLogout, links } =
    useNav()
  const { isAdmin, userInfo } = useSelector((s) => s.user)

  const isAuth = isAuthenticated()

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
        isAdmin={isAdmin}
        userInfo={userInfo}
        token={isAuth}
        isOpen={isOpen}
        links={links}
        handleLogout={handleLogout}
        handlerOpenContact={handlerOpenContact}
      />
    </nav>
  )
}
export default Nav
