import joblib
import os
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline

class TextClassifier:
    def __init__(self):
        self.model_path = "ai-ml-ds/models/saved/classifier.joblib"
        self.pipeline = self._load_or_init_model()

    def _load_or_init_model(self):
        if os.path.exists(self.model_path):
            return joblib.load(self.model_path)
        
        # Initialize a basic pipeline if no saved model exists
        # In a real hackathon, you'd train this on some data first
        pipeline = Pipeline([
            ('tfidf', TfidfVectorizer(max_features=1000)),
            ('clf', LogisticRegression())
        ])
        
        # Dummy fit so predict works for the boilerplate
        X_dummy = ["hello world", "this is a test", "yantra engine", "fast api"]
        y_dummy = ["greet", "test", "brand", "tech"]
        pipeline.fit(X_dummy, y_dummy)
        
        return pipeline

    def predict(self, text: str):
        return self.pipeline.predict([text])[0]

    def save(self):
        os.makedirs(os.path.dirname(self.model_path), exist_ok=True)
        joblib.dump(self.pipeline, self.model_path)
