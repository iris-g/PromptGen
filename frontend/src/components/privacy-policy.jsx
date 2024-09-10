import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ color: 'white', my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom color="inherit">
          Unofficial Privacy Policy
        </Typography>

        {/* ... (previous sections remain unchanged) ... */}

        <Typography variant="h6" gutterBottom color="inherit">
          Intended Use
        </Typography>
        <Typography paragraph color="inherit">
          This application is designed for creating art prompts to be used with AI art generation tools. We hope you'll use it to explore your creativity and produce unique artwork.
        </Typography>

        <Typography variant="h6" gutterBottom color="inherit">
          Use of Artist Names
        </Typography>
        <Typography paragraph color="inherit">
          Our application may include references to various artists' names or styles as part of the prompt generation process. These references are provided solely for educational and inspirational purposes, to help users explore different artistic styles and techniques. We do not claim any affiliation with, endorsement by, or connection to these artists. The use of an artist's name or style in a prompt does not imply that the resulting artwork is by or associated with that artist.
        </Typography>
        <Typography paragraph color="inherit">
          Users are reminded that when creating and sharing AI-generated artwork, they should be clear about the nature of the work and avoid implying that it was created by or associated with any particular artist mentioned in the prompt. We encourage users to develop their own unique artistic voice while respecting the intellectual property and moral rights of other artists.
        </Typography>

        {/* ... (remaining sections unchanged) ... */}

        <Typography paragraph color="inherit">
          Remember, the goal of this application is to assist in creating great AI-generated art. We hope you enjoy using it and find it valuable in your creative process.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;