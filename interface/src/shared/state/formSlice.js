import { createSlice } from '@reduxjs/toolkit';

import { FEATURES } from '../constants';

const initialState = {};
FEATURES.forEach((key) => {
    initialState[key] = '';
});

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        change: (state, action) => {
            state[action.payload.feature] = action.payload.value;
        },
        reset: (state) => {
            Object.keys(state).forEach((key) => {
                state[key] = initialState[key];
            });
        },
    },
});

export const { change, reset } = formSlice.actions;

export default formSlice.reducer;
