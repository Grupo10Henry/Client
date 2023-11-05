const Select = ({ onChange, data, title, defaultOption, isPrice }) => {
  const dataChange = isPrice ? data.map((item) => `$${item}`) : data

  return (
    <div className="w-full flex flex-col gap-2">
      <div htmlFor="price" className="text-[var(--turquesa)]">
        {title}
      </div>
      <select
        name="prices"
        id="prices"
        className="text-xs py-[11px] md:text-sm  rounded-md focus:ring-2 focus:ring-inset focus:ring-transparent focus:outline-none bg-[var(--negro)] text-slate-100"
      >
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
// border-[var(--lila-claro)]
