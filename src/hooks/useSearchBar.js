import { useEffect, useState } from "react"
import { handlerIsFilter } from "../redux/eventsSlice"
import { useDispatch, useSelector } from "react-redux"

export const useSarchbar = (handlerFilter, resetPropFilters) => {
  const [input, setInput] = useState("")
  const { reset } = useSelector((s) => s.events)

  const dispatch = useDispatch()

  const handlerChange = (e) => {
    setInput(e.target.value)
  }

  const handlerSearch = (e) => {
    e.preventDefault()
    if (input.trim().length === 0) {
      alert("Por favor, ingresa algo")
      return
    }
    console.log("pidiendo a back:", input)
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
