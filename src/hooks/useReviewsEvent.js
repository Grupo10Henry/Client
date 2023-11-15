import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { instance } from "../axios/config"

const useReviewsEvent = () => {
  const [prevEvents, setPrevEvents] = useState([])
  const [loading, setLoading] = useState(false)

  const { reviews } = useSelector((s) => s.reviews)

  const getPrevEvents = async () => {
    try {
      const response = await instance.get("/event/previus")
      return response?.data
    } catch (error) {
      throw error // Propaga el error para que sea capturado por el código que llama a getPrevEvents
    }
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      const data = await getPrevEvents()

      setPrevEvents(data)
    } catch (error) {
      console.error("Error al traer los eventos previos:", error)
      setLoading(false)
      // Manejo de errores, como mostrar un mensaje al usuario o realizar otras acciones necesarias
    } finally {
      setLoading(false)
    }
  }

  const orderedPrevEvents = prevEvents?.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )
  const shownPrevEvents = orderedPrevEvents.slice(0, 8)

  //Calcula y devuelve el promedio de las calificaciones de las revisiones.
  const calculateAverageRating = (reviews, id) => {
    //filtered reviews by event
    const reviewsFiltered = reviews.filter((review) => review.eventID === id)

    const totalRating = reviewsFiltered.reduce(
      (acc, review) => acc + review.rating,
      0
    )
    const averageRating =
      reviewsFiltered.length > 0 ? totalRating / reviewsFiltered.length : 0
    return averageRating
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    prevEvents,
    loading,
    reviews,
    shownPrevEvents,
    calculateAverageRating,
  }
}

export default useReviewsEvent
