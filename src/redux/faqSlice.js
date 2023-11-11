import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allFaqs: [],
  faqById: [],
}

export const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    getAllFaqs: (state, action) => {
      state.allFaqs = action.payload
    },
    getFaqById: (state, action) => {
      state.faqById = action.payload
    },
  },
})

export const {
    getAllFaqs,
    getFaqById
} = faqSlice.actions;
export default faqSlice.reducer
