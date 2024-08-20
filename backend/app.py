from flask import Flask, request, jsonify
import tensorflow as tf
import tensorflow_hub as hub

app = Flask(__name__)

# Load the Universal Sentence Encoder model
model = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")

@app.route('/transform', methods=['POST'])
def transform():
    data = request.json
    text = data.get('prompt')
    operation = data.get('operation')

    if not text or not operation:
        return jsonify({"error": "Prompt and operation are required."}), 400

    # Generate embeddings
    embeddings = model([text])
    embeddings = embeddings.numpy().tolist()[0]  # Convert to list for JSON serialization

    # Perform the transformation based on the operation
    if operation == 'invert':
        transformed_embeddings = [-x for x in embeddings]  # Example: invert the vector
    else:
        return jsonify({"error": "Unknown operation."}), 400

    # This is a placeholder for converting the transformed vector back to text
    # Implement a proper transformation to convert the embeddings back to text
    transformed_text = "Transformed text placeholder"

    return jsonify({"original": text, "transformed": transformed_text, "embeddings": transformed_embeddings})

if __name__ == '__main__':
    app.run(port=5000)
