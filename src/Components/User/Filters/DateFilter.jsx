const date = ["1/11/2024", "4/11/2024", "7/11/2024"]

const DateFilter = () => {
  return (
    <div>
      DateFilter
      <select name="date" id="date">
        {date.map((d, idx) => (
          <option key={idx}>{d}</option>
        ))}
      </select>
      {/* me traigo todas las fechas de todos los eventos, y los pongo en un select */}
    </div>
  )
}
export default DateFilter
