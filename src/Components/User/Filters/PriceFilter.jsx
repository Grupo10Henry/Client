import { useState } from "react"

import style from "./Filters.module.css"
import Select from "../Select/Select"

const PriceFilter = () => {
  const prices = [0, 20000, 50000, 100000, 350000, 450000]

  return (
    <Select data={prices} title="Precio" defaultOption="Todos" isPrice={true} />
  )
}
export default PriceFilter
