import { Link } from "react-router-dom"
import logoWhite from "../../../assets/logo_mi_butaca_blanco.svg"

import style from "./Logo.module.css"

const Logo = () => {
  return (
    <Link to="/" className={style.logo}>
      <img src={logoWhite} alt="imagen logo blanco mi butaca" />
    </Link>
  )
}
export default Logo
