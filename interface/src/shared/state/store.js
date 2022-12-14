import { configureStore } from '@reduxjs/toolkit';
import buttonSlice from './buttonSlice';
import descriptionSlice from './descriptionSlice';
import formSlice from './formSlice';
import imageSlice from './imageSlice';
import tabSlice from './tabSlice';

export const store = configureStore({
    reducer: {
        form: formSlice,
        description: descriptionSlice,
        tab: tabSlice,
        button: buttonSlice,
        image: imageSlice,
    },
});
