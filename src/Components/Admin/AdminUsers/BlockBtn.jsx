import { useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { instance } from "../../../axios/config"
import { getAllUsers } from "../../../redux/userSlice"

import styles from "./AdminUsers.module.css"

const BlockBtn = ({ userID, email, getAllUsersData }) => {
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  const handleBlockUser = async (userID, email) => {
    setIsLoading(true)
    try {
      const response = await axios.post("http://localhost:3001/userBlocked", {
        userID,
        email,
      })

      console.log("Block user response:", response.data)

      alert("Se ha bloqueado al usuario correctamente")
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      alert(error?.response.data.error)
    }
    // Mover la llamada fuera del bloque try-catch para evitar repetición
    getAllUsersData().then((data) => dispatch(getAllUsers(data)))
  }

  return (
    <button
      className={styles.utablebuttonN}
      onClick={() => handleBlockUser(userID, email)}
    >
      {isLoading ? <div className={styles.loader}></div> : "Bloquear"}
    </button>
  )
}
export default BlockBtn
