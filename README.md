# ⚙️ YANTRA: The High-Performance Hackathon Engine

**Yantra** is an elite, multi-modular orchestration engine designed to empower developers to dominate 24-48 hour hackathons. By abstracting away complex infrastructure setup, Yantra provides a production-ready foundation for AI, Blockchain, and Full-Stack applications, ensuring your team can focus exclusively on innovation and problem-solving.

---

## 🏛️ The Architects

Yantra was conceptualized and engineered by the following visionary leads from **Team Bharat Bytes**:

| Architect | Technical Specialization |
| :--- | :--- |
| **Shri. Harshal Pednekar** | AI, ML, Data Science, Data Analytics, NLP, Cyber Security |
| **Shri. Ruturaj Rajwade** | Frontend Development, UI/UX and Git/ Github |
| **Shri. Vedang Mendhurwar** | Backend Development and Database Management |

---

## 💎 Core Features & Highlights

*   **⚡ Friction-less Velocity**: Zero-config API proxies between Frontend, Backend, and AI modules.
*   **🧩 Modular Microservices**: Independently runnable modules with isolated dependency management.
*   **🎨 Premium UI System**: Tailored dark-mode aesthetic with **Syne** & **Inter** typography.
*   **🔐 Advanced Security**: JWT identity management, AES-256 data encryption, and network scanning tools.
*   **🤖 Production AI Inference**: Dedicated FastAPI worker for high-frequency model prediction.
*   **⛓️ Web3 Ready**: Solidity 0.8.20 smart contracts and Web3.py integration for on-chain logic.

---

## 📁 Project Structure

```text
Yantra/
├── frontend/                   # React + Vite + Tailwind (Premium UI)
│   ├── src/                    # Components, Pages, Hooks, Assets
│   ├── index.html              # Entry point
│   ├── package.json            # Dependencies & Scripts
│   ├── tailwind.config.js      # CSS Framework configuration
│   ├── vite.config.js          # Proxy & Build configuration
│   └── .env.example            # Environment template
├── backend/                    # Unified Plug-and-Play Backend
│   ├── database/               # Database Connectors
│   │   ├── mongodb/           # MongoDB (NoSQL) logic
│   │   ├── mysql/             # MySQL (SQL) logic
│   │   └── postgres/          # PostgreSQL (SQL) logic
│   ├── frameworks/             # Logic Engines
│   │   ├── django/            # Django (Full-stack)
│   │   ├── fastapi/           # FastAPI (Async)
│   │   └── flask/             # Flask (Lightweight)
│   ├── README.md               # Backend choice guide
│   └── requirements.txt        # All-in-one backend dependencies
├── ai-ml-ds/                   # AI Inference & Data Science Research
│   ├── api/                    # FastAPI inference server
│   ├── models/                 # Pre-configured classifiers
│   ├── notebooks/              # EDA and training labs
│   ├── utils/                  # Signal processing & math helpers
│   ├── data/                   # Sample datasets
│   └── requirements.txt        # AI-specific dependencies
├── cybersec-blockchain/        # Trust Layers & Hardening
│   ├── contracts/              # Solidity (Token, Voting)
│   ├── scripts/                # Deployment and migration scripts
│   ├── security/               # Scanner and Encryption core
│   └── utils/                  # Web3 wallet management
└── README.md                   # The Master Playbook
```

---

## 🏗️ Technical Architecture Overview

### 🌐 Module 1: The UI/UX Powerhouse (`frontend/`)
A high-performance "Single Page Application" (SPA) built for visual impact.
*   **Framework**: React 18 + Vite for sub-100ms Hot Module Replacement (HMR).
*   **Communication**: Axios with secure interceptors for automated JWT injection.
*   **State**: `Zustand` for authentication and `@tanstack/react-query` for server-side synchronization.

### ⚙️ Module 2: The Logic Orchestrator (`backend/`)
Choose your weapon: **FastAPI**, **Flask**, or **Django**.
*   **Multi-Framework Support**: All three engines come with pre-configured JWT Auth and CORS.
*   **Persistence Handshake**: Pluggable connectors for PostgreSQL (SQLAlchemy), MongoDB (PyMongo), and MySQL.
*   **Real-time Ready**: Integrated logic for event-driven updates across all engines.

### 🤖 Module 3: Intelligence & Analysis (`ai-ml-ds/`)
A dedicated node for data science research and production-grade model serving.
*   **Serving Layer**: Independent worker node (Port 8001) for model inference.
*   **AI Stack**: Integrated support for HuggingFace Transformers, PyTorch, and Scikit-learn.
*   **Notebooks**: Pre-configured EDA (Exploratory Data Analysis) environment for rapid data exploration.

### 🔐 Module 4: CyberSec & Blockchain Ecosystem (`cybersec-blockchain/`)
The trust and security layer for decentralized and hardened applications.
*   **Smart Contracts**: Production-ready Solidity contracts for Tokens (ERC-20) and Voting.
*   **Encryption**: Enterprise-grade AES-256 implementation for secure internal messaging.
*   **Audit Tools**: Network security scanner and header validation utilities for application hardening.

---

## 🔗 Integration Guide (Handshakes)

