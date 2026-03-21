#!/bin/bash

echo "🚀 Starting Yantra Setup..."

# Frontend Installation
echo "📦 Installing Frontend Dependencies..."
cd frontend && npm install
cd ..

# Backend & AI/ML Virtual Environment
echo "🐍 Creating Python Virtual Environment..."
python -m venv .venv

# Activate venv and install requirements
echo "🔥 Installing Backend & AI requirements..."
# Detect OS for activation
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    source .venv/Scripts/activate
else
    source .venv/bin/activate
fi

# Split installation (logical)
pip install -r backend/requirements.txt
pip install -r ai-ml-ds/requirements.txt

echo "✅ Setup Complete! Run 'npm run dev' to start all services."
