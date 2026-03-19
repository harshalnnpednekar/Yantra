from sentence_transformers import SentenceTransformer
import torch

class Embedder:
    def __init__(self, model_name: str = 'all-MiniLM-L6-v2'):
        # Use CPU by default for the boilerplate, but support GPU
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.model = SentenceTransformer(model_name, device=self.device)

    def get_embeddings(self, texts: list):
        return self.model.encode(texts)
