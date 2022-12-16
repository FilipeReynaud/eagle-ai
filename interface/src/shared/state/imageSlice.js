import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    url: [],
    selectedUrl: null,
    imageSentence: null,
    nrOfImages: 1,
};

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        change: (state, action) => {
            // TODO: deal with error
            if (!action.payload.error) {
                console.log(action.payload);
                state.url = action.payload.url;
                state.selectedUrl = 0;
            }
        },
        nextUrl: (state) => {
            if (state.url && state.url.length !== 0) {
                const newIndex = state.selectedUrl + 1;
                if (newIndex === state.url.length) {
                    state.selectedUrl = 0;
                } else {
                    state.selectedUrl = newIndex;
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
        setNrOfImages: (state, action) => {
            if (action.payload > 0) {
                state.nrOfImages = action.payload;
            }
        },
    },
});

export const { change, previousUrl, nextUrl, setImgSentence, setNrOfImages } =
    imageSlice.actions;

export default imageSlice.reducer;
