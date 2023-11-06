import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handlerIsFilter } from "../../../redux/eventsSlice"

import style from "./Filters.module.css"

const DateFilter = ({ handlerFilter }) => {
  const [showme, setShowme] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")
  const { eventsDate, reset } = useSelector((s) => s.events)

  const dispatch = useDispatch()

  const optionClass = `${style.options} ${showme && style.show}`

  // function for show options
  const handlerDropdown = () => {
    setShowme(!showme)
  }
  const handlerDate = (name, text, value) => {
    //pedir a back
    // console.log("pidiendo a back:", value)

    setSelectedOption(text)
    handlerFilter(name, value)
    dispatch(handlerIsFilter())
  }

  useEffect(() => {
    if (reset) {
      setSelectedOption("")
    }
  }, [reset])

  return (
    <div className={style.wrapper}>
      <h6 className={`${style.title} gradient-text`}>Fecha</h6>
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
          {eventsDate?.map((element) => (
            <span
              key={element.id}
              className={style.option}
              onClick={() => handlerDate("date", element.text, element.value)}
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
