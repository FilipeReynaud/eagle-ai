import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selected: 0,
};

export const tabSlice = createSlice({
    name: 'tab',
    initialState,
    reducers: {
        change: (state, action) => {
            state.selected = action.payload;
        },
    },
});

export const { change } = tabSlice.actions;

export default tabSlice.reducer;
