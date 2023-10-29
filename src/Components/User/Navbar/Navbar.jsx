import { useLocation } from "react-router-dom"
import Filters from "../Filters/Filters"
import Nav from "./Nav"

import style from "./Navbar.module.css"

//franco
const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <header className={style.header}>
      <Nav />
      {pathname === "/" && <Filters />}
    </header>
  )
}
export default Navbar
