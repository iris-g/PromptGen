import React, { useState, useEffect, useCallback } from 'react';
import ThemeCategory from '../themes/ThemeCategory';
import categoriesData from '../../assets/conceptsData.json';
import { Accordion, AccordionSummary, AccordionDetails, Typography, TextField, Button, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import { debounce } from 'lodash';

const ThemeManager = ({ selectedItems, handleItemClick }) => {
  const [themes, setThemes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [expandedAccordions, setExpandedAccordions] = useState({});

  useEffect(() => {
    const transformedThemes = Object.entries(categoriesData).map(([key, value]) => ({
      name: key,
      categories: value
    }));
    setThemes(transformedThemes);
  }, []);

  const debouncedSearch = useCallback(
    debounce((value) => {
      setDebouncedSearchTerm(value);
    }, 300),
    []
  );

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };

  useEffect(() => {
    // Auto-expand themes and categories with matching items
    const newExpandedState = {};
    themes.forEach(theme => {
      const hasMatch = theme.categories.some(category =>
        category.items.some(item =>
          item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
      );
      newExpandedState[theme.name] = hasMatch;
    });
    setExpandedAccordions(newExpandedState);
  }, [debouncedSearchTerm, themes]);

  const handleAccordionChange = (themeName) => (event, isExpanded) => {
    setExpandedAccordions(prev => ({ ...prev, [themeName]: isExpanded }));
  };

  const filteredThemes = themes.map(theme => ({
    ...theme,
    categories: theme.categories.map(category => ({
      ...category,
      items: category.items.filter(item => 
        item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      )
    })).filter(category => category.items.length > 0)
  })).filter(theme => theme.categories.length > 0);

  return (
    <Box sx={{ backgroundColor: '#04021b', padding: 3, borderRadius: 2 }}>
      <Typography variant="h5" sx={{ color: '#5cbfcf', mb: 2 }}>
        Search and Select Theme Items
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for theme items..."
        value={searchTerm}
        onChange={handleSearch}
        InputProps={{
          startAdornment: <SearchIcon sx={{ color: '#5cbfcf' }} />,
          sx: {
            color: 'white',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'rgba(92, 191, 207, 0.5)',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#5cbfcf',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#5cbfcf',
            },
            '&::placeholder': {
              color: 'rgba(92, 191, 207, 0.7)',
              opacity: 1,
            },
          },
        }}
        sx={{ mb: 2 }}
      />
      {filteredThemes.map((theme) => (
        <Accordion
          key={theme.name}
          expanded={expandedAccordions[theme.name]}
          onChange={handleAccordionChange(theme.name)}
          sx={{
            backgroundColor: '#04021b',
            borderRadius: 1,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            '&:not(:last-child)': { mb: 2 },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#5cbfcf' }} />}
            aria-controls={`${theme.name}-content`}
            id={`${theme.name}-header`}
            sx={{ 
              backgroundColor: '#04021b', 
              color: '#5cbfcf',
              '&.Mui-expanded': {
                backgroundColor: '#0c0829',
              }
            }}
          >
            <Typography variant="h6">{theme.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                
                gap: 2,
                justifyContent: 'flex-start',
              }}
            >
              {theme.categories.map((category) => (
                <ThemeCategory
                  key={category.category}
                  category={category.category}
                  items={category.items.map((item) => item.name)}
                  selectedItems={selectedItems}
                  handleItemClick={handleItemClick}
                  searchTerm={debouncedSearchTerm}
                />
              ))}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default ThemeManager;