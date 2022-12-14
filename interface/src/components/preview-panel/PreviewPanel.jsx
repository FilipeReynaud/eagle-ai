import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// MUI
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';

// Components
import Actions from '../actions';
import InputSentence from '../input-sentence';
import Loading from '../loading';

// Styles
import styles from './PreviewPanel.module.css';

// Shared
import { PREVIEW_PANEL_EMPTY_STATE } from '../../shared/constants';

function ImgPagination({ selected, nrOfImages }) {
    return (
        <span className={styles.pagination}>
            {selected}/{nrOfImages}
        </span>
    );
}

function EmptyState() {
    return (
        <div className={styles.previewContainer}>
            <AddPhotoAlternateOutlinedIcon
                style={{ fontSize: '5rem', color: '#787A91' }}
            />
            <span className={styles.emptyStateSpan}>
                {PREVIEW_PANEL_EMPTY_STATE}
            </span>
        </div>
    );
}

export default function PreviewPanel() {
    const url = useSelector((state) => state.image.url);
    const selectedUrl = useSelector((state) => state.image.selectedUrl);
    const isLoading = useSelector((state) => state.button.generate.isLoading);

    if ((!url || url.length === 0) && !isLoading) {
        return <EmptyState />;
    } else if (isLoading) {
        return (
            <div className={styles.previewContainer}>
                <Loading label="Generating..." />
            </div>
        );
    } else {
        return (
            <div className={styles.previewContainer}>
                <div className={styles.innerContainer}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/mock_result_${
                            selectedUrl + 1
                        }.jpeg`}
                        alt="generated result"
                        className={styles.generatedImage}
                    />
                    <InputSentence />
                    <Actions />
                    <ImgPagination
                        selected={selectedUrl + 1}
                        nrOfImages={url.length}
                    />
                </div>
            </div>
        );
    }
}
