import { useState } from "react"
import styles from "./AdminUsers.module.css"
import axios from "axios"
import { instance } from "../../../axios/config"
import { useDispatch } from "react-redux"
import { getAllUsers } from "../../../redux/userSlice"

const UnblockBtn = ({ userID, getAllUsersData }) => {
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  const handleUnblockUser = async (userID) => {
    setIsLoading(true)
    try {
      const response = await instance.delete(`/userBlocked/${userID}`) // axios.delete(`http://localhost:3001/userBlocked/${userID}`) | instance.delete(`/userBlocked/${userID}`)
      console.log(response)

      setIsLoading(false)

      // alert("Se ha desbloqueado al usuario correctamente")
      Swal.fire({
        title: "Se ha desbloqueado al usuario correctamente",
        icon: "success"
      });
    } catch (error) {
      setIsLoading(false)
      alert(error)
    }
    // Mover la llamada fuera del bloque try-catch para evitar repetición
    getAllUsersData().then((data) => dispatch(getAllUsers(data)))
  }

  return (
    <button
      className={styles.utablebutton}
      onClick={() => handleUnblockUser(userID)}
    >
      {isLoading ? <div className={styles.loader}></div> : "Desbloquear"}
    </button>
  )
}
export default UnblockBtn
