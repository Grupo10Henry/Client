import { createSlice } from '@reduxjs/toolkit';

const eventIDSlice = createSlice({
    name: 'eventID',
    initialState : null,
    reducers: {
        setEventID: (state, action) => {
            return action.payload;
            
        }
    }
});

export const { setEventID } = eventIDSlice.actions;
export const selectEventID = state => state.eventID;
export default eventIDSlice.reducer;