import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io"

import style from "./Filters.module.css"
import { useEffect, useState } from "react"

const date = [
  { id: 0, text: "Todos", value: "" },
  { id: 1, text: "2023-10-02", value: "2023-10-02" },
  { id: 2, text: "2023-10-03", value: "2023-10-03" },
  { id: 3, text: "2023-10-07", vallue: "2023-10-07" },
]

const DateFilter = ({ handlerFilter }) => {
  const [showme, setShowme] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const optionClass = `${style.options} ${showme && style.show}`

  const handlerDropdown = () => {
    setShowme(!showme)
  }

  const handlerDate = (name, value) => {
    //pedir a back
    setSelectedOption(value)
    handlerFilter(name, value)
    console.log("pidiendo a back:", value)
  }

  return (
    <div className={style.wrapper}>
      <h6 className={`${style.title} gradient-text`}>Fecha</h6>
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
          {date.map((element) => (
            <span
              key={element.id}
              className={style.option}
              onClick={() => handlerDate("date", element.value)}
            >
              {element.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
export default DateFilter
