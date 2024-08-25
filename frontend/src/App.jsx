import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import PromptBuilder from './components/PromptBuilder';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageGallery from './components/ImageGallery.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#ff0000',
        },
        background: {
            default: '#04021b',
        },
    },
});

function App() {
    return (
      <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      
      </ThemeProvider>

       {/* Routes Section */}
       <Routes>
            <Route path="/" element={<PromptBuilder />} /> 
            <Route path="/ImageGallery" element={<ImageGallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add other routes as needed */}
          </Routes>
    </Router>

    
    );
}
export default App;