*   **Client to Engine**: The Frontend talks to the Backend via `/api` (Proxied in `vite.config.js`).
*   **Backend to AI**: The Backend can call the AI Service via `AI_SERVICE_URL=http://localhost:8001`.
*   **Real-time Alerts**: Use the WebSocket hook in the Dashboard to push live events from the Backend to the UI instantly.

---

## 🛠️ Unified Plug-and-Play Architecture

Yantra provides a unique, decoupled backend structure in the `backend/` folder. You can pair any Framework with any Database engine based on your project needs. Refer to `backend/README.md` for detailed linking instructions.

### 🌐 High-Performance Frameworks (`backend/frameworks/`)
*   **FastAPI**: For high-concurrency, async operations, and auto-generated Swagger docs.
*   **Flask**: For lightweight, rapid prototyping and massive flexibility.
*   **Django**: For "Batteries-Included" development with a powerful built-in Admin.

### 🗄️ Scalable Database Engines (`backend/database/`)
*   **PostgreSQL**: Reliable, atomic, and advanced relational data management.
*   **MongoDB**: Flexible, NoSQL schema-less storage for rapid iteration.
*   **MySQL**: Enterprise-standard relational data storage.

---

## 📖 Guidance: Hackathon Playbook

### 1. Project Type: AI & Machine Learning Heavy
*   **Workflow**: Focus 90% of your effort in `ai-ml-ds/`. Use the pre-configured FastAPI service (Port 8001) to serve your model predictions.
*   **Data**: Drop your datasets into `ai-ml-ds/data/` and use the `EDA.ipynb` to quickly gain insights and plot distributions.
*   **Integration**: Use the `ai-ml-ds/api/main.py` to bridge your high-level Python logic with the rest of the stack via REST.

### 2. Project Type: Full-Stack Web App (SaaS)
*   **Workflow**: Focus on the `frontend/` and `backend/` handshake. Use the `api` routes in your chosen framework to define your core data entities.
*   **Persistence**: Ensure you have the appropriate database (PostgreSQL/MongoDB/MySQL) running locally.
*   **UI/UX**: Leverage the premium design system in `frontend/src/index.css` for instant aesthetic points during judging.

### 3. Project Type: Cyber Security & Blockchain
*   **Workflow**: Utilize the `cybersec-blockchain/` module for smart contract deployments and security scanning.
*   **Security**: Implement the AES-256 utility in your data pipeline to demonstrate encryption-at-rest.
*   **Ledger**: Use the `Token.sol` and `Voting.sol` contracts as foundational pieces for decentralization.

---

## 📥 Getting the Toolkit (GitHub Flow)

Follow these steps to correctly initialize the project for your team:

### 1. Fork the Repository
Click the **Fork** button at the top right of this page to create your own copy of the Yantra Engine under your account.

### 2. Clone Your Fork
Open your terminal and clone your newly created repository:
```bash
git clone https://github.com/YOUR_USERNAME/Yantra.git
cd Yantra
```

### 3. Team Collaboration (Recommended)
During a hackathon, we recommend creating a feature branch for each module to avoid conflicts:
```bash
git checkout -b feature/frontend-setup
git checkout -b feature/backend-logic
git checkout -b feature/ai-integration
```

### 4. Direct ZIP Download (Alternative)
If you don't want to use Git, simply click **Code (Green Button) > Download ZIP** and extract the contents to your development directory.

---

## 🚀 Step-by-Step Implementation Guide

Follow these steps to go from "Zero" to a "Live MVP" in under an hour:

### Step 1: Initialize Data Services
Before touching the code, ensure you have **PostgreSQL** and **Redis** installed and running on your local machine.
*   **Postgres**: Create a database named `yantra_db`.
*   **Redis**: Ensure the server is listening for connections.

### Step 2: Initialize the Engine (Backend)
Navigate to `backend/`, install dependencies, and start your chosen framework.

**For FastAPI**:
```bash
cd backend/frameworks/fastapi
pip install -r ../../requirements.txt
uvicorn main:app --reload
```

**For Flask**:
```bash
cd backend/frameworks/flask
pip install -r ../../requirements.txt
python app.py
```

**For Django**:
```bash
cd backend/frameworks/django
pip install -r ../../requirements.txt
python manage.py runserver
```

*Verification: Visit `http://localhost:8000`. If you see a health check or success message, the heart of Yantra is beating.*

### Step 3: Launch the Command Center (Frontend)
Open a new terminal, navigate to `frontend/`, and boot the dev server.
```bash
cd frontend
npm install
npm run dev
```
*Verification: Visit `http://localhost:3000`. You should see the Yantra Landing Page. Try logging in with `admin@yantra.io` / `password123`.*

### Step 4: Plug in the Intelligence (AI Service)
If your project requires ML, start the dedicated inference server.
```bash
cd ai-ml-ds
pip install -r requirements.txt
uvicorn api.main:app --reload --port 8001
```
*Verification: Visit `http://localhost:8001/docs`. The AI module is now ready to receive data.*

### Step 5: Customize and Iterate
*   **Modify UI**: Go to `frontend/src/pages/Dashboard.jsx` and start adding your specific components.
*   **Add Logic**: Choose your backend framework and replace mock stats with your logic.
*   **Train AI**: Use `ai-ml-ds/notebooks/EDA.ipynb` to clean your data and update `ai-ml-ds/models/classifier.py` with your custom model.

---

*Yantra © 2026. Engineered with Focus and Precision by **Team Bharat Bytes**.*
