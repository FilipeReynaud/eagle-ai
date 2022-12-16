import React from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// Components
import TextField from '../textfield';

// Shared
import { FEATURES, FEATURE_PLACEHOLDERS } from '../../shared/constants';
import { onFeatureChange } from '../../shared/state/actions';

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
    const form = useSelector((state) => state.form);
    const dispatch = useDispatch();

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
                        value={form[feature]}
                        onChange={(event) =>
                            onFeatureChange(
                                dispatch,
                                feature,
                                event.target.value
                            )
                        }
                    />
                </div>
            ))}
        </div>
    );
}
