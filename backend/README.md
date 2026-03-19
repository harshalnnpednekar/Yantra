# Yantra Backend

High-performance FastAPI + SQLAlchemy (Async) starter.

## 🚀 Setup & Run

1.  **Create Virtual Environment**:
    ```bash
    python -m venv venv
    source venv/bin/activate  # Windows: venv\Scripts\activate
    ```

2.  **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

3.  **Environment Variables**:
    ```bash
    cp .env.example .env
    # Edit .env with your DATABASE_URL
    ```

4.  **Launch API**:
    ```bash
    uvicorn main:app --reload --port 8000
    ```
    Swagger docs: `http://localhost:8000/docs`

## 🛠 Tech Stack
- **FastAPI**
- **SQLAlchemy 2.0 (Async)**
- **JWT Auth**
- **SlowAPI (Rate Limiting)**
- **WebSockets**
