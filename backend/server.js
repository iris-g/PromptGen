require('dotenv').config();  // Load environment variables from .env at the top

const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');



const app = express();
// CORS configuration
app.use(cors({
    origin: 'http://localhost:3000', // Allow only your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: '*' // Allow all headers
  }));

app.use(express.json());

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
});

app.use('/api', routes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});