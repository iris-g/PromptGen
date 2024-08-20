import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import collage from '../assets/collage.png'; 
const AboutSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0e0e0e',  // Dark background
        color: '#ffffff',            // White text color
        padding: '40px 20px',        // Padding around the content
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Text Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ paddingRight: { md: '20px' } }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
              Unique Prompts
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: '20px', color: '#b0b0b0' }}>
              Explore Mathematical and Physical Realms
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '30px', lineHeight: 1.7 }}>
              Dive into a world where creativity meets science. Our Prompt Builder allows you to combine concepts from 
              mathematics and physics to create truly unique visual experiences. Play with recursion, explore 
              intricate patterns, and push the boundaries of design with ideas drawn from the natural world.
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: '10px' }}>
              Start Creating
            </Button>
          </Box>
        </Grid>

        {/* Right Side - Image Gallery */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <img src={collage} alt="Art 1" style={{ width: '68%', borderRadius: '4px' }} />
           
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
