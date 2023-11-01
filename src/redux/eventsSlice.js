// franco

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allEvents: [],
  eventsFiltered: [],
  eventsDate: [],
  isFilter: false,
  reset: false,
  isLoading: false,
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
    setEventsDate: (state, action) => {
      state.eventsDate = action.payload
    },
    handlerIsFilter: (state, action) => {
      state.isFilter = true
      state.reset = false
    },
    handlerIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    handlerReset: (state, action) => {
      state.reset = true
      state.isFilter = false
      state.isLoading = false
      state.eventsFiltered = []
    },
  },
})

export const {
  getAllEvents,
  setFilteredEvents,
  setEventsDate,
  handlerIsFilter,
  handlerReset,
  handlerIsLoading,
} = eventsSlice.actions

export default eventsSlice.reducer
