import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Image } from 'cloudinary-react';
import { motion, useAnimation } from 'framer-motion';
import SideMenu from './Sidemenu.jsx';
<script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></script>
const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const controls = useAnimation();
  const galleryRef = useRef(null);

  useEffect(() => {
    // Fetch images from your backend or Cloudinary
    // This is a placeholder, replace with your actual fetch logic
    const fetchImages = async () => {
      const fetchedImages = [
        { id: 1, publicId: 'sample1', prompt: 'A serene landscape' },
        { id: 2, publicId: 'sample2', prompt: 'Abstract art in vibrant colors' },
        // Add more images as needed
      ];
      setImages(fetchedImages);
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const galleryTop = galleryRef.current.offsetTop;
      const galleryHeight = galleryRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollProgress = (scrollY - galleryTop + windowHeight) / (galleryHeight + windowHeight);
      controls.start({ opacity: scrollProgress, scale: 0.8 + scrollProgress * 0.2 });
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
              <Image
                cloudName="your-cloud-name" // Replace with your Cloudinary cloud name
                publicId={image.publicId}
                width="250"
                crop="fill"
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