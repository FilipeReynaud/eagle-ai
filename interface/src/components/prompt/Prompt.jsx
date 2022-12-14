import React from 'react';

// Redux
import { useSelector, useDispatch } from 'react-redux';

// MUI
import Grid from '@mui/material/Grid';
import { default as Button } from '@mui/lab/LoadingButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// Components
import Tabs from '../tabs';
import Template from '../template';
import OpenDescription from '../open-description';

// Styles
import styles from './Prompt.module.css';
import { styled } from '@mui/material/styles';

// Shared
import { classNames, extractSentenceFromForm } from '../../shared/utils';
import {
    PROMPT_DESCRIPTION,
    OPEN_DESCRIPTION_PLACEHOLDER,
} from '../../shared/constants';
import { onGenerateClick } from '../../shared/state/actions';

const GenerateButton = styled(Button)({
    // backgroundColor: '#252525',
    '&:disabled': {
        backgroundColor: '#252525',
        color: 'white',
    },
});

export default function Prompt() {
    const isLoading = useSelector((state) => state.button.generate.isLoading);
    const selectedTab = useSelector((state) => state.tab.selected);
    const form = useSelector((state) => state.form);
    const description = useSelector((state) => state.description.value);

    const dispatch = useDispatch();

    const onClickInterceptor = () => {
        let sentence = null;
        if (selectedTab === 0) {
            sentence = extractSentenceFromForm(form);
        } else if (selectedTab === 1) {
            sentence = description;
        }

        if (sentence) {
            onGenerateClick(dispatch, sentence);
        }
    };

    return (
        <Grid container spacing={1} className={styles.mainContainer}>
            <Grid item xs={12} className={styles.MuiGridItem}>
                <span className={styles.title}>Prompt</span>
            </Grid>
            <Grid item xs={12} className={styles.MuiGridItem}>
                <span className={styles.description}>{PROMPT_DESCRIPTION}</span>
            </Grid>
            <Grid
                item
                xs={12}
                className={classNames([
                    styles.MuiGridItem,
                    styles.promptGridItem,
                ])}
            >
                <Tabs>
                    <Template />
                    <OpenDescription />
                </Tabs>
            </Grid>
            <Grid item xs={12} className={styles.MuiGridItemButton}>
                <GenerateButton
                    variant="contained"
                    startIcon={<AddCircleOutlineIcon />}
                    loading={isLoading}
                    onClick={onClickInterceptor}
                    loadingPosition="start"
                >
                    Generate Profile
                </GenerateButton>
            </Grid>
        </Grid>
    );
}
