from pymongo import MongoClient
import os

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/yantra_db")

def get_mongo_client():
    client = MongoClient(MONGO_URI)
    return client.get_default_database()
