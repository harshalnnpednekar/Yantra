from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from datetime import timedelta
from database import get_db
from services import auth_service
from utils.jwt import create_access_token, get_current_user

router = APIRouter()

@router.post("/register")
async def register(user_data: auth_service.UserCreate, db: AsyncSession = Depends(get_db)):
    db_user = await auth_service.get_user_by_email(db, email=user_data.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return await auth_service.create_user(db=db, user_data=user_data)

@router.post("/login")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: AsyncSession = Depends(get_db)):
    user = await auth_service.authenticate_user(db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer", "user": {"name": user.name, "email": user.email}}

@router.get("/me")
async def read_users_me(current_user = Depends(get_current_user)):
    return current_user
