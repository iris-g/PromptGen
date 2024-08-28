import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PromptBuilder from './components/PromptBuilder';
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

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
          <SideMenu />
          <Box 
            component="main" 
            sx={{ 
              flexGrow: 3, 
              p: { xs: 1, sm: 2, md: 3 }, // Responsive padding
              boxSizing: 'border-box',
              overflowY: 'auto', 
              ml: 0, // Remove left margin
            }}
          >
            <Routes>
              <Route path="/" element={<PromptBuilder />} />
              <Route path="/imagegallery" element={<ImageGallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;