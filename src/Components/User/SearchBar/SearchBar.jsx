//franco
import { BiSearch } from "react-icons/bi"
import { MdCancel } from "react-icons/md"
import { useSarchbar } from "../../../hooks/useSearchBar"

import style from "./SearchBar.module.css"

const SearchBar = () => {
  const { handlerChange, handlerSearch, handlerDeleteInput, input } =
    useSarchbar()

  return (
    <div className={style.wrapper}>
      <h6 className={style.title}>Buscar</h6>
      {/* form */}
      <form className={style.form} onSubmit={handlerSearch}>
        <input
          type="text"
          className={style.input}
          placeholder="Nombre o ubicación"
          onChange={handlerChange}
          value={input}
        />
        {input.trim().length > 0 && (
          <button
            type="button"
            className={`${style.btn} ${style.btnDelete}`}
            title="borrar"
            onClick={handlerDeleteInput}
          >
            <MdCancel />
          </button>
        )}

        <button className={style.btn} title="buscar" type="submit">
          <BiSearch />
        </button>
      </form>
    </div>
  )
}
export default SearchBar
