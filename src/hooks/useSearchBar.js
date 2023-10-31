import { useState } from "react"

export const useSarchbar = (handlerFilter) => {
  const [input, setInput] = useState("")

  const handlerChange = (e) => {
    setInput(e.target.value)
  }

  const handlerSearch = (e) => {
    e.preventDefault()
    if (input.trim().length === 0) {
      alert("Por favor, ingresa algo")
      return
    }
    handlerFilter(input)
    console.log("pidiendo a back:", input)
  }

  const handlerDeleteInput = () => {
    setInput("")
  }

  return { handlerChange, handlerSearch, handlerDeleteInput, input }
}
