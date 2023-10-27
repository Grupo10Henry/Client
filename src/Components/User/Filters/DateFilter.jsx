import style from "./Filters.module.css"

const date = ["1/11/2024", "4/11/2024", "7/11/2024"]

const DateFilter = () => {
  return (
    <div className={style.filterWrapper}>
      <label htmlFor="date">Fecha</label>
      <select name="date" id="date">
        <option>Todos</option>
        {date.map((d, idx) => (
          <option key={idx}>{d}</option>
        ))}
      </select>
    </div>
  )
}
export default DateFilter
