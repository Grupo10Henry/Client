import { useLocation } from "react-router-dom"
import Filters from "../Filters/Filters"
import Nav from "./Nav"

import style from "./Navbar.module.css"

//franco
const Navbar = () => {
  const location = useLocation()

  return (
    <header className={style.header}>
      <Nav />
      {location.pathname !== "/detail" && location.pathname !== "/faq" && (
        <Filters />
      )}
    </header>
  )
}
export default Navbar
