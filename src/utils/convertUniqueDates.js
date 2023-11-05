// function to set unique dates in state
const convertUniquesDates = (arr) => {
  const onlyDateSet = [...new Set(arr.map((event) => event.date))]

  const newDates = onlyDateSet?.map((date) => {
    // Dividir la fecha en año, mes y día
    const parts = date.split("-")
    const year = parts[0]
    const month = parts[1]
    const day = parts[2]

    // Crear una nueva fecha en el formato "DD/MM/YYYY"
    const formattedDate = `${day}-${month}-${year}`
    return {
      id: crypto.randomUUID(),
      text: formattedDate,
      value: date,
    }
  })

  return newDates
}

export default convertUniquesDates
