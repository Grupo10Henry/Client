//franco
import { BsSearch } from "react-icons/bs"
import { useState } from "react"

import style from "./SearchBar.module.css"

const SearchBar = () => {
  const [input, setInput] = useState("")

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(input)
  }

  return (
    <div className={style.wrapper}>
      <form className={style.innerWrapper} onSubmit={handleSearch}>
        <button type="submit" className={style.icon}>
          <BsSearch />
        </button>
        <input
          type="search"
          placeholder="Buscá por nombre o ubicación del evento"
          className={style.input}
          value={input}
          onChange={handleChange}
        />
      </form>
    </div>
  )
}
export default SearchBar
