//franco
import CategoryFilter from "./CategoryFilter"
import DateFilter from "./DateFilter"
import PriceFilter from "./PriceFilter"

import style from "./Filters.module.css"

const Filters = () => {
  return (
    <div className={style.filters}>
      <CategoryFilter />
      <DateFilter />
      <PriceFilter />
    </div>
  )
}
export default Filters
