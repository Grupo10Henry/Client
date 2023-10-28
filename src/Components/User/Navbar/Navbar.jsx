import { useLocation } from "react-router-dom"
import Filters from "../Filters/Filters"
import Nav from "./Nav"

import style from "./Navbar.module.css"

//franco
const Navbar = () => {
  const { pathname } = useLocation()
  const showme =
    !pathname.includes("/detail") &&
    pathname !== "/faq" &&
    pathname !== "/detail"

  return (
    <header className={style.header}>
      <Nav />
      {showme && <Filters />}
    </header>
  )
}
export default Navbar
