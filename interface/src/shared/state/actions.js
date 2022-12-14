import { change as changeFeature, reset as resetFeatures } from './formSlice';
import {
    change as changeDescription,
    reset as resetDescription,
} from './descriptionSlice';
import { change as changeTab } from './tabSlice';
import { click as generateClick } from './buttonSlice';
import {
    change as changeURL,
    previousUrl,
    nextUrl,
    setImgSentence,
} from './imageSlice';
import { postSentence } from '../api';

// Template
export const onFeatureChange = (dispatch, feature, value) => {
    dispatch(changeFeature({ feature: feature, value: value }));
};

// Open description
export const onDescriptionChange = (dispatch, value) => {
    dispatch(changeDescription(value));
};

// Tabs
export const onTabChange = (dispatch, value) => {
    dispatch(changeTab(value));

    // Reset prompt
    dispatch(resetFeatures());
    dispatch(resetDescription());
};

// Buttons
export const onGenerateClick = (dispatch, sentence) => {
    dispatch(generateClick({ button: 'generate' }));
    // TODO: catch possible error on API communication

    // TODO: remove below
    // Mocked response to check loading screen
    postSentence().then((res) => {
        setTimeout(() => {
            dispatch(generateClick({ button: 'generate' }));
            setImageUrl(dispatch, [...res, ...res], false);
            setImageSentence(dispatch, sentence);
        }, 2000);
    });
    // TODO: remove above

    // TODO: uncomment below
    // Real response
    // postSentence().then((res) => {
    //     dispatch(generateClick({ button: 'generate' }));
    //     setImageUrl(dispatch, res[0].url);
    // });
    // TODO: uncomment above
};

// Image
export const setImageUrl = (dispatch, url, error) => {
    dispatch(changeURL({ url: url, error: error }));
};

export const setImageSentence = (dispatch, sentence) => {
    dispatch(setImgSentence(sentence));
};

export const changeSelectedImage = (dispatch, direction) => {
    if (direction < 0) {
        dispatch(previousUrl());
    } else if (direction > 0) {
        dispatch(nextUrl());
    }
};
