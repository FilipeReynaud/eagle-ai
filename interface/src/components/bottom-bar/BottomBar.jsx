import React from 'react';

import styles from './BottomBar.module.css';

export default function BottomBar() {
    return (
        <div className={styles.container}>
            <span className={styles.title}>
                Eagle<i>AI</i>
            </span>
        </div>
    );
}
