import { createSlice } from '@reduxjs/toolkit';

const eventsCountSlice = createSlice({
    name: "eventsCount",
    initialState: {},
    reducers: {
        addEvent: (state, action) => {
            const { eventID, eventDate, eventTime } = action.payload;
            state[eventID] = { eventDate, eventTime };
    }, 
        removeEvent: (state, action) => {
    const eventID = action.payload;
    delete state[eventID];
    },
    },
});

export const { addEvent, removeEvent } = eventsCountSlice.actions;
export const selectEventsCount = (state) => state.eventsCount;
export default eventsCountSlice.reducer;