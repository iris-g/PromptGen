import React from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const ThemeItemList = ({ items, onItemSelect }) => {
    return (
        <List component="div" disablePadding>
            {items.map((item, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton onClick={() => onItemSelect(item)}>
                        <ListItemText primary={item} />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default ThemeItemList;