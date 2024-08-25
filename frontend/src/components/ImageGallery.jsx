import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import SideMenu from './Sidemenu.jsx';

// Import your local images here
import image1 from '../assets/gallery/1.png';
import image2 from '../assets/gallery/2.png';
import image3 from '../assets/gallery/3.png';
// Import more images as needed

const ImageGallery = () => {
  const controls = useAnimation();
  const galleryRef = useRef(null);

  // Mock data using local images
  const images = [
    { id: 1, url: image1, prompt: 'A serene landscape' },
    { id: 2, url: image2, prompt: 'Abstract art in vibrant colors' },
    { id: 3, url: image3, prompt: 'Futuristic cityscape' },
    // Add more images as needed
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const scrollY = window.scrollY;
        const galleryTop = galleryRef.current.offsetTop;
        const galleryHeight = galleryRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        const scrollProgress = (scrollY - galleryTop + windowHeight) / (galleryHeight + windowHeight);
        controls.start({ opacity: scrollProgress, scale: 0.8 + scrollProgress * 0.2 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <Box className="flex-box">
      <SideMenu />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Generated Images Gallery
        </Typography>
        <Box ref={galleryRef} sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 3 }}>
          {images.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={controls}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              style={{ position: 'relative', overflow: 'hidden', borderRadius: '10px' }}
            >
              <img
                src={image.url}
                alt={image.prompt}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '10px',
                  background: 'rgba(0, 0, 0, 0.7)',
                  color: 'white',
                }}
              >
                <Typography variant="body2">{image.prompt}</Typography>
              </motion.div>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ImageGallery;