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

## 📂 Project Structure
```text
ai-ml-ds/
├── api/                    # FastAPI inference server layer
│   └── main.py             # API entry point & routes
├── data/                   # Dataset management
│   ├── raw/                # Original, immutable data
│   ├── processed/          # Cleaned, feature-engineered data
│   └── sample_payload.json # Dummy JSON for API testing
├── models/                 # Model architectures & logic
│   ├── artifacts/          # Saved model binaries (.pkl, .pt)
│   ├── trainer.py          # Training & Evaluation logic
│   ├── predictor.py        # Generic model server wrapper
│   ├── classifier.py       # Example: NLP Text Classification
│   └── embeddings.py       # Example: Vector Embeddings
├── notebooks/              # DS/Analytics research lab
│   ├── 1_EDA_and_Analytics.ipynb
│   └── 2_Model_Training.ipynb
├── utils/                  # Utility & Helper scripts
│   ├── preprocessing.py    # Data cleaning & Scaling
│   ├── visualizer.py       # Plotting & Analytics
│   └── metrics.py          # Custom evaluation metrics
├── .env.example            # Environment variable template
├── config.py               # Centralized path & seed config
├── requirements.txt        # AI/ML-specific dependencies
└── README.md               # This Service Guide
```

## 🛠 Features
- **Traditional Machine Learning**: Support for Scikit-learn, XGBoost, and Tabular data.
- **Data Analytics**: Correlation analysis, feature importance, and visualization utilities.
- **Model Training**: Standardized `trainer.py` skeleton for reproducible experiments.
- **Inference Ready**: `Predictor` class helper for seamless integration with FastAPI.
- **Preprocessing**: Data cleaning and feature scaling stubs.
- **Notebooks**: Guided workflows for EDA (`1_EDA_and_Analytics.ipynb`) and Model Training (`2_Model_Training.ipynb`).
