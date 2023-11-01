import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    eventID: 0,
    currentDate: new Date().getTime(),
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setEventID: (state, action) => {
            state.eventID = action.payload;
            },
        setCurrentDate: (state, action) => {
            state.currentDate = action.payload;
        },    
        },
    });

export const {setEventID, setCurrentDate } = counterSlice.actions;
export const selectCounter = (state) => state.counter;
export default counterSlice.reducer;