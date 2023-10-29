// JULI

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  identityCard: "",
  dob: "",
  password: "",
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, lastName, email, password, phone, dob, identityCard } =
        action.payload
      state.name = name
      state.lastName = lastName
      state.email = email
      state.password = password
      state.phone = phone
      state.dob = dob
      state.identityCard = identityCard
    },

    checkEmail: (state, action) => {
      state.email = action.payload
    },

    changeName: (state, action) => {
      state.name = action.payload
    },
    changeEmail: (state, action) => {
      state.email = action.payload
    },
    changePassword: (state, action) => {
      state.password = action.payload
    },
    changePhone: (state, action) => {
      state.phone = action.payload
    },
    changeIdentificationCard: (state, action) => {
      state.identificationCard = action.payload
    },
  },
})

export const {
  addUser,
  checkEmail,
  changeName,
  changeEmail,
  changePassword,
  changePhone,
  changeIdentificationCard,
} = userSlice.actions
export default userSlice.reducer
