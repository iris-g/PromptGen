import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import image1 from '../assets/gallery/1.png';
import image2 from '../assets/gallery/2.png';
import image3 from '../assets/gallery/3.png';
import image4 from '../assets/gallery/4.png';
import image5 from '../assets/gallery/5.png';
import image6 from '../assets/gallery/6.png';
import image7 from '../assets/gallery/7.png';
import image8 from '../assets/gallery/8.png';
import image9 from '../assets/gallery/9.png';
import image10 from '../assets/gallery/10.png';
import image11 from '../assets/gallery/11.png';
import image12 from '../assets/gallery/12.png';
import image13 from '../assets/gallery/13.png';
import image14 from '../assets/gallery/14.png';

// Array of image objects
const images = [
  { id: 1, src: image1, alt: 'Image 1' },
  { id: 2, src: image2, alt: 'Image 2' },
  { id: 3, src: image3, alt: 'Image 3' },
  { id: 4, src: image4, alt: 'Image 4' },
  { id: 5, src: image5, alt: 'Image 5' },
  { id: 6, src: image6, alt: 'Image 6' },
  { id: 7, src: image7, alt: 'Image 7' },
  { id: 8, src: image8, alt: 'Image 8' },
  { id: 9, src: image9, alt: 'Image 9' },
  { id: 10, src: image10, alt: 'Image 10' },
  { id: 11, src: image11, alt: 'Image 11' },
  { id: 12, src: image12, alt: 'Image 12' },
  { id: 13, src: image13, alt: 'Image 13' },
  { id: 14, src: image14, alt: 'Image 14' },
];

const ImageGallery = () => {
  return (
    <Carousel>
      {images.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  return (
    <Paper>
      <img src={item.src} alt={item.alt} style={{ width: '100%', height: 'auto' }} />
      <Button className="CheckButton">
        Check it out!
      </Button>
    </Paper>
  );
}


export default ImageGallery;