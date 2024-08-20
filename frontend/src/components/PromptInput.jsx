import React from 'react';
import { Box, TextField } from '@mui/material';

const PromptInput = ({ prompt, setPrompt, promptRef }) => {
  return (
    <Box sx={{ mt: 2, mb: 4 }}>
      <Box
        sx={{
          backgroundColor: '#04021b',
          borderRadius: '8px',
          border: '2px solid #175fb6',
          padding: '12px',
          marginBottom: '24px',
        }}
      >
        <TextField
          fullWidth
          id="prompt-built"
          label="Generated Prompt"
          variant="outlined"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Your generated prompt will appear here."
          InputLabelProps={{ shrink: true }}
          multiline
          rows={2}
          inputRef={promptRef} // Use the ref to track cursor position
          sx={{
            color: 'white',
            fontFamily: '"Roboto", sans-serif',
            fontSize: '1rem',
            backgroundColor: 'transparent',
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': {
                borderColor: 'transparent',
              },
              '&:hover fieldset': {
                borderColor: 'transparent',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#175fb6',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default PromptInput;
