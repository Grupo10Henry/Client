//franco
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io"
import { useEffect, useState } from "react"

import style from "./Filters.module.css"

const categories = [
  { id: 1, value: "Teatro" },
  { id: 2, value: "Música" },
  { id: 3, value: "Cine" },
  { id: 4, value: "Artes Visuales" },
  { id: 5, value: "Literatura" },
  { id: 6, value: "Deportes" },
  { id: 7, value: "Eventos académicos" },
  { id: 8, value: "Convenciones" },
  { id: 9, value: "Festivales" },
  { id: 10, value: "Empresariales" },
  { id: 11, value: "Filantrópicos" },
]

const CategoryFilter = ({ handlerFilter }) => {
  const [showme, setShowme] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const optionClass = `${style.options} ${showme && style.show}`
  const categoriesSort = categories.sort((a, b) =>
    a.value.localeCompare(b.value)
  )

  const handlerDropdown = () => {
    setShowme(!showme)
  }

  const handlerCategory = (value) => {
    // pedirle via query al back
    setSelectedOption(value)
    console.log("pidiendo a back:", value)
  }

  return (
    <div className={style.wrapper}>
      <h6 className={style.title}>Categorías</h6>
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
          {categoriesSort.map((element) => (
            <span
              key={element.id}
              className={style.option}
              onClick={() => handlerCategory(element.value)}
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
