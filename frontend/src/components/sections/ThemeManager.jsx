import React, { useState, useEffect } from 'react';
import ThemeCategory from '../themes/ThemeCategory';
import categoriesData from '../../assets/conceptsData.json';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ThemeManager = ({ selectedItems, handleItemClick }) => {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    // Transform the categoriesData into the format we need
    const transformedThemes = Object.entries(categoriesData).map(([key, value]) => ({
      name: key,
      categories: value
    }));

    setThemes(transformedThemes);
  }, []);

  return (
    <div>
      {themes.map((theme) => (
        <Accordion
          key={theme.name}
          sx={{ 
            backgroundColor: '#04021b', 
            borderRadius: 1, 
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            '&:not(:last-child)': { mb: 2 },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />}
            aria-controls={`${theme.name}-content`}
            id={`${theme.name}-header`}
            sx={{ backgroundColor: '#04021b', color: 'rgba(255, 255, 255, 0.9)' }}
          >
            <Typography variant="h6">{theme.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'flex-start',
              }}
            >
              {theme.categories.map((category) => (
                <ThemeCategory
                  key={category.category}
                  category={category.category}
                  items={category.items.map((item) => item.name)}
                  selectedItems={selectedItems}
                  handleItemClick={handleItemClick}
                />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default ThemeManager;