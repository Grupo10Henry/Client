//franco
import { useEffect, useState } from "react"
import { RiFilterOffFill } from "react-icons/ri"
import { instance } from "../../../axios/config"
import SearchBar from "../SearchBar/SearchBar"
import CategoryFilter from "./CategoryFilter"
import DateFilter from "./DateFilter"
import PriceFilter from "./PriceFilter"
import { useDispatch, useSelector } from "react-redux"
import {
  handlerIsLoading,
  handlerReset,
  setFilteredEvents,
} from "../../../redux/eventsSlice"

import style from "./Filters.module.css"

const Filters = () => {
  const [filters, setFilters] = useState({})
  const { reset } = useSelector((s) => s.events)

  const dispatch = useDispatch()

  // pedimos al back con los filtros
  const filterData = async (filters) => {
    try {
      dispatch(handlerIsLoading(true))
      const { data } = await instance.get("/event", {
        params: filters,
      })
      dispatch(setFilteredEvents(data))
      dispatch(handlerIsLoading(false))
      console.log(data)
      return data
    } catch (error) {
      dispatch(handlerIsLoading(false))
      console.log(error?.response?.data.error || error)
    }
  }

  //funcion para filtrar
  const handlerFilter = async (name, value) => {
    try {
      const updatedFilters = { ...filters, [name]: value }
      setFilters(updatedFilters)
      console.log("filters:", updatedFilters)

      const data = await filterData(updatedFilters)
      // console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const areFiltersActive = Object.values(filters).some((value) => value !== "")

  useEffect(() => {
    if (reset) setFilters({})
  }, [reset])

  return (
    <div className={style.filters}>
      {areFiltersActive && (
        <div className={style.filtersReset}>
          <button
            onClick={() => dispatch(handlerReset())}
            className={style.filtersBtn}
            title="Limpiar filtros"
          >
            <b>Limpiar filtros</b>
            <RiFilterOffFill />
          </button>
        </div>
      )}

      <div className={style.filtersContainer}>
        <SearchBar handlerFilter={handlerFilter} />
        <CategoryFilter handlerFilter={handlerFilter} />
        <DateFilter handlerFilter={handlerFilter} />
        <PriceFilter handlerFilter={handlerFilter} />
      </div>
    </div>
  )
}
export default Filters
