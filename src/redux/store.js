import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import detailReducer from "./detailSlice"
import seatReducer from "./seatSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    event: detailReducer,
    seat: seatReducer,
  },
})
