import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { instance } from "../axios/config"
import { setEventID } from "../redux/eventIDSlice"
import { updateIsDonation } from "../redux/detailSlice"

const initialEventsDetail = {
  eventID: "",
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
    
    navigate(`/reserva/${id}?isDonation=${isDonation}`, {
      state: { sectorPrices },
    })
  }

  const fetchEventData = async () => {
    try {
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

      //const response = await instance.get(`/event/${id}`)
      const {
        eventID,
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
        isDonation,
      } = response.data

      setEventDetails({
        eventID,
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
        isDonation,
      })
      console.log("EventID en useDetail:", eventID);
      setIsDonation(isDonation);
      dispatch(updateIsDonation(isDonation));
     
      console.log("Valor de isDonation después de dispatch:", isDonation);
    } catch (error) {
      throw Error(`Error al obtener los detalles del evento:, ${error}`)
    }
  }

  const fetchData = async () => {
    try {
      setIsLoading(true)
      await Promise.all([fetchEventDetails(), fetchEventData()])
    } catch (error) {
      setError(error)
      setIsLoading(false)
      console.error(error)
    } finally {
      setIsLoading(false)
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

  const formatTimeValue = (value) => {
    return value.toString().padStart(2, "0")
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeDifference = targetDateTime - new Date().getTime()
      if (newTimeDifference < 0) {
        clearInterval(interval)
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        })
      } else {
        setCountdown({
          days: formatTimeValue(
            Math.floor(newTimeDifference / (1000 * 60 * 60 * 24))
          ),
          hours: formatTimeValue(
            Math.floor(
              (newTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            )
          ),
          minutes: formatTimeValue(
            Math.floor((newTimeDifference % (1000 * 60 * 60)) / (1000 * 60))
          ),
          seconds: formatTimeValue(
            Math.floor((newTimeDifference % (1000 * 60)) / 1000)
          ),
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
