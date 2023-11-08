// JULI

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  name: "",
  description: "",
  date: "",
  time: "",
  locationName: "",
  adressLocation: "",
  mapLocation: "",
  image: "",
  bannerImage: "",
  planImage: "",
}

export const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    getDetail: (state, action) => {
      const {
        name,
        description,
        date,
        time,
        locationName,
        adressLocation,
        mapLocation,
        image,
        bannerImage,
        planImage,
      } = action.payload
      state.name = name
      state.description = description
      state.date = date
      state.time = time
      state.locationName = locationName
      state.adressLocation = adressLocation
      state.mapLocation = mapLocation
      state.image = image
      state.bannerImage = bannerImage
      state.planImage = planImage
    },
  },
})

export const { getDetail } = eventSlice.actions
export default eventSlice.reducer
