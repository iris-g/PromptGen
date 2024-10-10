import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box, Typography, Link } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PromptBuilder from './components/PromptBuilder';
import Signup from './components/Signup.jsx';
import ImageGallery from './components/ImageGallery.jsx';
import PrivacyPolicy from './components/privacy-policy.jsx';
import About from './components/About.jsx';
import SideMenu from './components/Sidemenu.jsx';

const theme = createTheme({
  palette: {
    primary: { main: '#556cd6' },
    secondary: { main: '#19857b' },
    error: { main: '#ff0000' },
    background: { default: '#04021b' },
  },
});

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        mt: 'auto',
        color: 'white',
        display: 'flex',
        justifyContent: 'left',
        gap: 2,
        alignItems: 'center',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Typography variant="body2" color="white">
        © 2024 Unique AI Prompt Generator. All rights reserved.
      </Typography>
      <div> | </div>
      <Link href="/privacy" display={'inline'} color="inherit" underline="hover">
        Privacy Policy
      </Link>
    </Box>
  );
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
          <SideMenu />
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: 'flex',
              flexDirection: 'column',
              height: '100vh',
              overflow: 'hidden',
            }}
          >
            <Box 
              component="main" 
              sx={{ 
                flexGrow: 1, 
                p: { xs: 1, sm: 2, md: 3 },
                boxSizing: 'border-box',
                overflowY: 'auto', 
              }}
            >
              <Routes>
                <Route path="/" element={<PromptBuilder />} />
                <Route path="/imagegallery" element={<ImageGallery />} />
                <Route path="/about" element={<About />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;