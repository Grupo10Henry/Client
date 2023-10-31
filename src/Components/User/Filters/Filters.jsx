//franco
import { useState } from "react"
import { instance } from "../../../axios/config"
import SearchBar from "../SearchBar/SearchBar"
import CategoryFilter from "./CategoryFilter"
import DateFilter from "./DateFilter"
import PriceFilter from "./PriceFilter"
import { useDispatch } from "react-redux"
import {
  handlerIsLoading,
  handlerReset,
  setFilteredEvents,
} from "../../../redux/eventsSlice"

import style from "./Filters.module.css"

const Filters = () => {
  const [filters, setFilters] = useState({})

  const dispatch = useDispatch()

  // pedimos al back con los filtros
  const filterData = async (filters) => {
    try {
      dispatch(handlerIsLoading(true))
      const { data } = await instance.get("/event", {
        params: filters,
      })
      // console.log(data)
      dispatch(setFilteredEvents(data))
      dispatch(handlerIsLoading(false))
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

  return (
    <div className={style.container}>
      <div className={style.filters}>
        <SearchBar handlerFilter={handlerFilter} />
        <CategoryFilter handlerFilter={handlerFilter} />
        <DateFilter handlerFilter={handlerFilter} />
        <PriceFilter handlerFilter={handlerFilter} />
      </div>
      <button onClick={() => dispatch(handlerReset())}>Reset</button>
    </div>
  )
}
export default Filters
