//franco
import CategoryFilter from "./CategoryFilter"
import DateFilter from "./DateFilter"
import PriceFilter from "./PriceFilter"

import SearchBar from "../SearchBar/SearchBar"

const Filters = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 my-36  md:flex-row px-5">
      <SearchBar />
      <CategoryFilter />
      <DateFilter />
      <PriceFilter />
    </div>
  )
}
export default Filters
