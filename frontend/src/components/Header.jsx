import React from 'react';
import { Typography, Box } from '@mui/material';

const Header = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: 3,
        mb: 4,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          background: 'linear-gradient(90deg, #00c6ff, #0072ff)', // Gradient to match the style of the logo
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 400, // Slimmer font weight
          fontSize: { xs: '2rem', sm: '2.5rem' }, 
          fontFamily: '"Roboto", sans-serif', 
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', 
          letterSpacing: '0.03em',
          transition: 'all 0.3s ease-in-out', 
          '&:hover': {
            transform: 'translateY(-3px)', // Subtle upward movement on hover
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)', // Enhanced shadow on hover
          },
        }}
      >
        Midjourney Unique Prompt Builder
      </Typography>
    </Box>
  );
};

export default Header;
