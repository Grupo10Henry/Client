import { useContext, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { Context } from "../Context/Context"
import { userLogout } from "../redux/userSlice"
import Swal from "sweetalert2"

const useNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const { view, contactTrue } = useContext(Context)

  //close menu when change route
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    view && setIsOpen(false)
  }, [view])

  const handlerOpenContact = () => contactTrue()

  const handlerActionConfirmed = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("isAdmin")
    dispatch(userLogout())
    navigate("/")
  }

  const showAlert = () => {
    Swal.fire({
      title: "¿Deseas cerrar sesión?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Salir",
      backdrop: true,
      color: "var(--negro)",
      background: "#efefef",
      confirmButtonColor: "var(--turquesa)",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Sesión cerrada!",
          confirmButtonColor: "var(--turquesa)",
        }).then((result) => {
          if (result.isConfirmed) {
            handlerActionConfirmed()
          }
        })
      }
    })
  }

  const handleLogout = () => {
    showAlert()
    setIsOpen(false)
  }

  return { isOpen, setIsOpen, handlerOpenContact, handleLogout }
}

export default useNav
