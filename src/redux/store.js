import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import detailReducer from "./detailSlice"
import seatReducer from "./seatSlice"
import eventsReducer from "./eventsSlice"
import eventIDReducer from "./eventIDSlice"
import counterReducer from "./counterSlice"
import eventsCountReducer from "./eventsCountSlice"
import bookSeatReducer from "./bookSeatsSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    event: detailReducer,
    eventID: eventIDReducer,
    seat: seatReducer,
    events: eventsReducer,
    counter: counterReducer,
    eventsCount: eventsCountReducer,
    bookSeat: bookSeatReducer,
  },
})
