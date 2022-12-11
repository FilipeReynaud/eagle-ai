import React from 'react';

// MUI
import { default as MuiTextField } from '@mui/material/TextField';

// Styles
import { styled } from '@mui/material/styles';

const CSSTextField = styled(MuiTextField)({
    width: '100%',
    '& .MuiOutlinedBase-root': {
        color: 'white',
    },
    '& .MuiInputBase-root': {
        // width: '70%',
        backgroundColor: '#100F18',
        color: 'white',
        '& fieldset, &:hover fieldset, &.Mui-focused fieldset': {
            borderColor: '#404258',
        },
    },
});

export default function TextField(props) {
    return <CSSTextField {...props} />;
}
