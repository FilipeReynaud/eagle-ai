import React from 'react';

// Components
import TextField from '../textfield';

// Shared
import { FEATURES, FEATURE_PLACEHOLDERS } from '../../shared/constants';

// Styles
import styles from './Template.module.css';

function FeatureLabel(props) {
    const { id, label } = props;
    return (
        <span id={id} className={styles.featureLabel}>
            {label}
        </span>
    );
}

export default function Template() {
    return (
        <div className={styles.container}>
            {FEATURES.map((feature, idx) => (
                <div
                    className={styles.form}
                    id={`div-${feature}'-${idx}`}
                    key={`div-${feature}'-${idx}`}
                >
                    <FeatureLabel
                        label={feature}
                        id={`feature-${feature}'-label-${idx}`}
                        key={`feature-${feature}'-label-${idx}`}
                    />
                    <TextField
                        id={`feature-${feature}'-textfield-${idx}`}
                        key={`feature-${feature}'-textfield-${idx}`}
                        variant="outlined"
                        size="small"
                        placeholder={FEATURE_PLACEHOLDERS[feature]}
                    />
                </div>
            ))}
        </div>
    );
}
