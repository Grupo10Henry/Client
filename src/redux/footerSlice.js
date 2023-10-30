//Guada

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    address: '',
    phone: '',
    email: '',
    businessHours: '',
    dataPolicy: '',
};

export const footerSlice = createSlice({
    name:'footer',
    initialState,
    reducers:{
        addInfo: (state, action) => {
            const {address, phone, email, businessHours, dataPolicy} = action.payload;
            state.address = address;
            state.phone = phone;
            state.email = email;
            state.businessHours = businessHours;
            state.dataPolicy = dataPolicy;
        },
        
    }
})

export const {addInfo} = userSlice.actions;
export default userSlice.reducer;