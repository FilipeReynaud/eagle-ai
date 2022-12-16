import React from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Components
import TextField from '../textfield';

// Styles
import styles from './OpenDescription.module.css';

// Shared
import { OPEN_DESCRIPTION_PLACEHOLDER } from '../../shared/constants';
import { onDescriptionChange } from '../../shared/state/actions';

export default function OpenDescription() {
    const description = useSelector((state) => state.description.value);
    const dispatch = useDispatch();

    return (
        <div className={styles.container}>
            <TextField
                id="open-description-textfield"
                variant="outlined"
                placeholder={OPEN_DESCRIPTION_PLACEHOLDER}
                multiline
                rows={8}
                value={description}
                onChange={(event) =>
                    onDescriptionChange(dispatch, event.target.value)
                }
            />
        </div>
    );
}
