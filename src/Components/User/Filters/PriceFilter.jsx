import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io"

import style from "./Filters.module.css"
import { useEffect, useState } from "react"
import { formatoPesosColombianos } from "../../../utils/formatPrice"

const PriceFilter = ({ handlerFilter }) => {
  const [showme, setShowme] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const prices = [20000, 50000, 100000, 350000, 450000].map((price) => {
    const priceFormat = formatoPesosColombianos.format(price)
    return priceFormat
  })

  const optionClass = `${style.options} ${showme && style.show}`

  const handlerDropdown = () => {
    setShowme(!showme)
  }

  const valueSelect = (val) => {
    if (val === "Gratis") return 1
    else if (val === "Todos") return ""
    return val
  }

  useEffect(() => {
    handlerFilter({
      newProp: "price",
      value: valueSelect(selectedOption),
    })
  }, [selectedOption])

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
          {selectedOption !== "" && (
            <span
              className={style.option}
              onClick={() => setSelectedOption("Todos")}
            >
              Todos
            </span>
          )}
          <span
            className={style.option}
            onClick={() => setSelectedOption("Gratis")}
          >
            Gratis
          </span>
          {prices.map((item, idx) => (
            <span
              key={idx}
              className={style.option}
              onClick={() => setSelectedOption(item)}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
export default PriceFilter
