import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: '',
};

export const descriptionSlice = createSlice({
    name: 'description',
    initialState,
    reducers: {
        change: (state, action) => {
            state.value = action.payload;
        },
        reset: (state) => {
            state.value = '';
        },
    },
});

export const { change, reset } = descriptionSlice.actions;

export default descriptionSlice.reducer;
