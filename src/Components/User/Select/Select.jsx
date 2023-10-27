const Select = ({ onChange, data, title, defaultOption, isPrice }) => {
  const dataChange = isPrice ? data.map((item) => `$${item}`) : data

  return (
    <div className="w-full flex flex-col gap-2">
      <div htmlFor="price">{title}</div>
      <select name="prices" id="prices" className="text-xs py-3 md:text-sm">
        <option value={defaultOption}>{defaultOption}</option>
        {dataChange.map((el, idx) => (
          <option key={idx} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  )
}
export default Select
