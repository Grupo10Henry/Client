// JULI
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  token: null,
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
      state.token = null
      state.isAdmin = false
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
    getAllUsers: (state, action) => {
      state.allUsers = action.payload
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
  getAllUsers
} = userSlice.actions;
export default userSlice.reducer
