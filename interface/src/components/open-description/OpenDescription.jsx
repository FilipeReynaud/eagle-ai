import React from 'react';

// Components
import TextField from '../textfield';

// Styles
import styles from './OpenDescription.module.css';

// Shared
import { OPEN_DESCRIPTION_PLACEHOLDER } from '../../shared/constants';

export default function OpenDescription() {
    return (
        <div className={styles.container}>
            <TextField
                id="open-description-textfield"
                variant="outlined"
                placeholder={OPEN_DESCRIPTION_PLACEHOLDER}
                multiline
                rows={8}
            />
        </div>
    );
}
