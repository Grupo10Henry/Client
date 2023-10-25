import { useLocation } from "react-router-dom"
import Filters from "../Filters/Filters"
import SearchBar from "../SearchBar/SearchBar"
import Nav from "./Nav"

//franco
const Navbar = () => {
  const location = useLocation()

  return (
    <header>
      <Nav />
      <SearchBar />
      {location.pathname !== "/detail" && <Filters />}
    </header>
  )
}
export default Navbar
