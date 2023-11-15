// JULI

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    eventID: '',
    name: '',
    description: '',
    date: '',
    time: '',
    locationName: '',
    adressLocation: '',
    mapLocation: '',
    image: '',
    bannerImage: '',
    planImage: '',
    isDonation: false,
};

export const detailSlice = createSlice({
    name: 'detail',
    initialState,
    reducers: {
        getDetail: (state, action) => {
            const {eventID, name, description, date, time, locationName, adressLocation, mapLocation, image, bannerImage, planImage, isDonation} = action.payload;
            state.eventID = eventID;
            state.name = name;
            state.description = description;
            state.date = date;
            state.time = time;
            state.locationName = locationName;
            state.adressLocation = adressLocation;
            state.mapLocation = mapLocation;
            state.image = image;
            state.bannerImage = bannerImage;
            state.planImage = planImage;
            state.isDonation = isDonation;
        },
        updateIsDonation: (state, action) => {
            console.log("Estado antes de updateIsDonation:", state);
            
            state.isDonation = action.payload
            console.log("Nuevo estado después de updateIsDonation:", state);
            console.log("Nuevo estado después de updateIsDonation:", state.isDonation);
          },
    },
});

export const {getDetail, updateIsDonation} = detailSlice.actions;
export default detailSlice.reducer;
