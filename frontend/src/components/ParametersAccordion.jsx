// ParametersAccordion.jsx
import React from 'react';
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Box, 
  TextField, 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Typography 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ParametersAccordion = ({ state, handleFieldChange }) => {
  return (
    <Accordion sx={{ mt: 3, backgroundColor: '#04021b', borderRadius: 1, boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />}
        aria-controls="parameters-content"
        id="parameters-header"
        className="accordion-summary"
        sx={(theme) => ({
          backgroundColor: '#04021b',
          color: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 1,
          '&:hover': {
            backgroundColor: '#04021b',
          },
          '&.Mui-expanded': {
            backgroundColor: '#1b2436',
          },
        })}
      >
        <Typography variant="h6">Parameters</Typography>
      </AccordionSummary>
      <AccordionDetails className="accordion-details" sx={{ borderRadius: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Add an Image URL"
            value={state.imageURL}
            onChange={handleFieldChange('imageURL')}
            placeholder="e.g., https://example.com/image.jpg"
            variant="outlined"
            fullWidth
            className="text-field"
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Aspect Ratio"
              value={state.aspectRatio}
              onChange={handleFieldChange('aspectRatio')}
              placeholder="e.g., 16:9"
              variant="outlined"
              fullWidth
              className="text-field"
            />
            <TextField
              label="Stylize"
              value={state.stylize}
              onChange={handleFieldChange('stylize')}
              placeholder="e.g., 1000"
              variant="outlined"
              fullWidth
              className="text-field"
            />
          </Box>
          <TextField
            label="Remove"
            value={state.remove}
            onChange={handleFieldChange('remove')}
            placeholder="e.g., trees, water"
            variant="outlined"
            fullWidth
            className="text-field"
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Weird"
              value={state.weird}
              onChange={handleFieldChange('weird')}
              placeholder="e.g., 1000"
              variant="outlined"
              fullWidth
              className="text-field"
            />
            <FormControl fullWidth className="text-field">
              <InputLabel id="version-select-label">Version</InputLabel>
              <Select
                labelId="version-select-label"
                value={state.version}
                onChange={handleFieldChange('version')}
                label="Version"
              >
                <MenuItem value="">None</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="5.1">5.1</MenuItem>
                <MenuItem value="5.2">5.2</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField
            label="Style Reference URL"
            value={state.sref}
            onChange={handleFieldChange('sref')}
            placeholder="e.g., https://example.com/style.jpg"
            variant="outlined"
            fullWidth
            className="text-field"
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default ParametersAccordion;