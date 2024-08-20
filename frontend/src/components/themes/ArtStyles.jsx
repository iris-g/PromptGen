import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const artStyles = [
  {
    category: 'Impressionism',
    items: ['Claude Monet', 'Pierre-Auguste Renoir', 'Edgar Degas'],
  },
  {
    category: 'Surrealism',
    items: ['Salvador Dalí', 'René Magritte', 'Max Ernst'],
  },
  {
    category: 'Abstract Art',
    items: ['Wassily Kandinsky', 'Piet Mondrian', 'Jackson Pollock'],
  },
];

const ArtStyles = ({ selectedItems, handleItemClick }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2, color: 'white', textAlign: 'left' }}>
        Explore Art Styles and Artists
      </Typography>

      {artStyles.map((style) => (
        <Box key={style.category} sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleCategoryClick(style.category)}>
            <Typography variant="h6" sx={{ color: 'white', flexGrow: 1, textAlign: 'left' }}>
              {style.category}
            </Typography>
            <IconButton>
              <ExpandMoreIcon
                sx={{
                  color: 'white',
                  transform: expandedCategory === style.category ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </IconButton>
          </Box>

          <Collapse in={expandedCategory === style.category} timeout="auto" unmountOnExit>
            <Grid container spacing={2} sx={{ mt: 1, justifyContent: 'flex-start' }}> {/* Align content to the left */}
              {style.items.map((item) => (
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
      ))}
    </Box>
  );
};

export default ArtStyles;
