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
  Typography,
  Switch,
  FormControlLabel,
  Tooltip
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ParametersAccordion = ({ state, handleFieldChange, handleSwitchChange }) => {
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
            backgroundColor: '#0c0829',
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
            <Tooltip title="Adjust the strength of Midjourney's default aesthetic style">
              <TextField
                label="Stylize"
                value={state.stylize}
                onChange={handleFieldChange('stylize')}
                placeholder="e.g., 1000"
                variant="outlined"
                fullWidth
                className="text-field"
                type="number"
                inputProps={{ min: 0, max: 1000 }}
              />
            </Tooltip>
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
            <Tooltip title="Explore unusual aesthetics (0-3000)">
              <TextField
                label="Weird"
                value={state.weird}
                onChange={handleFieldChange('weird')}
                placeholder="e.g., 1000"
                variant="outlined"
                fullWidth
                className="text-field"
                type="number"
                inputProps={{ min: 0, max: 3000 }}
              />
            </Tooltip>
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
                <MenuItem value="6">6</MenuItem>
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
          
          <Tooltip title="Increase variety in results (0-100)">
            <TextField
              label="Chaos"
              type="number"
              value={state.chaos}
              onChange={handleFieldChange('chaos')}
              placeholder="0-100"
              variant="outlined"
              fullWidth
              className="text-field"
              inputProps={{ min: 0, max: 100 }}
            />
          </Tooltip>
          
          <FormControl fullWidth className="text-field">
            <InputLabel id="style-select-label">Style</InputLabel>
            <Select
              labelId="style-select-label"
              value={state.style}
              onChange={handleFieldChange('style')}
              label="Style"
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="raw">Raw</MenuItem>
              <MenuItem value="random">Random</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth className="text-field">
            <InputLabel id="quality-select-label">Quality</InputLabel>
            <Select
              labelId="quality-select-label"
              value={state.quality}
              onChange={handleFieldChange('quality')}
              label="Quality"
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="0.25">0.25</MenuItem>
              <MenuItem value="0.5">0.5</MenuItem>
              <MenuItem value="1">1</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Seed"
            type="number"
            value={state.seed}
            onChange={handleFieldChange('seed')}
            placeholder="0-4294967295"
            variant="outlined"
            fullWidth
            className="text-field"
            inputProps={{ min: 0, max: 4294967295 }}
          />

          <TextField
            label="Stop"
            type="number"
            value={state.stop}
            onChange={handleFieldChange('stop')}
            placeholder="10-100"
            variant="outlined"
            fullWidth
            className="text-field"
            inputProps={{ min: 10, max: 100 }}
          />

          <Tooltip title="Generate images that can be used as repeating tiles">
            <FormControlLabel
              control={
                <Switch
                  checked={state.tile}
                  onChange={handleSwitchChange('tile')}
                  name="tile"
                  color="primary"
                />
              }
              label="Tile"
            />
          </Tooltip>

          <Tooltip title="Set image prompt weight relative to text (0-2)">
            <TextField
              label="Image Weight"
              type="number"
              value={state.imageWeight}
              onChange={handleFieldChange('imageWeight')}
              placeholder="0-2"
              variant="outlined"
              fullWidth
              className="text-field"
              inputProps={{ step: 0.1, min: 0, max: 2 }}
            />
          </Tooltip>

          <FormControl fullWidth className="text-field">
            <InputLabel id="niji-select-label">Niji</InputLabel>
            <Select
              labelId="niji-select-label"
              value={state.niji}
              onChange={handleFieldChange('niji')}
              label="Niji"
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
            </Select>
          </FormControl>

          <Tooltip title="Create multiple jobs from a single prompt (1-40)">
            <TextField
              label="Repeat"
              type="number"
              value={state.repeat}
              onChange={handleFieldChange('repeat')}
              placeholder="1-40"
              variant="outlined"
              fullWidth
              className="text-field"
              inputProps={{ min: 1, max: 40 }}
            />
          </Tooltip>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default ParametersAccordion;