import Select from "../Select/Select"
import style from "./Filters.module.css"

const date = ["1/11/2024", "4/11/2024", "7/11/2024"]

const DateFilter = () => {
  return <Select data={date} title="Fecha" defaultOption="Todos" />
}
export default DateFilter
