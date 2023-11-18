import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  reportNames: [],
  reportSeats: [],
}

export const reportSlice = createSlice({
  name: "report",
  initialState,
  reducers: {
    getReportNames: (state, action) => {
      state.reportNames = action.payload
    },
    getReportSeats: (state, action) => {
      state.reportSeats = action.payload
    },
  },
})

export const {
    getReportNames,
    getReportSeats
} = reportSlice.actions;
export default reportSlice.reducer