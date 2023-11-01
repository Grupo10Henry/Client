import { useState } from "react"
import { handlerIsFilter } from "../redux/eventsSlice"
import { useDispatch } from "react-redux"

export const useSarchbar = (handlerFilter) => {
  const [input, setInput] = useState("")

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
    setInput("")
  }

  const handlerDeleteInput = () => {
    setInput("")
  }

  return { handlerChange, handlerSearch, handlerDeleteInput, input }
}
