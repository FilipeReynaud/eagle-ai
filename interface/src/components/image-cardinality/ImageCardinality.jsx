import React from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// MUI
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

// Styles
import { styled } from '@mui/material/styles';

// Shared
import { changeNrOfImages } from '../../shared/state/actions';

const CSSSelect = styled(Select)({
    backgroundColor: '#100F18',
    color: 'white',
    border: '1px solid #404258',
    '& .MuiOutlinedBase-root': {
        color: 'white',
        borderColor: '#404258',
    },
    '& .MuiSvgIcon-root': {
        color: 'white !important',
    },
    '.MuiInputBase-root': {
        backgroundColor: '#100F18',
        color: 'white',
        '& fieldset, &:hover fieldset, & .Mui-focused': {
            border: '1px solid #404258',
        },
    },
});

const CSSLabel = styled(FormHelperText)({
    color: 'white',
});

export default function ImageCardinality() {
    const imageCardinality = useSelector((state) => state.image.nrOfImages);
    const dispatch = useDispatch();

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="medium">
            <CSSSelect
                value={imageCardinality}
                onChange={(event) =>
                    changeNrOfImages(dispatch, event.target.value)
                }
                displayEmpty
                inputProps={{ 'aria-label': 'Number Of Images' }}
            >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={4}>4</MenuItem>
            </CSSSelect>
            <CSSLabel>Number of images</CSSLabel>
        </FormControl>
    );
}
