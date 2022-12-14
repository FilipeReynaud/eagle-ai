import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    url: [],
    selectedUrl: null,
    imageSentence: null,
};

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        change: (state, action) => {
            // TODO: deal with error
            if (!action.payload.error) {
                state.url = action.payload.url;
                state.selectedUrl = 0;
            }
        },
        nextUrl: (state) => {
            if (state.url && state.url.length !== 0) {
                const newIndex = state.selectedUrl + 1;
                if (newIndex === state.url.length - 1) {
                    state.selectedUrl = newIndex;
                } else {
                    state.selectedUrl = 0;
                }
            }
        },
        previousUrl: (state) => {
            if (state.url && state.url.length !== 0) {
                const newIndex = state.selectedUrl - 1;
                if (newIndex >= 0) {
                    state.selectedUrl = newIndex;
                } else {
                    state.selectedUrl = state.url.length - 1;
                }
            }
        },
        setImgSentence: (state, action) => {
            state.imageSentence = action.payload;
            state.selectedUrl = 0;
        },
    },
});

export const { change, previousUrl, nextUrl, setImgSentence } =
    imageSlice.actions;

export default imageSlice.reducer;
