const express = require('express');
const cloudinary = require('cloudinary').v2;

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

router.get('/images', async (req, res) => {
    try {
      console.log('Fetching images from Cloudinary...');
      const result = await cloudinary.api.resources({
        type: 'upload',
        max_results: 50,
        prefix: 'prompt/',
        context: true
      });
  
      if (!result || !result.resources) {
        throw new Error('No images found in Cloudinary response');
      }
  
      const images = result.resources.map(img => ({
        id: img.public_id,
        url: img.secure_url,
        prompt: img.context?.custom?.prompt || 'No prompt available'
      }));
  
      console.log('Full Cloudinary response:', JSON.stringify(result, null, 2));

      res.json(images);
    } catch (error) {
      console.error('Error fetching images:', error.message || error);
      res.status(500).json({ error: 'Failed to fetch images' });
    }
  });

module.exports = router;