export const categories = [
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
].sort((a, b) => a.value.localeCompare(b.value))
