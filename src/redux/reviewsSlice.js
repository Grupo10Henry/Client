import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoading: false,
  isError: false,
  reviews: [],
}

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    startReviews: (state, action) => {
      state.isLoading = true
    },
    successReviews: (state, action) => {
      state.isLoading = false
      state.reviews = action.payload
    },
    failedReviews: (state, action) => {
      state.isError = action.payload
      state.isLoading = false
    },
  },
})

export const { startReviews, successReviews, failedReviews } =
  reviewsSlice.actions
export default reviewsSlice.reducer
