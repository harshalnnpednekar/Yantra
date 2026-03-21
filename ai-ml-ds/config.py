import os

# Base directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Data paths
RAW_DATA_PATH = os.path.join(BASE_DIR, 'data', 'raw')
PROCESSED_DATA_PATH = os.path.join(BASE_DIR, 'data', 'processed')

# Model paths
MODEL_SAVE_PATH = os.path.join(BASE_DIR, 'models', 'artifacts')

# Training constants
RANDOM_SEED = 42
TEST_SIZE = 0.2
