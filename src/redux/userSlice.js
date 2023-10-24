import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    password: '',
    phone: '',
    identificationCard: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const {name, email, password, phone, identificationCard} = action.payload;
            state.name = name;
            state.email = email;
            state.password = password;
            state.phone = phone;
            state.identificationCard = identificationCard;
        },
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeEmail: (state, action) => {
            state.email = action.payload;
        },
        changePassword: (state, action) => {
            state.password = action.payload;
        },
        changePhone: (state, action) => {
            state.phone = action.payload;
        },
        changeIdentificationCard: (state, action) => {
            state.identificationCard = action.payload;
        },
    },
});

export const {addUser, changeName, changeEmail, changePassword, changePhone, changeIdentificationCard} = userSlice.actions;
export default userSlice.reducer;