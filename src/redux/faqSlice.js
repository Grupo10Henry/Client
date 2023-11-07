import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allFaqs: [] 
}

export const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    getAllFaqs: (state, action) => {
      state.allFaqs = action.payload
    },
  },
})

export const {
    getAllFaqs
} = faqSlice.actions;
export default faqSlice.reducer
