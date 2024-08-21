import React, { useState, useRef } from 'react';
import { Box, TextField, Container, Button, Accordion, AccordionSummary, AccordionDetails, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { debounce } from 'lodash';
import Header from './Header.jsx';
import SideMenu from './Sidemenu.jsx';
import ThemeManager from './sections/ThemeManager.jsx';
import logo from '../assets/logo.png';
import { ContentCopy } from '@mui/icons-material';

const PromptBuilder = () => {
  const [prompt, setPrompt] = useState('');
  const [customText, setCustomText] = useState('');
  const [weight, setWeight] = useState(1.0);
  const [imageURL, setImageURL] = useState('');
  const [aspectRatio, setAspectRatio] = useState('');
  const [stylize, setStylize] = useState('');
  const [remove, setRemove] = useState('');
  const [weird, setWeird] = useState('');
  const [sref, setSref] = useState('');
  const [version, setVersion] = useState('');
  const [selectedItems, setSelectedItems] = useState([]); // Initialize as an array
  const promptRef = useRef(null);

  const updatePromptDebounced = debounce((text, weight, url, ar, s, w, ref, ver, items, rem) => {
    const weightText = weight !== 1.0 ? `::${weight}` : '';
    const aspectRatioText = ar ? ` --ar ${ar}` : '';
    const stylizeText = s ? ` --s ${s}` : '';
    const remove = rem? ` --no ${rem}` : '';
    const weirdText = w ? ` --w ${w}` : '';
    const srefText = ref ? ` --sref ${ref}` : '';
    const versionText = ver ? ` --version ${ver}` : '';
    const itemsText = items && items.length > 0 ? ` ${items.join(', ')}` : ''; // Include selected items (themes)
    
    // Even if no text is provided, itemsText should still be included
    const updatedText = text ? `${text}${weightText}${itemsText}` : `${itemsText}`;
    const updatedPrompt = `${url ? `${url} ` : ''}${updatedText}${aspectRatioText}${stylizeText}${weirdText}${srefText}${versionText}${remove}`;
    
    setPrompt(updatedPrompt.trim());
}, 300);
const handleCustomTextChange = (event) => {
  const newText = event.target.value;
  setCustomText(newText);
  updatePromptDebounced(newText, weight, imageURL, aspectRatio, stylize, weird, sref, version, selectedItems, remove);
};

const handleWeightChange = (event) => {
  const newWeight = event.target.value;
  setWeight(newWeight);
  updatePromptDebounced(customText, newWeight, imageURL, aspectRatio, stylize, weird, sref, version, selectedItems, remove);
};

const handleImageURLChange = (event) => {
  const newImageURL = event.target.value;
  setImageURL(newImageURL);
  updatePromptDebounced(customText, weight, newImageURL, aspectRatio, stylize, weird, sref, version, selectedItems, remove);
};

const handleAspectRatioChange = (event) => {
  const newAspectRatio = event.target.value;
  setAspectRatio(newAspectRatio);
  updatePromptDebounced(customText, weight, imageURL, newAspectRatio, stylize, weird, sref, version, selectedItems, remove);
};

const handleStylizeChange = (event) => {
  const newStylize = event.target.value;
  setStylize(newStylize);
  updatePromptDebounced(customText, weight, imageURL, aspectRatio, newStylize, weird, sref, version, selectedItems, remove);
};

const handleWeirdChange = (event) => {
  const newWeird = event.target.value;
  setWeird(newWeird);
  updatePromptDebounced(customText, weight, imageURL, aspectRatio, stylize, newWeird, sref, version, selectedItems, remove);
};

const handleSrefChange = (event) => {
  const newSref = event.target.value;
  setSref(newSref);
  updatePromptDebounced(customText, weight, imageURL, aspectRatio, stylize, weird, newSref, version, selectedItems, remove);
};

const handleVersionChange = (event) => {
  const newVersion = event.target.value;
  setVersion(newVersion);
  updatePromptDebounced(customText, weight, imageURL, aspectRatio, stylize, weird, sref, newVersion, selectedItems, remove);
};

const handleRemoveChange = (event) => {
  const newRemove = event.target.value;
  setRemove(newRemove);
  updatePromptDebounced(customText, weight, imageURL, aspectRatio, stylize, weird, sref, version, selectedItems, newRemove);
};

const handlePromptChange = (event) => {
  const newPrompt = event.target.value;
  setPrompt(newPrompt);
};

const handleItemClick = (item) => {
  const updatedItems = selectedItems.includes(item)
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];

  setSelectedItems(updatedItems);

  updatePromptDebounced(customText, weight, imageURL, aspectRatio, stylize, weird, sref, version, updatedItems, remove);
};

const copyToClipboard = () => {
  if (promptRef.current) {
      navigator.clipboard.writeText(promptRef.current.value);
  }
};

  return (
    <Box className="flex-box">
      <SideMenu />
      <Container maxWidth="md" className="container-md" sx={{ ml: 2 }}>
        <Box component="div" className="generated-prompt">
          <Header logo={logo} />
        </Box>

        <Box component="div" className="generated-prompt" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField
            value={prompt}
            onChange={handlePromptChange}
            multiline
            rows={4}
            variant="outlined"
            inputRef={promptRef}
            fullWidth
            className="text-field"
            sx={{ flexGrow: 1 }}
          />
          <Button
            variant="text"
            onClick={copyToClipboard}
            sx={{ height: '56px', backgroundColor: 'transparent', color: 'primary.main', border: '1px solid', borderColor: 'primary.main', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' } }}
            startIcon={<ContentCopy />}
          >
            Copy
          </Button>
        </Box>

        {/* Free Text and Weight Row (Outside Accordion) */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
          <Box sx={{ flex: 4 }}>
            <TextField
              label="Add a Text Block"
              value={customText}
              onChange={handleCustomTextChange}
              placeholder="e.g., A landscape, a starry night..."
              variant="outlined"
              className="text-field"
              fullWidth
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <TextField
              type="number"
              label="Weight"
              value={weight}
              className="text-field"
              onChange={handleWeightChange}
              variant="outlined"
              fullWidth
            />
          </Box>
        </Box>

        {/* Explanation (Outside Accordion) */}
        <Box sx={{ mt: 1 }}>
          <Typography variant="body2" sx={{ color: 'white' }}>
            The weight parameter adjusts the influence of the custom text in the prompt.
          </Typography>
        </Box>

        {/* Parameters Section (Inside Accordion) */}
        <Accordion sx={{ mt: 3, backgroundColor: '#04021b', borderRadius: 1, boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />}
        aria-controls="parameters-content"
        id="parameters-header"
        sx={(theme) => ({
          backgroundColor: '#04021b',
          color: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 1,
          ...(theme.expanded && {
            backgroundColor: '#282c34', // Color when expanded
          }),
        })}
      >
    <Typography variant="h6">Parameters</Typography>
  </AccordionSummary>
  <AccordionDetails sx={{ borderRadius: 1 }}>
    <Box className="flex-box" sx={{ mt: 2, gap: 2 }}>
      <Box className="text-field" sx={{ flex: 4 }}>
        <TextField
          label="Add an Image URL"
          value={imageURL}
          onChange={handleImageURLChange}
          placeholder="e.g., https://example.com/image.jpg"
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: 'rgba(255, 255, 255, 0.7)' } }}
          sx={{
            input: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
              '&.Mui-focused fieldset': { borderColor: 'rgba(255, 255, 255, 0.7)' },
            },
          }}
        />
      </Box>
      <Box className="aspect-ratio-container" sx={{ flex: 2 }}>
        <TextField
          label="Aspect Ratio (e.g., 16:9)"
          value={aspectRatio}
          onChange={handleAspectRatioChange}
          placeholder="e.g., 16:9"
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: 'rgba(255, 255, 255, 0.7)' } }}
          sx={{
            input: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
              '&.Mui-focused fieldset': { borderColor: 'rgba(255, 255, 255, 0.7)' },
            },
          }}
        />
      </Box>
      <Box className="stylize-container" sx={{ flex: 2 }}>
        <TextField
          label="Stylize (e.g., 1000)"
          value={stylize}
          onChange={handleStylizeChange}
          placeholder="e.g., 1000"
          type="number"
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: 'rgba(255, 255, 255, 0.7)' } }}
          sx={{
            input: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
              '&.Mui-focused fieldset': { borderColor: 'rgba(255, 255, 255, 0.7)' },
            },
          }}
        />
      </Box>
    </Box>

    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 2 }}>
      <Box className="weird-container" sx={{ flex: 1 }}>
        <TextField
          label="Weird (0–3000)"
          value={weird}
          onChange={handleWeirdChange}
          placeholder="e.g., 2000"
          type="number"
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: 'rgba(255, 255, 255, 0.7)' } }}
          sx={{
            input: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
              '&.Mui-focused fieldset': { borderColor: 'rgba(255, 255, 255, 0.7)' },
            },
          }}
        />
      </Box>
      <Box className="sref-container" sx={{ flex: 3 }}>
        <TextField
          label="Style Reference URL"
          value={sref}
          onChange={handleSrefChange}
          placeholder="e.g., https://example.com/style.jpg"
          variant="outlined"
          fullWidth
          InputLabelProps={{ style: { color: 'rgba(255, 255, 255, 0.7)' } }}
          sx={{
            input: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
              '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
              '&.Mui-focused fieldset': { borderColor: 'rgba(255, 255, 255, 0.7)' },
            },
          }}
        />
      </Box>
      <Box className="version-container" sx={{ flex: 1 }}>
        <FormControl fullWidth>
          <InputLabel sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>Version</InputLabel>
          <Select
            value={version}
            onChange={handleVersionChange}
            label="Version"
            variant="outlined"
            sx={{
              color: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255, 255, 255, 0.3)',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'rgba(255, 255, 255, 0.7)',
              },
            }}
          >
            {/* MenuItem options */}
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="4">4</MenuItem>
            <MenuItem value="5">5</MenuItem>
            <MenuItem value="5.0">5.0</MenuItem>
            <MenuItem value="5.1">5.1</MenuItem>
            <MenuItem value="5.2">5.2</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="6.1">6.1</MenuItem>
          </Select>
        </FormControl>
      </Box>
       {/* New Remove Field */}
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 2 }}>
        <Box className="remove-container" sx={{ flex: 3 }}>
            <TextField
                label="Remove Item"
                value={remove}
                onChange={handleRemoveChange}
                placeholder="e.g., water, trees"
                variant="outlined"
                fullWidth
                InputLabelProps={{ style: { color: 'rgba(255, 255, 255, 0.7)' } }}
                sx={{
                    input: { color: 'white' },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)' },
                        '&:hover fieldset': { borderColor: 'rgba(255, 255, 255, 0.5)' },
                        '&.Mui-focused fieldset': { borderColor: 'rgba(255, 255, 255, 0.7)' },
                    },
                }}
            />
        </Box>
    </Box>
    </Box>
  </AccordionDetails>
</Accordion>


        <Box className="theme-manager-box" sx={{ mt: 4 }}>
          <ThemeManager selectedItems={selectedItems} handleItemClick={handleItemClick} />
        </Box>
      </Container>
    </Box>
  );
};

export default PromptBuilder;
