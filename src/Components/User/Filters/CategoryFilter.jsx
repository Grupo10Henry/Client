//franco
import { useState } from "react"
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io"
import { categories } from "../../../utils/categories"

import style from "./Filters.module.css"

const CategoryFilter = ({ handlerFilter }) => {
  const [showme, setShowme] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const optionClass = `${style.options} ${showme && style.show}`

  const handlerDropdown = () => {
    setShowme(!showme)
  }

  const handlerCategory = (name, value) => {
    // pedirle via query al back
    setSelectedOption(value)
    handlerFilter(name, value)
    console.log("pidiendo a back:", value)
  }

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
