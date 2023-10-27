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
      <div className="text-[var(--turquesa)]">Buscar</div>
      <form
        className="flex flex-row items-center justify-center  ring-1 ring-[#282828] rounded-md "
        onSubmit={handleSearch}
      >
        <input
          type="search"
          placeholder="Ingresa el nombre o la ubicación"
          className="flex-auto bg-transparent text-[var]  border-none text-xs focus:ring-transparent md:text-sm placeholder:text-[var(--negro)] placeholder:opacity-50 overflow-hidden"
          value={input}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-[50px] flex items-center justify-center  p-3 rounded-md border-l-[1px] border-[var(--negro)] hover:bg-slate-50 transition"
        >
          <BsSearch />
        </button>
      </form>
    </div>
  )
}
export default SearchBar
