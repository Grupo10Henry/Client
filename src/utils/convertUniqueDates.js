// function to set unique dates in state

import changeOrderDate from "./orderDate"

const convertUniquesDates = (arr) => {
  const onlyDateSet = [...new Set(arr.map((event) => event.date))]

  const newDates = onlyDateSet?.map((date) => {
    // Crear una nueva fecha en el formato "DD/MM/YYYY"
    const formattedDate = changeOrderDate(date)
    return {
      id: crypto.randomUUID(),
      text: formattedDate,
      value: date,
    }
  })

  return newDates
}

export default convertUniquesDates
