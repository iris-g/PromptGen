// Import necessary modules
import axios from 'axios';

// Load environment variables
const apiToken = process.env.REACT_APP_HUGGING_FACE_API_TOKEN;

// Function to make the request to the Hugging Face API
export const completeSentence = async (inputText) => {
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/your-model-name', // Replace with the specific model's URL
      {
        inputs: inputText,
      },
      {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      }
    );

    // Return the response data
    return response.data;
  } catch (error) {
    console.error('Error completing the sentence:', error);
    throw error;
  }
};
