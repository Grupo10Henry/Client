import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import eventReducer from "./eventSlice"
import seatReducer from "./seatSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    event: eventReducer,
    seat: seatReducer,
  },
})
