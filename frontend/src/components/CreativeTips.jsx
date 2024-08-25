import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Collapse, IconButton, Tooltip } from '@mui/material';
import { Lightbulb, CameraAlt, Palette, EmojiEvents } from '@mui/icons-material';

const CreativeTips = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ position: 'relative', mb: 2 }}>
      <Tooltip title="Click for tips" placement="right">
        <IconButton 
          onClick={toggleExpanded}
          sx={{ 
            position: 'absolute', 
            top: -20, 
            left: -20, 
            backgroundColor: '#1b2436',
            color: 'white',
            '&:hover': { backgroundColor: '#2c3e50' }
          }}
        >
          <Lightbulb />
        </IconButton>
      </Tooltip>
      <Collapse in={expanded}>
        <Paper elevation={3} sx={{ 
          p: 2, 
          backgroundColor: '#1b2436', 
          color: 'white',
          border: '1px solid #2c3e50'
        }}>
          <Typography variant="h6" sx={{ mb: 1, color: 'white' }}>Craft a Great Prompt</Typography>
          <List dense>
            <ListItem>
              <ListItemIcon>
                <Palette sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body1" color="white">Be specific and descriptive</Typography>}
                secondary={<Typography variant="body2" color="rgba(255, 255, 255, 0.7)">Draw inspiration from famous artists, photographers, or directors. Blend styles for unique results.</Typography>}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CameraAlt sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body1" color="white">Specify details</Typography>}
                secondary={<Typography variant="body2" color="rgba(255, 255, 255, 0.7)">Mention camera angles (e.g., selfie, panoramic, fish-eye), art styles, or time periods.</Typography>}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmojiEvents sx={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText 
                primary={<Typography variant="body1" color="white">Enhance quality</Typography>}
                secondary={<Typography variant="body2" color="rgba(255, 255, 255, 0.7)">Use words like 'photorealistic', 'highly detailed', 'award-winning', or 'masterpiece'.</Typography>}
              />
            </ListItem>
          </List>
          <Typography variant="body2" sx={{ fontStyle: 'italic', mt: 1, color: 'rgba(255, 255, 255, 0.9)' }}>
            Example: A hyperrealistic selfie of a cyberpunk character, in the style of Blade Runner, highly detailed, award-winning photography --ar 16:9 --s 750
          </Typography>
        </Paper>
      </Collapse>
    </Box>
  );
};

export default CreativeTips;