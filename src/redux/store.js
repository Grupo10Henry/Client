import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
// import storageSession from "redux-persist/es/storage/session";
import userReducer from "./userSlice"
import detailReducer from "./detailSlice"
import seatReducer from "./seatSlice"
import eventsReducer from "./eventsSlice"
import eventIDReducer from "./eventIDSlice"
import counterReducer from "./counterSlice"
import eventsCountReducer from "./eventsCountSlice"
import bookSeatReducer from "./bookSeatsSlice"

const persistConfig = {
  key: "root", // key para almacenar solo el estado del usuario
  storage,
  whiteList: ["user"],
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
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)
