@echo off
echo 🚀 Starting Yantra Setup...

:: Frontend Installation
echo 📦 Installing Frontend Dependencies...
cd frontend && call npm install
cd ..

:: Backend & AI/ML Virtual Environment
echo 🐍 Creating Python Virtual Environment...
python -m venv .venv

:: Activate venv and install requirements
echo 🔥 Installing Backend & AI requirements...
call .venv\Scripts\activate
pip install -r backend/requirements.txt
pip install -r ai-ml-ds/requirements.txt

echo ✅ Setup Complete! Run "npm run dev" to start all services.
pause
