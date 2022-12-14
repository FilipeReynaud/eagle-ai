import React from 'react';

// Redux
import { useDispatch } from 'react-redux';

// MUI
import IconButton from '@mui/material/IconButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import Tooltip from '@mui/material/Tooltip';

// Styles
import { styled } from '@mui/material/styles';
import styles from './Actions.module.css';

// Shared
import { changeSelectedImage } from '../../shared/state/actions';

const ActionButton = styled(IconButton)({
    backgroundColor: '#252525',
    '&:hover': {
        backgroundColor: '#252525',
    },
});

export default function Actions() {
    const dispatch = useDispatch();
    return (
        <div className={styles.actionsContainer}>
            <div>
                <ActionButton
                    aria-label="previous"
                    size="medium"
                    style={{ alignSelf: 'start' }}
                    onClick={() => changeSelectedImage(dispatch, -1)}
                >
                    <NavigateBeforeOutlinedIcon
                        style={{ color: '#787A91' }}
                        fontSize="inherit"
                    />
                </ActionButton>
            </div>
            <div className={styles.rightActionsContainer}>
                <Tooltip title="Not quite this? Export the image so that the professional sketch artist can make the final touches.">
                    <ActionButton aria-label="download" size="medium">
                        <CloudDownloadIcon
                            style={{ color: '#787A91' }}
                            fontSize="inherit"
                        />
                    </ActionButton>
                </Tooltip>
                <ActionButton
                    aria-label="next"
                    size="medium"
                    onClick={() => changeSelectedImage(dispatch, 1)}
                >
                    <NavigateNextOutlinedIcon
                        style={{ color: '#787A91' }}
                        fontSize="inherit"
                    />
                </ActionButton>
            </div>
        </div>
    );
}
