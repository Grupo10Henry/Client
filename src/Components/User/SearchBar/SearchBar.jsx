//franco
import { BsSearch } from "react-icons/bs"
const SearchBar = () => {
  return (
    <div>
      <div>
        <div>
          <BsSearch />
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
