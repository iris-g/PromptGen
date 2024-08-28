import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const SideMenu = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: { xs: 240, sm: 280 },  // Increased width
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: { xs: 240, sm: 280 },  // Increased width
          boxSizing: 'border-box',
          backgroundColor: '#04021b',
          color: (theme) => theme.palette.primary.contrastText,
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 2,
          paddingRight: 2,  // Added right padding
        },
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <img 
          src={logo} 
          alt="Logo" 
          style={{ 
            width: '70%',  // Slightly increased logo size
            margin: '8px auto',
            display: 'block' 
          }} 
        />
      </Box>
      <List>
        {[
          { text: 'Home', path: '/' },
          { text: 'Image Gallery', path: '/imagegallery' },
          { text: 'About', path: '/about' },
        ].map(({ text, path }) => (
          <ListItem 
            button 
            component={Link} 
            to={path} 
            key={text}
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              color: (theme) => theme.palette.primary.contrastText,
              mb: 1,
              padding: { xs: '10px 16px', sm: '12px 20px' },  // Slightly increased padding
              borderRadius: '4px',
              fontSize: { xs: '0.9rem', sm: '1rem' },  // Slightly increased font size
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
              '&:hover': {
                backgroundColor: (theme) => theme.palette.primary.light,
                color: '#fff',
                transform: 'scale(1.05)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              },
              '&.Mui-selected': {
                backgroundColor: (theme) => theme.palette.primary.dark,
                color: '#fff',
              },
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideMenu;