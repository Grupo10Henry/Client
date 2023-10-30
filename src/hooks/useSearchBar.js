import { useState } from "react"

export const useSarchbar = (handlerFilter, handlerApplyFilter) => {
  const [input, setInput] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (input.trim().length === 0) {
      alert("Por favor, ingresa algo")
      return
    }
    handlerFilter({ newProp: "search", value: input })
    handlerApplyFilter()
  }

  const handleDeleteInput = () => {
    setInput("")
    handlerFilter({ newProp: "search", value: "" })
  }

  return { handleChange, handleSearch, handleDeleteInput, input }
}
