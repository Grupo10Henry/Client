import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import userReducer from "./userSlice"
import detailReducer from "./detailSlice"
import seatReducer from "./seatSlice"
import eventsReducer from "./eventsSlice"
import counterReducer from "./counterSlice"
import eventsCountReducer from "./eventsCountSlice"
import bookSeatReducer from "./bookSeatsSlice"
import footerReducer from "./footerSlice"
import faqReducer from "./faqSlice"
import eventIDReducer from "./eventIDSlice"

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["user"], // aca se agregan las keys que se van a persistir (se deben llamar igual el key del reducer de abajo)
}

const rootReducer = combineReducers({
  user: userReducer,
  event: detailReducer,
  eventID: eventIDReducer,
  seat: seatReducer,
  events: eventsReducer,
  counter: counterReducer,
  eventsCount: eventsCountReducer,
  bookSeat: bookSeatReducer,
  footer: footerReducer,
  faq: faqReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)
