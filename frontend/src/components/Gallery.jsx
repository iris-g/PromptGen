import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from '@mui/material';
import SideMenu from './Sidemenu.jsx';
// Dynamically import all images from the gallery folder
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../assets/gallery', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(8);

  // Create items array with image paths and captions
  const items = images.map((src, index) => ({
    src,
    alt: `Gallery image ${index + 1}`,
    caption: `Image ${index + 1}`,
  }));

  const loadMoreItems = () => {
    if (itemsToShow < items.length) {
      setItemsToShow((prev) => prev + 8);
    }
  };

  useEffect(() => {
    setVisibleItems(items.slice(0, itemsToShow));
  }, [items, itemsToShow]);

  const handleScroll = () => {
    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
    if (bottom) {
      loadMoreItems();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
           <SideMenu />
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: '#fff' }}>
        Image Gallery generated with unique prompts
      </Typography>
      <Grid container spacing={2}>
        {visibleItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                '&:hover img': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '12px',
                  transition: 'transform 0.3s ease',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '0',
                  width: '100%',
                  padding: '10px',
                  background: 'rgba(0, 0, 0, 0.6)',
                  color: '#fff',
                  textAlign: 'center',
                }}
              >
                <Typography variant="subtitle1">{item.caption}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Gallery;
