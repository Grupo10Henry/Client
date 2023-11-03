//franco
import { RiFilterOffFill } from "react-icons/ri"
import SearchBar from "../SearchBar/SearchBar"
import CategoryFilter from "./CategoryFilter"
import DateFilter from "./DateFilter"
import PriceFilter from "./PriceFilter"
import useFilters from "../../../hooks/useFilters"

import style from "./Filters.module.css"

const Filters = () => {
  const { isFilter, handlerFilter, resetPropFilters, handlerCleanFilters } =
    useFilters()

  return (
    <div className={style.filters}>
      {isFilter && (
        <div className={style.filtersReset}>
          <button
            onClick={handlerCleanFilters}
            className={style.filtersBtn}
            title="Limpiar filtros"
          >
            <b>Limpiar filtros</b>
            <RiFilterOffFill />
          </button>
        </div>
      )}

      <div className={style.filtersContainer}>
        <SearchBar
          handlerFilter={handlerFilter}
          resetPropFilters={resetPropFilters}
        />
        <CategoryFilter handlerFilter={handlerFilter} />
        <DateFilter handlerFilter={handlerFilter} />
        <PriceFilter handlerFilter={handlerFilter} />
      </div>
    </div>
  )
}
export default Filters
