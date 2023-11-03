import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { instance } from "../axios/config"
import {
  handlerIsLoading,
  handlerReset,
  setEventsFilteredFailed,
  setFilteredEvents,
} from "../redux/eventsSlice"

const useFilters = () => {
  const [filters, setFilters] = useState({})
  const { isFilter } = useSelector((s) => s.events)

  const dispatch = useDispatch()

  // get events with filters
  const filterData = async (filters) => {
    try {
      dispatch(handlerIsLoading(true))
      const { data } = await instance.get("/event", {
        params: filters,
      })
      dispatch(setFilteredEvents(data))
      dispatch(handlerIsLoading(false))
      console.log(data)
      return data
    } catch (error) {
      dispatch(setFilteredEvents([])) //reset eventsFiltered
      dispatch(handlerIsLoading(false))
      console.log(error?.response?.data.error)
      dispatch(setEventsFilteredFailed(error?.response?.data.error))
    }
  }

  //function for filers
  const handlerFilter = async (newProp, value) => {
    const updatedFilters = { ...filters, [newProp]: value }
    setFilters(updatedFilters)
    await filterData(updatedFilters)
  }

  //when searchbar deleted input, updated filters
  const resetPropFilters = ({ propToDelete }) => {
    const updateFilters = { ...filters }
    delete updateFilters[propToDelete]
    setFilters(updateFilters)
  }

  const handlerCleanFilters = () => {
    setFilters({})
    dispatch(handlerReset())
  }

  return {
    isFilter,
    handlerFilter,
    resetPropFilters,
    handlerCleanFilters,
    filters,
  }
}

export default useFilters
