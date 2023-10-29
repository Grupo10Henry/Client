//franco
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io"
import { useEffect, useState } from "react"

import style from "./Filters.module.css"

const categories = [
  "Teatro",
  "Música",
  "Cine",
  "Artes Visuales",
  "Literatura",
  "Deportes",
  "Eventos académicos",
  "Convenciones",
  "Festivales",
  "Empresariales",
  "Filantrópicos",
]
const CategoryFilter = ({ handlerFilter }) => {
  const [showme, setShowme] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  const optionClass = `${style.options} ${showme && style.show}`

  const handlerDropdown = () => {
    setShowme(!showme)
  }

  const handlerCategory = () => {
    // pedirle via query al back
  }

  useEffect(() => {
    handlerFilter({
      newProp: "category",
      value: selectedOption === "Todos" ? "" : selectedOption,
    })
  }, [selectedOption])

  return (
    <div className={style.wrapper}>
      <h6 className={style.title}>Categorias</h6>
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
          {categories.map((item, idx) => (
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
export default CategoryFilter
