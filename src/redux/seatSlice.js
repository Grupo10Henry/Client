import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  seats: {}, // Usa un objeto para almacenar los asientos únicos
  selectedSeats: [],
};

export const seatSlice = createSlice({
  name: 'seat',
  initialState,
  reducers: {
    addSelectedSeat: (state, action) => {
      console.log('Antes de agregar:', state.selectedSeats);
      state.selectedSeats.push(action.payload);
      console.log('Después de agregar:', state.selectedSeats);
    },
    removeSelectedSeat: (state, action) => {
      console.log('Antes de quitar:', state.selectedSeats);
      state.selectedSeats = state.selectedSeats.filter(seat => seat !== action.payload);
      console.log('Después de quitar:', state.selectedSeats);
    },
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

export const { addSelectedSeat, removeSelectedSeat, setSeats } = seatSlice.actions;

export const selectSelectedSeats = state => state.seat.selectedSeats;
export const selectSeats = state => Object.values(state.seat.seats);

export default seatSlice.reducer;
