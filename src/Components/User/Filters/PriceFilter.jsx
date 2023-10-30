import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io"

import style from "./Filters.module.css"
import { useEffect, useState } from "react"
import { formatoPesosColombianos } from "../../../utils/formatPrice"

const prices = [
  { id: 0, text: "Todos", value: "" },
  { id: 1, text: "Gratis", value: 0 },
  { id: 2, value: 20000 },
  { id: 3, value: 50000 },
  { id: 4, value: 100000 },
  { id: 5, value: 350000 },
  { id: 6, value: 450000 },
].map((price) => {
  const priceFormat = formatoPesosColombianos.format(price.value)
  if ((price.text && price.text === "Gratis") || price.text === "Todos")
    return price
  else {
    return { ...price, text: priceFormat }
  }
})

const PriceFilter = ({ handlerFilter }) => {
  const [showme, setShowme] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const optionClass = `${style.options} ${showme && style.show}`

  const handlerDropdown = () => {
    setShowme(!showme)
  }

  const valueSelect = (val) => {
    if (val === "Gratis") return 1
    else if (val === "Todos") return ""
    return val
  }

  const handlerPrice = (value) => {
    // pedirle via query al back
    setSelectedOption(valueSelect(value))
    console.log("pidiendo a back:", value)
  }

  return (
    <div className={style.wrapper}>
      <h6 className={style.title}>A partir de</h6>
      {/* select */}
      <div className={style.selectWrapper} onClick={handlerDropdown}>
        {/* icons */}
        <div className={style.titleOption}>
          {selectedOption.length > 0 ? selectedOption : "Todos"}
        </div>
        {showme ? (
          <IoMdArrowDropupCircle className={style.arrow} />
        ) : (
          <IoMdArrowDropdownCircle className={style.arrow} />
        )}
        {/* options */}
        <div className={optionClass}>
          {prices.map((element) => (
            <span
              key={element.id}
              className={style.option}
              onClick={() => handlerPrice(element.value)}
            >
              {element.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
export default PriceFilter
