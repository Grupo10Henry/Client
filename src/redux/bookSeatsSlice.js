// bookSeatSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define la inicialización del estado
const initialState = {
  seats: [], // Almacena la información de los asientos
  selectedSeats: [], // Almacena los asientos seleccionados
  totalPrice: 0, // Almacena el precio total
  eventId: null, // Almacena el ID del evento actual
  status: 'loading', // Puede ser 'loading', 'succeeded', o 'failed' según el estado de la solicitud
};

export const fetchSeats = createAsyncThunk('bookSeat/fetchSeats', async (eventId, { rejectWithValue }) => {
  try {
    const response = await fetch('/seat/seat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ eventID: eventId }),
    });

    if (!response.ok) {
      throw new Error('No se pudo cargar la información de los asientos.');
    }

    const seats = await response.json();
    return seats;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});


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
  extraReducers: (builder) => {
    builder
      .addCase(fetchSeats.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSeats.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.seats = action.payload;
      })
      .addCase(fetchSeats.rejected, (state) => {
        state.status = 'failed';
      });
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
