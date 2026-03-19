# Yantra AI/ML/DS Service

FastAPI service for model serving (NLP, Computer Vision, Tabular).

## 🚀 Setup & Run

1.  **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

2.  **Launch Service**:
    ```bash
    # Run from this directory
    uvicorn api.main:app --reload --port 8001
    ```
    Swagger docs: `http://localhost:8001/docs`

## 🛠 Features
- **Text Classification**: Scikit-learn Logistic Regression.
- **Embeddings**: Sentence-Transformers (HuggingFace).
- **Preprocessing**: Text cleaning and image resizing utilities.
- **EDA**: Starter Jupyter notebook in `notebooks/`.
