import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
}

export const prevEventsSlice = createSlice({
  name: "prevEvents",
  initialState,
  reducers: {
    fetchPrevEvents: (state) => {
      state.isLoading = true
    },
    successPrevEvents: (state, action) => {
      state.isLoading = false
      state.data = action.payload
    },
    failedPrevEvents: (state, action) => {
      state.isError = action.payload
      state.data = []
      state.isLoading = false
    },
  },
})

export const { fetchPrevEvents, successPrevEvents, failedPrevEvents } =
  prevEventsSlice.actions
export default prevEventsSlice.reducer
