import { useState } from "react"

const startPrice = 2000

const PriceFilter = () => {
  const [priceSelect, setPriceSelect] = useState(startPrice)

  return (
    <div>
      <label htmlFor="price">Precio a partir de:</label>
      <input
        type="range"
        name="price"
        id="price"
        min={startPrice}
        max={10000}
        value={priceSelect}
        onChange={(e) => setPriceSelect(e.target.value)}
      />
      ${priceSelect}
    </div>
  )
}
export default PriceFilter
