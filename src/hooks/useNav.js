import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Context } from "../Context/Context"

const useNav = () => {
  const [isOpen, setIsOpen] = useState(false)

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

  // const linksVisitant = [
  //   { id: 1, text: "Inicio", to: "/" },
  //   { id: 4, text: "Preguntas frecuentes", to: "/faq" },
  // ]

  // const linksUser = [
  //   { id: 1, text: "Inicio", to: "/" },
  //   { id: 2, text: "Preguntas frecuentes", to: "/faq" },
  // ]

  let links = [
    { id: 1, text: "Inicio", to: "/" },
    { id: 2, text: "Preguntas frecuentes", to: "/faq" },
  ]

  return { isOpen, setIsOpen, handlerOpenContact, links }
}

export default useNav
