import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    generate: {
        isLoading: false,
    },
    download: {
        isLoading: false,
    },
};

export const buttonSlice = createSlice({
    name: 'button',
    initialState,
    reducers: {
        click: (state, action) => {
            const btn = action.payload.button;
            state[btn].isLoading = !state[btn].isLoading;
        },
    },
});

export const { click } = buttonSlice.actions;

export default buttonSlice.reducer;
