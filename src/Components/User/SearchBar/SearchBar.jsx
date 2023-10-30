//franco
import { BiSearch } from "react-icons/bi"
import { MdCancel } from "react-icons/md"

import style from "./SearchBar.module.css"
import { useSarchbar } from "../../../hooks/useSearchBar"

const SearchBar = ({ handlerFilter, handlerApplyFilter }) => {
  const { handleChange, handleSearch, handleDeleteInput, input } = useSarchbar(
    handlerFilter,
    handlerApplyFilter
  )

  return (
    <div className={style.wrapper}>
      <h6 className={style.title}>Buscar</h6>
      {/* form */}
      <form className={style.form} onSubmit={handleSearch}>
        <input
          type="text"
          className={style.input}
          placeholder="Nombre o ubicación"
          onChange={handleChange}
          value={input}
        />
        {input.trim().length > 0 && (
          <button
            className={`${style.btn} ${style.btnDelete}`}
            title="borrar"
            onClick={handleDeleteInput}
          >
            <MdCancel />
          </button>
        )}

        <button className={style.btn} title="buscar">
          <BiSearch />
        </button>
      </form>
    </div>
  )
}
export default SearchBar
