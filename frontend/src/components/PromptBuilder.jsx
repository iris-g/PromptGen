import React, { useReducer, useRef, useCallback, useEffect } from 'react';
import { Box, TextField, Container, IconButton, Tooltip, FormControl, InputLabel, Select, MenuItem, Typography, Button } from '@mui/material';
import { ContentCopy, Refresh as RefreshIcon, AutoFixHigh } from '@mui/icons-material';
import { debounce } from 'lodash';
import Header from './Header.jsx';
import SideMenu from './Sidemenu.jsx';
import ThemeManager from './sections/ThemeManager.jsx';
import logo from '../assets/logo.png';
import CreativeTips from './CreativeTips.jsx';
import ParametersAccordion from './ParametersAccordion.jsx';
import { generateRandomSentence } from './RandomSentenceGenerator';

const initialState = {
  prompt: '',
  customText: '',
  weight: 1.0,
  imageURL: '',
  aspectRatio: '',
  stylize: '',
  remove: '',
  weird: '',
  sref: '',
  version: '',
  selectedItems: [],
  chaos: '',
  style: '',
};

const generatePrompt = (state) => {
  const {
    customText,
    weight,
    imageURL,
    aspectRatio,
    stylize,
    weird,
    sref,
    version,
    selectedItems,
    remove,
    chaos,
    style
  } = state;

  const weightText = weight !== 1.0 ? `::${weight}` : '';
  const aspectRatioText = aspectRatio ? ` --ar ${aspectRatio}` : '';
  const stylizeText = stylize ? ` --s ${stylize}` : '';
  const removeText = remove ? ` --no ${remove}` : '';
  const weirdText = weird ? ` --w ${weird}` : '';
  const srefText = sref ? ` --sref ${sref}` : '';
  const versionText = version ? ` --version ${version}` : '';
  const itemsText = selectedItems.length > 0 ? ` ${selectedItems.join(', ')}` : '';
  const chaosText = chaos ? ` --chaos ${chaos}` : '';
  const styleText = style ? ` --style ${style}` : '';
  
  const updatedText = customText ? `${customText}${weightText}${itemsText}` : `${itemsText}`;
  return `${imageURL ? `${imageURL} ` : ''}${updatedText}${aspectRatioText}${stylizeText}${weirdText}${srefText}${versionText}${removeText}${chaosText}${styleText}`.trim();
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.field]: action.value };
    case 'UPDATE_PROMPT':
      return { ...state, prompt: action.value };
    case 'TOGGLE_ITEM': {
      const updatedItems = state.selectedItems.includes(action.item)
        ? state.selectedItems.filter((i) => i !== action.item)
        : [...state.selectedItems, action.item];
      return { ...state, selectedItems: updatedItems };
    }
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const PromptBuilder = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const promptRef = useRef(null);

  const debouncedUpdatePrompt = useCallback(
    debounce((newState) => {
      const generatedPrompt = generatePrompt(newState);
      dispatch({ type: 'UPDATE_PROMPT', value: generatedPrompt });
    }, 300),
    []
  );

  useEffect(() => {
    debouncedUpdatePrompt(state);
  }, [state.customText, state.weight, state.imageURL, state.aspectRatio, state.stylize, state.weird, state.sref, state.version, state.selectedItems, state.remove, state.chaos, state.style]);

  const handleFieldChange = (field) => (event) => {
    dispatch({ type: 'UPDATE_FIELD', field, value: event.target.value });
  };

  const handleItemClick = (item) => {
    dispatch({ type: 'TOGGLE_ITEM', item });
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all fields? This action cannot be undone.')) {
      dispatch({ type: 'RESET' });
    }
  };

  const copyToClipboard = () => {
    if (promptRef.current) {
      navigator.clipboard.writeText(promptRef.current.value);
    }
  };

  const handleRandomSentence = () => {
    const randomSentence = generateRandomSentence();
    dispatch({ type: 'UPDATE_FIELD', field: 'customText', value: randomSentence });
    // This will trigger the normal prompt generation logic, including parameters and themes
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>

      <Container 
        maxWidth="md" 
        sx={{ 
          flexGrow: 1, 
   
          display: 'flex', 
          flexDirection: 'column' 
        }}
      >
        <Box component="div" className="generated-prompt">
          <Header logo={logo} />
        </Box>

        <CreativeTips />

        <Box component="div" className="generated-prompt" sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
          <TextField
            value={state.prompt}
            onChange={handleFieldChange('prompt')}
            multiline
            rows={4}
            variant="outlined"
            inputRef={promptRef}
            fullWidth
            className="text-field"
            sx={{ flexGrow: 1 }}
          />
          <Tooltip title="Generate Random Prompt">
            <IconButton
              onClick={handleRandomSentence}
              color="primary"
              sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } }}
            >
              <AutoFixHigh />
            </IconButton>
          </Tooltip>
          <Tooltip title="Copy to clipboard">
            <IconButton
              onClick={copyToClipboard}
              color="primary"
              sx={{ '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } }}
            >
              <ContentCopy />
            </IconButton>
          </Tooltip>
          <Tooltip title="Reset all fields">
            <IconButton
              onClick={handleReset}
              color="error"
              sx={{ '&:hover': { backgroundColor: 'rgba(255, 0, 0, 0.04)' } }}
            >
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
          <Box sx={{ flex: 4 }}>
            <TextField
              label="Add a Text Block"
              value={state.customText}
              onChange={handleFieldChange('customText')}
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
              value={state.weight}
              className="text-field"
              onChange={handleFieldChange('weight')}
              variant="outlined"
              fullWidth
            />
          </Box>
        </Box>

        <ParametersAccordion state={state} handleFieldChange={handleFieldChange} />

        <Box className="theme-manager-box" sx={{ mt: 4 }}>
          <ThemeManager selectedItems={state.selectedItems} handleItemClick={handleItemClick} />
        </Box>
      </Container>
    </Box>
  );
};

export default PromptBuilder;