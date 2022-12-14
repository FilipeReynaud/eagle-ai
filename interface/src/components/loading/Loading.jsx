import React from 'react';

// Styles
import styles from './Loading.module.css';

export default function Loading({ label = 'Loading' }) {
    return (
        <>
            <div className={styles.loadingDiv}></div>
            <span className={styles.loadingSpan}>{label}</span>
        </>
    );
}
