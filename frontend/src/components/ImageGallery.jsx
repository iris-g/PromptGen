import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@mui/material';
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
import image15 from '../assets/gallery/15.png';


const images = [
  { id: 1, src: image1, alt: 'Image 1', prompt: 'Lichtenberg Figures, Matisse --v 6.1' },
  { id: 2, src: image2, alt: 'Image 2', prompt: 'am_i_going_up_am_i_going_down__am_i_going_nowhere' },
  { id: 3, src: image3, alt: 'Image 3', prompt: 'samsara_vs_nirvana_66f4190b-024d-4224-abfc-1e043c059e07' },
  { id: 4, src: image4, alt: 'Image 4', prompt: 'Mattise Mathematical_Weaving,Hyperbolic_Tes_5e84e30e-b8d4-4e39-8fff-43364b8f2c61_0' },
  { id: 5, src: image5, alt: 'Image 5', prompt: 'golden_ratio_hyperbalad_--ar_23_--sref_1_2_3_5_8_13_21_8f3900e3-4926-4182-934a-a585fb74ccdd' },
  { id: 6, src: image6, alt: 'Image 6', prompt: 'golden_ratio_hyperbalad_--ar_23_--sref_1_2_3_5_8_13_21_5f7b7778-0d79-4872-bfc3-f39d4f33a248' },
  { id: 7, src: image7, alt: 'Image 7', prompt: 'golden_ratio_hyperbalad_--ar_23_--sref_1_2_3_5_8_13_21_5f7b7778-0d79-4872-bfc3-f39d4f33a248' },
  { id: 8, src: image8, alt: 'Image 8', prompt: 'An_endless_chamber_constructed_from_teal_chromatic_til_4c701802-b905-45d1-9886-26d48f2c4bc3' },
  { id: 9, src: image9, alt: 'Image 9', prompt: 'Extraterrestrial Extravaganza.' },
  { id: 10, src: image10, alt: 'Image 10', prompt: 'Fourier Transformation Laplacian Entity' },
  { id: 11, src: image11, alt: 'Image 11', prompt: 'Fantastical creatures in a whimsical tea party' },
  { id: 12, src: image12, alt: 'Image 12', prompt: 'Dana Trippe Fourier Transformation Laplacian Entity' },
  { id: 13, src: image13, alt: 'Image 13', prompt: 'recursive infrastructure of the polynomial Lagrange ro_cd89ac9f-e2b2-483b-936a-7678cf7b9df8' },
  { id: 14, src: image14, alt: 'Image 14', prompt: 'Retro-futuristic space station interior' },
  { id: 15, src: image15, alt: 'Image 15', prompt: 'Sierpinski Triangle  -v 6.1' },
];

const ImageGallery = () => {
  return (
    <Carousel
      animation="slide"
      navButtonsAlwaysVisible={true}
      fullHeightHover={false}
      navButtonsProps={{
        style: {
     
          borderRadius: 0,
        }
      }}
      indicatorContainerProps={{
        style: {
          marginTop: '20px',
        }
      }}
      indicatorIconButtonProps={{
        style: {
          color: '#1E3A8A', // Blue-900 color
        }
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: '#3B82F6', // Blue-600 color
        }
      }}
    >
      {images.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  return (
    <Paper style={{ 
      backgroundColor: '#04021b', // Slate-800 color for dark background
      boxShadow: 'none', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      height: '90vh',
      padding: '20px',
    }}>
      <img 
        src={item.src} 
        alt={item.alt} 
        style={{ 
          width: '100%', 
          height: '85%', 
          objectFit: 'contain',
          borderRadius: '8px',
          marginBottom: '10px'
        }} 
      />
      <Typography variant="body1" style={{ 
        color: 'white', 
        textAlign: 'center', 
        maxWidth: '80%',
      
        padding: '10px',
        borderRadius: '4px'
      }}>
        "{item.prompt}"
      </Typography>
    </Paper>
  );
}

export default ImageGallery;