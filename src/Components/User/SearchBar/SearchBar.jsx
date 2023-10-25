//franco
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"
const SearchBar = () => {
  return (
    <div>
      <div>
        <div>
          <HiOutlineMagnifyingGlass />
        </div>
        <input
          type="search"
          placeholder="Buscá por nombre o ubicación del evento"
        />
      </div>
    </div>
  )
}
export default SearchBar
