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
  const handlerCategory = (category) => {}

  return (
    <div>
      <label htmlFor="category">Categoria:</label>
      <select name="category" id="category">
        <option value="todos">Todos</option>
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
