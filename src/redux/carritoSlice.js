// carritoSlice.js

import { createSlice } from '@reduxjs/toolkit';

const carritoSlice = createSlice({
  name: 'carrito',
  initialState: {
    items: [],
    orderData: null,
  },
  reducers: {
    agregarAlCarrito: (state, action) => {
      const { eventData, seatsData } = action.payload;
      state.items.push({ eventData, seatsData });
    },
    limpiarCarrito: (state) => {
      state.items = [];
    },
    setOrderData: (state, action) => {
      console.log('action.payload antes', action.payload);
      state.orderData = action.payload;
      console.log('state.orderData despues', state.orderData);

    },
  },
});

export const { agregarAlCarrito, limpiarCarrito, setOrderData } = carritoSlice.actions;
//export const selectOrderData = (state) => state.carrito.orderData;
export default carritoSlice.reducer;
