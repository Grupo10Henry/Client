// franco

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  allEvents: [],
  nextEvents: [],
  eventsFiltered: [],
  eventsDate: [],
  isFilter: false,
  reset: false,
  isLoading: false,
  isError: false,
}

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    getAllEvents: (state, action) => {
      state.allEvents = action.payload
    },
    getNextEvents: (state, action) => {
      state.nextEvents = action.payload
    },
    setFilteredEvents: (state, action) => {
      state.eventsFiltered = action.payload
      state.isError = false
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
    setEventsFilteredFailed: (state, action) => {
      state.isError = action.payload
      state.isLoading = false
    },

    setDataStart: (state, action) => {
      state.isLoading = true
    },
    setDataSuccess: (state, action) => {
      state.isLoading = false
      state.nextEvents = action.payload
    },
  },
})

export const {
  setDataStart,
  setDataSuccess,
  getAllEvents,
  getNextEvents,
  setFilteredEvents,
  setEventsDate,
  handlerIsFilter,
  handlerReset,
  handlerIsLoading,
  setEventsFilteredFailed,
} = eventsSlice.actions

export default eventsSlice.reducer
