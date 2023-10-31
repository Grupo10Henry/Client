// franco

import { createSlice } from "@reduxjs/toolkit"

import events from "../Components/User/Events/Events"

const initialState = {
  allEvents: events,
  eventsFiltered: [],
  isFilter: false,
  reset: false,
  //probando
  // allEvents: {
  //   mostPopular: [],
  //   nextEvents: [],
  //   availableEvents: [],
  // },
}

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    getAllEvents: (state, action) => {
      state.allEvents = action.payload
    },
    setFilteredEvents: (state, action) => {
      state.eventsFiltered = action.payload
    },
    handlerIsFilter: (state, action) => {
      state.isFilter = true
    },
    handlerReset: (state, action) => {
      state.reset = true
      state.isFilter = false
    },
  },
})

export const {
  getAllEvents,
  setFilteredEvents,
  handlerIsFilter,
  handlerReset,
} = eventsSlice.actions

export default eventsSlice.reducer
