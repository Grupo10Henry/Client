import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { instance } from "../axios/config"
import {
  failedPrevEvents,
  fetchPrevEvents,
  successPrevEvents,
} from "../redux/prevEventsSlice"

const useReviewsEvent = () => {
  const {
    isLoading,
    data: prevEventsData,
    isError,
  } = useSelector((s) => s.prevEvents)
  const { reviews } = useSelector((s) => s.reviews)

  const dispatch = useDispatch()
  const getPrevEvents = async () => {
    try {
      const response = await instance.get("/event/previus")
      return response?.data
    } catch (error) {
      throw error // Propaga el error para que sea capturado por el código que llama a getPrevEvents
    }
  }

  const fetchData = async () => {
    dispatch(fetchPrevEvents())
    try {
      const data = await getPrevEvents()

      dispatch(successPrevEvents(data))
    } catch (error) {
      dispatch(
        failedPrevEvents("Hubo un error al traer los eventos anteriores")
      )
      console.error("Error al traer los eventos previos:", error)
    }
  }

  const orderedPrevEvents = [...prevEventsData]?.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  )
  const shownPrevEvents = orderedPrevEvents.slice(0, 8)

  //Calcula y devuelve el promedio de las calificaciones de las revisiones.
  const calculateAverageRating = (reviews, id) => {
    //filtered reviews by event
    const reviewsFiltered = reviews?.filter((review) => review?.eventID === id)

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
    isLoading,
    isError,
    reviews,
    shownPrevEvents,
    calculateAverageRating,
  }
}

export default useReviewsEvent
