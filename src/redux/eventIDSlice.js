import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  id: "",
}

export const eventIDSlice = createSlice({
  name: "eventID",
  initialState,
  reducers: {
    setEventID: (state, action) => {
      state.id = action.payload
    },
  },
})

export const { setEventID } = eventIDSlice.actions
export default eventIDSlice.reducer
