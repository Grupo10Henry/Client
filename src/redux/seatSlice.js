// JULI

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    seatID: '',
    eventID: '',
    userID: '',
    paystubID: '',
    row: '',
    column: '',
    sector: '',
    price: '',
    status: '',
    exists: '',
};

export const seatSlice = createSlice({
    name: 'seat',
    initialState,
    reducers: {
        getSeat: (state, action) => {
            const {seatID, eventID, userID, paystubID, row, column, sector, price, status, exists} = action.payload;
            state.seatID = seatID;
            state.eventID = eventID;
            state.userID = userID;
            state.paystubID = paystubID;
            state.row = row;
            state.column = column;
            state.sector = sector;
            state.price = price;
            state.status = status;
            state.exists = exists;
        },
    },
});

export const {getSeat} = seatSlice.actions;
export default seatSlice.reducer;