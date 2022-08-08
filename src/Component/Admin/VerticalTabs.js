import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const VerticalTabs = (props) => {

    const { children, value, index, ...other } = props;

    VerticalTabs.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component={"span"} variant={"body2"}>{children}</Typography>
                </Box>
            )}
        </div>
    )
}

export default VerticalTabs