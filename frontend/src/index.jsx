import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App.jsx';
import './index.css'; // Your global styles

// Get the container element
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);