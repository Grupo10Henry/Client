import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {instance} from '../axios/config';

const initialState = {
  seats: {}, // Usa un objeto para almacenar los asientos únicos
  selectedSeats: [],
  deselectedSeats: [],
};

export const seatSlice = createSlice({
  name: 'seat',
  initialState,
  reducers: {
    addSelectedSeat: (state, action) => {
      const seatToAdd = action.payload;
      state.selectedSeats.push(seatToAdd);
      state.deselectedSeats = state.deselectedSeats.filter(seat => seat.seatID !== seatToAdd.seatID);
    },
    removeSelectedSeat: (state, action) => {
      const seatToRemove = action.payload;
      state.selectedSeats = state.selectedSeats.filter(seat => seat.seatID !== seatToRemove.seatID);
      state.deselectedSeats.push(seatToRemove);
    },
    clearSelectedSeats: (state) => {
      state.selectedSeats = [];
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
    const response = await instance.post(`/seat/${eventID}/${sector}`);
    const realSeats = response.data;
    dispatch(setSeats(realSeats)); // Llama a la acción 'setSeats' para almacenar todos los detalles de los asientos
  } catch (error) {
    console.error('Error al obtener los asientos:', error);
  }
};

export const { addSelectedSeat, removeSelectedSeat, clearSelectedSeats,setSeats } = seatSlice.actions;

export const selectSelectedSeats = state => state.seat.selectedSeats;
export const selectSeats = state => Object.values(state.seat.seats);

export default seatSlice.reducer;
