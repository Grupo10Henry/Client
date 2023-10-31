//franco
import { useEffect, useState } from "react"
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io"
import { categories } from "../../../utils/categories"

import style from "./Filters.module.css"
import { useDispatch, useSelector } from "react-redux"
import { handlerIsFilter } from "../../../redux/eventsSlice"

const CategoryFilter = ({ handlerFilter }) => {
  const [showme, setShowme] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")
  const { reset } = useSelector((s) => s.events)

  const dispatch = useDispatch()

  const optionClass = `${style.options} ${showme && style.show}`

  const handlerDropdown = () => {
    setShowme(!showme)
  }

  const handlerCategory = (name, value) => {
    // pedirle via query al back
    console.log("pidiendo a back:", value)
    setSelectedOption(value)
    dispatch(handlerIsFilter())
    handlerFilter(name, value)
  }

  useEffect(() => {
    if (reset) {
      setSelectedOption("")
    }
  }, [reset])

  return (
    <div className={style.wrapper}>
      <h6 className={`${style.title} gradient-text`}>Categorías</h6>
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
            <span className={style.option} onClick={() => handlerCategory("")}>
              Todos
            </span>
          )}
          {categories.map((element) => (
            <span
              key={element.id}
              className={style.option}
              onClick={() => handlerCategory("category", element.value)}
            >
              {element.value}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
export default CategoryFilter
