import React from 'react';

// Styles
import styles from './InputSentence.module.css';

// Shared
import { OPEN_DESCRIPTION_PLACEHOLDER } from '../../shared/constants';

export default function InputSentence() {
    return <span className={styles.input}>{OPEN_DESCRIPTION_PLACEHOLDER}</span>;
}
