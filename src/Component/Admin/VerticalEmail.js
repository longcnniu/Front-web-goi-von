import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabPanel from './VerticalTabs'
import TableOne from './Table/TableOne';
import TableTwo from './Table/TableTwo';
import TableThree from './Table/TableThree';
import TableFour from './Table/TableFour';
import TableFive from './Table/TableFive';

const VerticalEmail = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const a11yProps = (index) => {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%' }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab label="Hộp Thư 1" {...a11yProps(0)} />
                <Tab label="Hộp Thư 2" {...a11yProps(1)} />
                <Tab label="Hộp Thư 3" {...a11yProps(2)} />
                <Tab label="Hộp Thư 4" {...a11yProps(3)} />
                <Tab label="Hộp Thư 5" {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <TableOne />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TableTwo/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TableThree/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <TableFour/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <TableFive/>
            </TabPanel>
        </Box>
    )
}

export default VerticalEmail