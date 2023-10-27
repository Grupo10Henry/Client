//franco
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
const CategoryFilter = () => {
  const handlerCategory = (category) => {
    // pedirle via query al back
  }

  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor="cateogory">Categoria:</label>
      <select name="category" id="category">
        <option value="Todos">Todos</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  )
}
export default CategoryFilter
