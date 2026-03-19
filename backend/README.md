# Yantra Unified Backend

This directory contains three framework options and multiple database connectors. 
You can mix and match any combination.

## 📁 Structure

```text
backend/
├── frameworks/
│   ├── fastapi/      # FastAPI Implementation
│   ├── flask/        # Flask Implementation
│   └── django/       # Django Implementation
├── database/
│   ├── postgres/     # PostgreSQL (SQLAlchemy) logic
│   ├── mongodb/      # MongoDB (PyMongo) logic
│   └── mysql/        # MySQL (PyMySQL) logic
└── requirements.txt  # All-in-one requirements
```

## 🚀 How to Switch

1.  **Pick a Framework**: Choose a folder in `frameworks/`.
2.  **Pick a Database**: Choose a connector in `database/`.
3.  **Link them**: Update the framework's `database.py` or configuration to import the desired connector.
