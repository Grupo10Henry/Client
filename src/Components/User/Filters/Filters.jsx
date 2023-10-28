//franco
import { useState } from "react"
import CategoryFilter from "./CategoryFilter"
import DateFilter from "./DateFilter"
import PriceFilter from "./PriceFilter"
import SearchBar from "../SearchBar/SearchBar"
import axios from "axios"

import style from "./Filters.module.css"

const Filters = () => {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    date: "",
    price: "",
  })

  const handlerFilter = ({ newProp, value }) => {
    setFilters({
      ...filters,
      [newProp]: value,
    })
  }

  const handlerApplyFilter = async () => {
    console.log(filters)
    try {
      const { data } = await axios.get("http://localhost:3001/event", {
        params: filters,
      })
      console.log(data)
    } catch (error) {
      console.log(error.response?.data.error)
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
      <div className={style.btnWrapper}>
        {Object.values(filters).length > 0 && (
          <button className={style.btn} onClick={handlerApplyFilter}>
            Aplicar filtros
          </button>
        )}
      </div>
    </div>
  )
}
export default Filters
