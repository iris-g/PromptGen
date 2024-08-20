import React, { useState } from 'react';
import { Box, Typography, Collapse, Button } from '@mui/material';
import ThemeItemList from './ThemeItemList';

const ThemeBox = ({ category, items }) => {
    const [open, setOpen] = useState(false);  // State to manage the visibility of the item list

    const handleToggle = () => {
        setOpen(!open); 
    };

    return (
        <Box sx={{
            mb: 3,
            border: '1px solid #ccc',
            borderRadius: '8px',
            p: 2,
            backgroundColor: '#f5f5f5',
            ':hover': {
                backgroundColor: '#e8e8e8',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }
        }}>
            <Typography
                variant="h6"
                onClick={handleToggle}
                sx={{ cursor: 'pointer', userSelect: 'none', fontWeight: 'bold' }}
            >
                {category}
            </Typography>
            <Collapse in={open}>
                <ThemeItemList items={items} />
            </Collapse>
        </Box>
    );
};

export default ThemeBox;