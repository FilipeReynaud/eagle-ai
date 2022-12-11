import React from 'react';

// MUI
import Face5Icon from '@mui/icons-material/Face5';

// Styles
import styles from './TopBar.module.css';

export default function TopBar() {
    return (
        <div className={styles.container}>
            <Face5Icon className={styles.icon} />
            <span className={styles.title}>
                Forensic Sketch <i>AI</i>-rtist
            </span>
        </div>
    );
}
