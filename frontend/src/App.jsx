import React from 'react';
import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PromptBuilder from './components/PromptBuilder';
import ImageGallery from './components/ImageGallery.jsx';
import Contact from './components/Contact.jsx';
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
        <Box sx={{ display: 'flex', height: '100vh' }}>
          <SideMenu />
          <Box 
            component="main" 
            sx={{ 
              flexGrow: 1, 
              p: 2, 
              boxSizing: 'border-box',
              ml: 6, // Add margin-left for a small gap (adjust value as needed)
            }}
          >
            <Routes>
              <Route path="/" element={<PromptBuilder />} />
              <Route path="/imagegallery" element={<ImageGallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;