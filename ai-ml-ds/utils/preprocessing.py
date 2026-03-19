import re
import unicodedata
from PIL import Image
import numpy as np

def clean_text(text: str) -> str:
    """Basic text cleaning for NLP tasks."""
    # Normalize unicode
    text = unicodedata.normalize('NFKD', text).encode('ascii', 'ignore').decode('utf-8', 'ignore')
    # Remove special characters
    text = re.sub(r'[^a-zA-z0-9\s]', '', text)
    # Lowercase and strip
    return text.lower().strip()

def resize_image(image_path: str, size=(224, 224)):
    """Resize image for deep learning models."""
    with Image.open(image_path) as img:
        img = img.resize(size)
        return np.array(img)

def normalize_tabular(df, columns):
    """Simple min-max normalization for tabular data."""
    for col in columns:
        df[col] = (df[col] - df[col].min()) / (df[col].max() - df[col].min())
    return df
