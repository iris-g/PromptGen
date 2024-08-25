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
        width: { xs: 200, sm: 240 },
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: { xs: 200, sm: 240 },
          boxSizing: 'border-box',
          backgroundColor: '#04021b', // Sidebar background color
          color: (theme) => theme.palette.primary.contrastText,
          paddingTop: 2,
          paddingBottom: 2,
        },
      }}
    >
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <img 
          src={logo} 
          alt="Logo" 
          style={{ 
            width: '60%',  
            margin: '4px auto',
            display: 'block' 
          }} 
        />
      </Box>
      <List>
        {['Home', 'ImageGallery', 'About', 'Contact'].map((text, index) => (
          <ListItem 
            button 
            component={Link} 
            to={`/${text.toLowerCase()}`} 
            key={text}
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              color: (theme) => theme.palette.primary.contrastText,
              mb: 1,
              padding: { xs: '8px 16px', sm: '10px 20px' },
              borderRadius: '4px',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease', // Smooth transition effects
              '&:hover': {
                backgroundColor: (theme) => theme.palette.primary.light,
                color: '#fff',
                transform: 'scale(1.05)', // Slight scale-up effect
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', // Shadow effect for depth
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
