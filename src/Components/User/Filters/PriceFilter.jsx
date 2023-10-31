import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io"

import style from "./Filters.module.css"
import { useEffect, useState } from "react"
import { formatoPesosColombianos } from "../../../utils/formatPrice"
import { handlerIsFilter } from "../../../redux/eventsSlice"
import { useDispatch, useSelector } from "react-redux"

const prices = [
  { id: 0, text: "Todos", value: "Todos" },
  { id: 1, text: "Gratis", value: "Gratis" },
  { id: 2, value: 20000 },
  { id: 3, value: 50000 },
  { id: 4, value: 100000 },
  { id: 5, value: 350000 },
  { id: 6, value: 450000 },
].map((price) => {
  const priceFormat = formatoPesosColombianos.format(price.value)
  if (price.text && (price.text === "Gratis" || price.text === "Todos"))
    return price
  else {
    return { ...price, text: priceFormat }
  }
})

const PriceFilter = ({ handlerFilter }) => {
  const [showme, setShowme] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")
  const { reset } = useSelector((s) => s.events)

  const dispatch = useDispatch()

  const optionClass = `${style.options} ${showme && style.show}`

  const handlerDropdown = () => {
    setShowme(!showme)
  }

  const valueSelect = (val) => {
    if (val === "Gratis") return 0
    else if (val === "Todos") return ""
    return val
  }

  const handlerPrice = (name, text, value) => {
    // pedirle via query al back
    console.log("pidiendo a back:", value)

    setSelectedOption(text)
    handlerFilter(name, valueSelect(value))
    console.log("valueSelect:", valueSelect(value))
    dispatch(handlerIsFilter())
  }

  useEffect(() => {
    if (reset) {
      setSelectedOption("")
    }
  }, [reset])

  return (
    <div className={style.wrapper}>
      <h6 className={`${style.title} gradient-text`}>A partir de</h6>
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
              onClick={() => handlerPrice("price", element.text, element.value)}
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
