import { useState } from "react"

import style from "./Filters.module.css"

const PriceFilter = () => {
  const prices = [0, 20000, 50000, 100000, 350000, 450000]

  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor="price">Precio:</label>
      <select name="prices" id="prices">
        <option value="Todos">Todos</option>
        {prices.map((price, idx) => (
          <option key={idx} value={price}>
            {price === "Todos" ? price : `$${price}`}
          </option>
        ))}
      </select>
    </div>
  )
}
export default PriceFilter
