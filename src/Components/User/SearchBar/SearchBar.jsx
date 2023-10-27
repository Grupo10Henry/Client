//franco
import { BsSearch } from "react-icons/bs"
import { useState } from "react"

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
    <div className="w-full h-full flex flex-col gap-2">
      <div>Buscar:</div>
      <form
        className="flex flex-row items-center justify-center  ring-1 ring-[#282828]"
        onSubmit={handleSearch}
      >
        <input
          type="search"
          placeholder="Ingresa el nombre o la ubicación del evento"
          className="flex-auto bg-transparent  border-none text-xs focus:ring-transparent "
          value={input}
          onChange={handleChange}
        />
        <button type="submit" className="w-[40px]  p-3 rounded-sm">
          <BsSearch />
        </button>
      </form>
    </div>
  )
}
export default SearchBar
