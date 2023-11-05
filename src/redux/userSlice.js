// JULI
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  token: "",
  isAdmin: false,
  userInfo: {},
  allUsers: [],
  userData: [],
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token
      state.isAdmin = action.payload.isAdmin
      state.userInfo = action.payload.userInfo
    },

    userLogout: (state, action) => {
      state.userInfo = {}
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
    getUserById: (state, action) => {
      state.userData = action.payload
    },
  },
})

export const {
  userLogout,
  checkEmail,
  changeName,
  changeEmail,
  changePassword,
  changePhone,
  changeIdentificationCard,
  getUserById,
  loginSuccess,
} = userSlice.actions
export default userSlice.reducer
