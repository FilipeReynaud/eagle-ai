import React from 'react';

// MUI
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

// Components
import Tabs from '../tabs';
import Template from '../template';
import OpenDescription from '../open-description';

// Styles
import styles from './Prompt.module.css';

// Shared
import { classNames } from '../../shared/utils';
import { PROMPT_DESCRIPTION } from '../../shared/constants';

export default function Prompt() {
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
                <Button
                    variant="contained"
                    startIcon={<AddCircleOutlineIcon />}
                >
                    Generate Profile
                </Button>
            </Grid>
        </Grid>
    );
}
