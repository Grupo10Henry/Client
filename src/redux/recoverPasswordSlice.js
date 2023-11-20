
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {instance} from '../axios/config';


export const recoverPassword = createAsyncThunk(
  'user/recoverPassword',
  async (email) => {
    try {
      // Realizar la solicitud POST para recuperar la contraseña
      const response = await instance.post('/user', { email });
      return response.data; // Suponiendo que el servidor devuelve algún tipo de confirmación
    } catch (error) {
      throw error.response.data; // Capturar y lanzar el error
    }
  }
);

// Definir el slice
const recoverPasswordSlice = createSlice({
  name: 'recoverPassword',
  initialState: {
    status: 'idle', // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Manejar la acción exitosa
    builder.addCase(recoverPassword.fulfilled, (state) => {
      state.status = 'succeeded';
      state.error = null;
    });
    
    // Manejar la acción en curso
    builder.addCase(recoverPassword.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });

    // Manejar la acción fallida
    builder.addCase(recoverPassword.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    });
  },
});

// Exportar la acción
export { recoverPassword };

// Exportar el reducer
export default recoverPasswordSlice.reducer;
