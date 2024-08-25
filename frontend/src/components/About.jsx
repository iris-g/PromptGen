import React from 'react';
import { Box, Grid, Typography, Button, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import { Wand2 } from 'lucide-react';
import SideMenu from './Sidemenu.jsx';
import collage from '../assets/image1.png';

const AboutSection = () => {
  const features = ['Unique Themes', 'Mathematical Concepts', 'Physical Realms', 'AR Stylize', 'Chaos Factor'];

  return (
    <Box className="flex-box" sx={{ bgcolor: '#121212', color: 'common.white', minHeight: '100vh', p: 3 }}>
      <SideMenu />
      <Grid container spacing={4} alignItems="center">
        {/* Left Side - Text Content */}
        <Grid item xs={12} md={6}>
          <Box sx={{ paddingRight: { md: '20px' } }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
              Unique Prompts
            </Typography>
            <Typography variant="h5" sx={{ marginBottom: '20px', color: 'grey.400' }}>
              Explore Mathematical and Physical Realms Through AI-Generated Art
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '30px', lineHeight: 1.7 }}>
              Dive into a world where creativity meets science. Our Unique Prompt Generator combines cutting-edge AI with a vast library of themes and mathematical concepts, allowing you to create truly extraordinary visual experiences.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
              {features.map((feature, index) => (
                <Chip key={index} label={feature} color="primary" sx={{ bgcolor: 'primary.dark' }} />
              ))}
            </Box>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>
              How It Works:
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px' }}>
              1. <strong>Image Prompts:</strong> Add image URLs to influence style and content.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '10px' }}>
              2. <strong>Text Prompts:</strong> Describe your desired image with our intuitive interface.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px' }}>
              3. <strong>Parameters:</strong> Fine-tune your creation with easy-to-use, clickable elements for aspect ratios, models, and more.
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '30px' }}>
              Our unique library of themes and mathematical concepts sets us apart. Easily combine abstract ideas, physical principles, and artistic styles with just a few clicks. The organized, clickable elements in our parameters section allow you to effortlessly add and adjust the different parameters you need for your perfect creation.
            </Typography>
            <Button 
              component={Link}
              to="/"
              variant="contained" 
              color="primary" 
              startIcon={<Wand2 />}
              sx={{ marginTop: '10px', bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}
            >
              Start Creating
            </Button>
          </Box>
        </Grid>

        {/* Right Side - Image Gallery */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <img src={collage} alt="Art Collage" style={{ width: '100%', borderRadius: '4px' }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;