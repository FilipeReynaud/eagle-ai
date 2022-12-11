// MUI
import Grid from '@mui/material/Grid';

// Components
import TopBar from './components/top-bar';
import BottomBar from './components/bottom-bar';
import Prompt from './components/prompt';
import PreviewPanel from './components/preview-panel';

// Styles
import styles from './App.module.css';

// Shared
import { classNames } from './shared/utils';

function App() {
    return (
        <Grid container spacing={2} className={styles.mainContainer}>
            <Grid
                item
                xs={12}
                className={classNames([
                    styles.MuiGridItem,
                    styles.MuiGridItemTop,
                ])}
            >
                <TopBar />
            </Grid>
            <Grid
                item
                xs={12}
                className={classNames([
                    styles.MuiGridItem,
                    styles.MuiGridItemMiddle,
                ])}
            >
                <Grid container spacing={1} className={styles.mainContainer}>
                    <Grid item xs={12} md={4} className={styles.MuiGridItem}>
                        <Prompt />
                    </Grid>
                    <Grid item xs={12} md={8} className={styles.MuiGridItem}>
                        <PreviewPanel />
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                xs={12}
                className={classNames([
                    styles.MuiGridItem,
                    styles.MuiGridItemBottom,
                ])}
            >
                <BottomBar />
            </Grid>
        </Grid>
    );
}

export default App;
