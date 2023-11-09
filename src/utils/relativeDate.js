import moment from "moment"

const convertToRealtiveDate = (date) => {
  const fechaActual = moment()
  const fechaDeRevision = moment(date)

  let fechaRelativa

  const diffDays = fechaActual.diff(fechaDeRevision, "days")

  if (diffDays === 0) {
    fechaRelativa = "Hoy"
  } else {
    fechaRelativa = `Hace ${Math.abs(diffDays)} días`
  }

  return fechaRelativa
}

export default convertToRealtiveDate
