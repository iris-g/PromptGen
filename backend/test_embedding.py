import ssl
import os
import tensorflow as tf
import tensorflow_hub as hub
import certifi

def main():
    os.environ['SSL_CERT_FILE'] = certifi.where()

    # Load the Universal Sentence Encoder model
    model = hub.load("https://tfhub.dev/google/universal-sentence-encoder/4")

    # Define a sample text to embed
    sample_text = "A calm, sunny beach with palm trees"
    
    # Generate embeddings
    embeddings = model([sample_text])
    
    # Convert embeddings to a list and print
    embeddings_list = embeddings.numpy().tolist()
    
    print("Text:", sample_text)
    print("Embedding:", embeddings_list[0])

if __name__ == "__main__":
    main()
