const express = require('express');
const cloudinary = require('cloudinary').v2;

const router = express.Router();

cloudinary.config({
  url: process.env.CLOUDINARY_URL
});

router.get('/images', async (req, res) => {
  console.log('GET /images route hit'); // Add this line
  try {
    const result = await cloudinary.api.resources({
      type: 'upload',
      max_results: 50,
      context: true
    });

    const images = result.resources.map(img => ({
      id: img.public_id,
      url: img.secure_url,
      prompt: img.context?.custom?.prompt || 'No prompt available'
    }));

    console.log(`Fetched ${images.length} images`); // Add this line
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'Failed to fetch images' });
  }
});

module.exports = router;