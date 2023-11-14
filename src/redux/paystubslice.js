import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paystubs: [],
}

export const paystubSlice = createSlice({
  name: "paystub",
  initialState,
  reducers: {
    getPaystubById: (state, action) => {
      state.paystubs = action.payload
    },
  },
})

export const {
    getPaystubById
} = paystubSlice.actions;
export default paystubSlice.reducer
