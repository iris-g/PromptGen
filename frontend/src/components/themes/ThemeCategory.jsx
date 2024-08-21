import React, { useState } from 'react';
import { Box, Typography, Button, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ThemeCategory = ({ category, items, selectedItems, handleItemClick }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', flexWrap: 'wrap', gap: 2 }} onClick={handleToggle}>
        <Typography variant="h6" sx={{ color: 'white', textAlign: 'left' }}>
          {category}
        </Typography>
        <IconButton>
          <ExpandMoreIcon
            sx={{
              color: 'white',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          />
        </IconButton>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
    {items.map((item) => (
      <Button
        key={item}
        variant={selectedItems.includes(item) ? 'contained' : 'outlined'}
        color="primary"
        onClick={() => handleItemClick(item)}
        sx={{
          textTransform: 'capitalize',
          minWidth: '150px',
          transition: 'background-color 0.3s ease',
          color: 'white',
        }}
      >
        {item}
      </Button>
    ))}
  </Box>
</Collapse>

    </Box>
  );
};

export default ThemeCategory;
