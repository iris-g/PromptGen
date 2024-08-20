import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ThemeCategory = ({ category, items, selectedItems, handleItemClick }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={handleToggle}>
        <Typography variant="h6" sx={{ color: 'white', flexGrow: 1, textAlign: 'left' }}>
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
        <Grid container spacing={2} sx={{ mt: 1, justifyContent: 'flex-start' }}>
          {items.map((item) => (
            <Grid item key={item}>
              <Button
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
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </Box>
  );
};

export default ThemeCategory;
