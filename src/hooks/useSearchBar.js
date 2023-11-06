import { useEffect, useState } from "react"
import { handlerIsFilter } from "../redux/eventsSlice"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"

export const useSarchbar = (handlerFilter, resetPropFilters) => {
  const [input, setInput] = useState("")
  const { reset } = useSelector((s) => s.events)

  const dispatch = useDispatch()

  const notify = () =>
    Swal.fire({
      title: "Por favor ingresa algo",
      icon: "warning",
      iconColor: "var(--danger)",
      confirmButtonColor: "var(--turquesa)",
    })
  const handlerChange = (e) => {
    setInput(e.target.value)
  }

  const handlerSearch = (e) => {
    e.preventDefault()
    if (input.trim().length === 0) {
      notify()

      return
    }
    handlerFilter("search", input)
    dispatch(handlerIsFilter())
  }

  const handlerDeleteInput = () => {
    setInput("")
    resetPropFilters({ propToDelete: "search" })
  }

  useEffect(() => {
    if (reset) {
      setInput("")
    }
  }, [reset])

  return { handlerChange, handlerSearch, handlerDeleteInput, input }
}
