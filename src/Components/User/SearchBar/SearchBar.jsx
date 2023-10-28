//franco
import { BiSearch } from "react-icons/bi"
import { MdCancel } from "react-icons/md"
import { useState } from "react"

import style from "./SearchBar.module.css"

const SearchBar = ({ handlerFilter }) => {
  const [input, setInput] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    handlerFilter({ newProp: "search", value: input })
  }

  const handleDeleteInput = () => setInput("")

  return (
    <div className={style.wrapper}>
      <h6 className={style.title}>Buscar</h6>
      {/* form */}
      <form className={style.form} onSubmit={handleSearch}>
        <input
          type="text"
          className={style.input}
          placeholder="Nombre o ubicación"
          onChange={handleChange}
          value={input}
        />
        {input.trim().length > 0 && (
          <button
            className={`${style.btn} ${style.btnDelete}`}
            title="borrar"
            onClick={handleDeleteInput}
          >
            <MdCancel />
          </button>
        )}

        <button className={style.btn} title="buscar">
          <BiSearch />
        </button>
      </form>
    </div>
  )
}
export default SearchBar
