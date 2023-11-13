import { useNavigate } from "react-router-dom"
import notFoundGif from "../../../assets/notfound.gif"

import style from "./NotFound.module.css"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className={style.notFoundContainer}>
      <button onClick={() => navigate("/")}>
        Volver a la página principal
        <span role="img" aria-label="emoji">
          🏠
        </span>
      </button>
      <img src={notFoundGif} alt="" />
    </div>
  )
}
export default NotFound
