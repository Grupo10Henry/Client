import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io"

import style from "./Filters.module.css"
import { useEffect, useState } from "react"

const date = ["2024/1/11", "2024/04/02", "2024/1/07"]

const DateFilter = ({ handlerFilter }) => {
  const [showme, setShowme] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const optionClass = `${style.options} ${showme && style.show}`

  const handlerDropdown = () => {
    setShowme(!showme)
  }

  useEffect(() => {
    handlerFilter({
      newProp: "date",
      value: selectedOption === "Todos" ? "" : selectedOption,
    })
  }, [selectedOption])

  return (
    <div className={style.wrapper}>
      <h6 className={style.title}>Fecha</h6>
      {/* select */}
      <div className={style.selectWrapper} onClick={handlerDropdown}>
        {/* icons */}
        <div className={style.titleOption}>
          {" "}
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
          {date.map((item, idx) => (
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
export default DateFilter
