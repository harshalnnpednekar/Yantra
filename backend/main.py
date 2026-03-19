import time
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded

from routes import auth, users, dashboard, ws
from database import engine, Base

# Rate Limiter Setup
limiter = Limiter(key_func=get_remote_address)
app = FastAPI(
    title="Yantra Engine API",
    description="High-performance backend for the Yantra Hackathon Kit",
    version="1.0.0"
)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request Timing Middleware
@app.middleware("http")
async def add_process_time_header(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response

# Root Health Check
@app.get("/health")
async def health_check():
    return {
        "status": "online",
        "engine": "Yantra",
        "uptime": "100%",
        "version": "1.0.0"
    }

# Mount Routers
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(dashboard.router, prefix="/dashboard", tags=["Dashboard"])
app.include_router(ws.router, tags=["WebSockets"])

# Database Initialization (for development ease)
@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        # Create all tables if they don't exist
        # In production, use Alembic migrations instead
        await conn.run_sync(Base.metadata.create_all)
