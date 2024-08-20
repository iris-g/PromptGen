import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Collapse, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const themes = [
  {
    category: 'Recursive Patterns',
    items: ['Mandelbrot Set', 'Sierpinski Triangle', 'Koch Snowflake'],
  },
  {
    category: 'Mathematical Patterns',
    items: ['Fibonacci Sequence', 'Golden Ratio', 'Lissajous Curves'],
  },
  {
    category: 'Physical Phenomena',
    items: ['Fractals', 'Oscillations', 'Chaos Theory'],
  },
  {
    category: 'Space Related',
    items: ['Galaxy Spirals', 'Star Clusters', 'Nebulae Patterns'],
  },
  {
    category: 'Geometric Shapes',
    items: ['Platonic Solids', 'Tessellations', 'Symmetry'],
  },
];

const MathematicalConcepts = ({ selectedItems, handleItemClick }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <Box sx={{ textAlign: 'left' }}> {/* Set alignment to left */}
      <Typography variant="h5" sx={{ mb: 2, color: 'white' }}>
        Experiment with Mathematical Concepts
      </Typography>

      {themes.map((theme) => (
        <Box key={theme.category} sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleCategoryClick(theme.category)}>
            <Typography variant="h6" sx={{ color: 'white', flexGrow: 1 }}>
              {theme.category}
            </Typography>
            <IconButton>
              <ExpandMoreIcon
                sx={{
                  color: 'white',
                  transform: expandedCategory === theme.category ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                }}
              />
            </IconButton>
          </Box>

          <Collapse in={expandedCategory === theme.category} timeout="auto" unmountOnExit>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {theme.items.map((item) => (
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

export default MathematicalConcepts;
