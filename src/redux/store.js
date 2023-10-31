import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import detailReducer from "./detailSlice"
import seatReducer from "./seatSlice"
import eventsReducer from "./eventsSlice"
import eventIDReducer from "./eventIDSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    event: detailReducer,
    eventID: eventIDReducer,
    seat: seatReducer,
    events: eventsReducer,
  },
})
