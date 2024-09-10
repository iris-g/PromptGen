import React, { useState } from 'react';
import { Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ThemeCategory = ({ category, items, selectedItems, handleItemClick, searchTerm }) => {
  const [expanded, setExpanded] = useState(false);

  const highlightMatchingText = (text, searchTerm) => {
    if (!searchTerm) return text;
    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === searchTerm.toLowerCase() ? (
            <mark key={index} style={{ backgroundColor: 'yellow', color: 'black' }}>
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const handleChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <Accordion 
      expanded={expanded} 
      onChange={handleChange}
      sx={{
        backgroundColor: '#04021b',
        color: 'white',
        mb: 2,
        '&:before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
        aria-controls={`${category}-content`}
        id={`${category}-header`}
        sx={{ 
          backgroundColor: '#04021b', 
          color: '#00000',
          '&.Mui-expanded': {
            backgroundColor: '#0c0829',
          }
        }}
      >
        <Typography variant="h6">{category}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {items.map((item) => (
            <Button
              key={item}
              variant={selectedItems.includes(item) ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => handleItemClick(item)}
              sx={{
                textTransform: 'none',
                color: 'white',
                borderColor: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {highlightMatchingText(item, searchTerm)}
            </Button>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default ThemeCategory;