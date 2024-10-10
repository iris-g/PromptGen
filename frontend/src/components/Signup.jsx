import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Tooltip } from '@mui/material';
import Header from './Header.jsx';
import logo from '../assets/logo.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here (e.g., API call)
    console.log('Signup Data:', formData);
  };

  return (
    <>
      {/* Title Spanning Full Width */}
      <Header logo={logo} />


 {/* Benefits Text */}
 <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: 3,
        }}
      >
        <Typography 
          variant="subtitle1" 
          sx={{ 
            color: '#ffffff', 
            textAlign: 'center', 
            maxWidth: '600px',
            lineHeight: 1.6,
          }}
        >
          Sign up to save your custom prompts, view your prompt history, 
          organize your favorite prompts, and collaborate with others to 
          create stunning imagery. Take your MidJourney experience to the next level!
        </Typography>
      </Box>


      {/* Sign Up Form in a Separate Box */}
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 2,
            padding: 3,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: 'transparent', // No background color to match the style
          }}
        >
          {/* Differentiated "Sign Up" text */}
          <Typography 
            variant="h5" 
            component="h2" 
            sx={{ 
              color: '#00A2FF', 
              marginBottom: 3,
              fontStyle: 'italic', 
              textAlign: 'center',
              fontWeight: 'medium',
            }}
          >
            Sign Up
          </Typography>

          {/* Sign Up Form */}
          <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              sx={{ 
                backgroundColor: '#fff', 
                borderRadius: '5px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#00A2FF',
                  },
                  '&:hover fieldset': {
                    borderColor: '#008CDB',
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ 
                backgroundColor: '#fff', 
                borderRadius: '5px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#00A2FF',
                  },
                  '&:hover fieldset': {
                    borderColor: '#008CDB',
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              sx={{ 
                backgroundColor: '#fff', 
                borderRadius: '5px',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#00A2FF',
                  },
                  '&:hover fieldset': {
                    borderColor: '#008CDB',
                  },
                },
              }}
            />
            
            {/* Submit Button */}
            <Tooltip title="Create your account" arrow>
              <Button 
                type="submit"
                variant="contained"
                sx={{
                  marginTop: 3,
                  backgroundColor: '#00A2FF',
                  color: '#ffffff',
                  borderRadius: '25px',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#008CDB',
                  },
                }}
                fullWidth
              >
                Sign Up
              </Button>
            </Tooltip>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Signup;