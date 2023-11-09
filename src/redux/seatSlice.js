import { createSlice, createSelector } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  seats: {}, // Usa un objeto para almacenar los asientos únicos
};

export const seatSlice = createSlice({
  name: 'seat',
  initialState,
  reducers: {
    setSeats: (state, action) => {
      // Reinicia el objeto de asientos al recibir nuevos datos
      state.seats = {};
      action.payload.forEach((seat) => {
        // Almacena los asientos en el objeto, utilizando seatID como clave
        state.seats[seat.seatID] = seat;
      });
    },
  },
});

export const fetchAndSetSeats = (eventID, sector) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:3001/seat/${eventID}/${sector}`);
    const realSeats = response.data;
    dispatch(setSeats(realSeats)); // Llama a la acción 'setSeats' para almacenar todos los detalles de los asientos
  } catch (error) {
    console.error('Error al obtener los asientos:', error);
  }
};

const selectSeatState = (state) => state.seat;
export const { setSeats } = seatSlice.actions;

// Define el selector en el mismo archivo
export const selectSeats = createSelector(selectSeatState, (seatState) => Object.values(seatState.seats));

export default seatSlice.reducer;
