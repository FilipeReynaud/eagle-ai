import React from 'react';

// Components
import Actions from '../actions';
import InputSentence from '../input-sentence';

// Styles
import styles from './PreviewPanel.module.css';

export default function PreviewPanel() {
    return (
        <div className={styles.previewContainer}>
            <img
                src={process.env.PUBLIC_URL + '/assets/mock_result.jpeg'}
                alt="generated result"
                className={styles.generatedImage}
            />
            <InputSentence />
            <Actions />
        </div>
    );
}
