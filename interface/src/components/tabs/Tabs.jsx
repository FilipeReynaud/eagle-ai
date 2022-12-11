import React, { useState } from 'react';

// Typing
import PropTypes from 'prop-types';

// MUI
import { default as MuiTabs } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// Styles
import styles from './Tabs.module.css';

// Shared
import { classNames } from '../../shared/utils';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            className={styles.tabPanel}
            {...other}
        >
            {value === index && children}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index, value) {
    const clxNames = [styles.MuiButtonBaseRoot];
    if (index === value) {
        clxNames.push(styles.MuiButtonBaseRootSelected);
    }

    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
        className: classNames(clxNames),
    };
}

export default function Tabs({ children }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: '#787A91',
                    marginBottom: '0.5rem',
                }}
            >
                <MuiTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Template" {...a11yProps(0, value)} />
                    <Tab label="Open Description" {...a11yProps(1, value)} />
                </MuiTabs>
            </Box>
            <TabPanel value={value} index={0}>
                {children[0]}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {children[1]}
            </TabPanel>
        </Box>
    );
}
