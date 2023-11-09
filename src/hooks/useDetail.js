import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { instance } from "../axios/config"
import { setEventID } from "../redux/eventIDSlice"

const initialEventsDetail = {
  name: "",
  description: "",
  date: "",
  time: "",
  locationName: "",
  adressLocation: "",
  mapLocation: "",
  bannerImage: "",
  capacity: "",
  views: "",
}

const useDetail = (id) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [sectorPrices, setSectorPrices] = useState([])
  const [eventDetails, setEventDetails] = useState(initialEventsDetail)
  const [isDonation, setIsDonation] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    console.log("Sector Prices:", sectorPrices)
    navigate(`/reserva/${id}?isDonation=${isDonation}`, {
      state: { sectorPrices },
    })
  }

  const fetchEventData = async () => {
    try {
      /* traer de la ruta /seat/:eventID los sectores y precios. La respuesta es un array de arrays, que contiene [price, sector] */
      const response = await instance.get(`/seat/${id}`)
      setSectorPrices(response.data)
    } catch (error) {
      throw Error(
        `Error al obtener los sectores y precios del evento:, ${error}`
      )
    }
  }

  const fetchEventDetails = async () => {
    try {
      const response = await instance.get(`/event/${id}`)
      if (response?.data) {
        const {
          name,
          description,
          date,
          time,
          locationName,
          adressLocation,
          mapLocation,
          bannerImage,
          capacity,
          planImage,
          views,
        } = response.data

        setEventDetails({
          name,
          description,
          date,
          time,
          locationName,
          adressLocation,
          mapLocation,
          bannerImage,
          capacity,
          planImage,
          views,
        })

        setIsDonation(response?.data?.isDonation)
      }
    } catch (error) {
      throw Error(`Error al obtener los detalles del evento:, ${error}`)
    }
  }

  const fetchData = async () => {
    try {
      setIsLoading(true)
      await fetchEventDetails()
      await fetchEventData()
    } catch (error) {
      setError(error)
      setIsLoading(false)
      console.error(error)
    }
  }

  useEffect(() => {
    dispatch(setEventID(id))
    fetchData()

    return () => {
      setSectorPrices([])
      setEventDetails(initialEventsDetail)
      dispatch(setEventID(""))
    }
  }, [id])

  // counter down timer
  const targetDateTime = new Date(
    `${eventDetails.date} ${eventDetails.time}`
  ).getTime()
  const currentDate = new Date().getTime()
  const timeDifference = targetDateTime - currentDate

  const [countdown, setCountdown] = useState({
    days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ),
    minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((timeDifference % (1000 * 60)) / 1000),
  })
  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeDifference = targetDateTime - new Date().getTime()
      if (newTimeDifference < 0) {
        clearInterval(interval)
        setCountdown({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      } else {
        setCountdown({
          days: Math.floor(newTimeDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (newTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (newTimeDifference % (1000 * 60 * 60)) / (1000 * 60)
          ),
          seconds: Math.floor((newTimeDifference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDateTime])

  return {
    eventDetails,
    isDonation,
    isLoading,
    error,
    sectorPrices,
    handleClick,
    countdown,
  }
}

export default useDetail
