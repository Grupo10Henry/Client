// carritoSlice.js

import { createSlice } from '@reduxjs/toolkit';

const carritoSlice = createSlice({
  name: 'carrito',
  initialState: {
    items: [],
  },
  reducers: {
    agregarAlCarrito: (state, action) => {
      const { eventData, seatsData } = action.payload;
      state.items.push({ eventData, seatsData });
    },
    limpiarCarrito: (state) => {
      state.items = [];
    },
  },
});

export const { agregarAlCarrito, limpiarCarrito } = carritoSlice.actions;
export default carritoSlice.reducer;
