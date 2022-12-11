import React from 'react';

// MUI
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import Tooltip from '@mui/material/Tooltip';

// Styles
import { styled } from '@mui/material/styles';
import styles from './Actions.module.css';

const ActionButton = styled(IconButton)({
    backgroundColor: '#252525',
    '&:hover': {
        backgroundColor: '#252525',
    },
});

export default function Actions() {
    return (
        <div className={styles.actionsContainer}>
            <Tooltip title="Delete">
                <ActionButton aria-label="delete" size="medium">
                    <DeleteIcon
                        style={{ color: '#787A91' }}
                        fontSize="inherit"
                    />
                </ActionButton>
            </Tooltip>
            {/* Not quite this? Export the image so that the professional sketch
            artist can make the final touches. */}
            <Tooltip title="Not quite this? Export the image so that the professional sketch artist can make the final touches.">
                <ActionButton aria-label="download" size="medium">
                    <CloudDownloadIcon
                        style={{ color: '#787A91' }}
                        fontSize="inherit"
                    />
                </ActionButton>
            </Tooltip>
        </div>
    );
}
