//franco
import Select from "../Select/Select"
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

  return <Select data={categories} title="Categorias" defaultOption="Todos" />
}
export default CategoryFilter
