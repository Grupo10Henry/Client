//franco
import { useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import CategoryFilter from "./CategoryFilter"
import DateFilter from "./DateFilter"
import PriceFilter from "./PriceFilter"
import { instance } from "../../../axios/config"

import style from "./Filters.module.css"
import { useDispatch } from "react-redux"
import { setFilteredEvents } from "../../../redux/eventsSlice"

const Filters = () => {
  const [filters, setFilters] = useState({})
  const dispatch = useDispatch()

  const filterData = async (filters) => {
    try {
      const { data } = await instance.get("/event", {
        params: filters,
      })
      console.log(data)
      dispatch(setFilteredEvents(data))
      return data
    } catch (error) {
      console.log(error?.response?.data.error || error)
    }
  }

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
    </div>
  )
}
export default Filters
