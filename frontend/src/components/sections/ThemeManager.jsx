import React, { useState, useEffect } from 'react';
import ThemeCategory from '../themes/ThemeCategory';
import categoriesData from '../../assets/conceptsData.json';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { Box } from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const ThemeManager = ({ selectedItems, handleItemClick }) => {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    // Load and set the themes data
    setThemes([
      {
        name: "Mathematical Concepts",
        categories: categoriesData.mathematicalConcepts,
      },{
        name:"Add details",
        categories: categoriesData.details,
      },{
        name:"Art Movemnts",
        categories: categoriesData.artMovements,
      },
      {
        name:"Scince and Tenchnology",
        categories:categoriesData.scienceAndTechnology
      },
      {
        name:"psychology And Human Experience",
        categories:categoriesData.psychologyAndHumanExperience
      },
      {
        name:"Natural Elemnts",
        categories:categoriesData.naturalElements
      }
    ]);
  }, []);

  return (
    <div>
      {themes.map((theme) => (
        <Accordion
          key={theme.name}
          sx={{ backgroundColor: '#04021b', borderRadius: 1, boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
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
              gap: 2, // Adjust the gap as needed
              justifyContent: 'flex-start', // Keep items aligned to the start
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
