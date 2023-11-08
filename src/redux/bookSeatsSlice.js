
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  seats: [], 
  selectedSeats: [], // Almacena los asientos seleccionados
  totalPrice: 0, 
  eventId: null,
  status: 'idle', // es el estado del Slice, no del asiento
};

const bookSeatSlice = createSlice({
  name: 'bookSeat',
  initialState,
  reducers: {
    // Define las acciones sincrónicas para agregar y quitar asientos seleccionados
    addSelectedSeat: (state, action) => {
      state.selectedSeats.push(action.payload);
      state.totalPrice += action.payload.price; // Asumiendo que cada asiento tiene un precio
    },
    removeSelectedSeat: (state, action) => {
      state.selectedSeats = state.selectedSeats.filter(seat => seat.seatID !== action.payload.seatID);
      state.totalPrice -= action.payload.price; // Restar el precio al quitar el asiento
    },
  },
});

export const { addSelectedSeat, removeSelectedSeat } = bookSeatSlice.actions;

// Define selectores para acceder a partes específicas del estado
export const selectSeats = (state) => state.bookSeat.seats;
export const selectSelectedSeats = (state) => state.bookSeat.selectedSeats;
export const selectTotalPrice = (state) => state.bookSeat.totalPrice;
export const selectEventId = (state) => state.bookSeat.eventId;
export const selectStatus = (state) => state.bookSeat.status;

export default bookSeatSlice.reducer;
