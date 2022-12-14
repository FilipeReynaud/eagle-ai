import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Styles
import styles from './InputSentence.module.css';

export default function InputSentence() {
    const sentence = useSelector((state) => state.image.imageSentence);
    return <span className={styles.input}>{sentence}</span>;
}
