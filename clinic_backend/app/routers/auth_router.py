# app/routers/auth_router.py
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from app.database import engine
from app.models import User
from app.schemas import RegisterIn, LoginIn, TokenOut
from app.utils import hash_password, verify_password, create_access_token

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/register", response_model=TokenOut)
def register(payload: RegisterIn):
    with Session(engine) as session:
        existing = session.exec(select(User).where(User.email == payload.email)).first()
        if existing:
            raise HTTPException(status_code=400, detail="Email already registered")
        user = User(name=payload.name, email=payload.email, password_hash=hash_password(payload.password), role=payload.role)
        session.add(user)
        session.commit()
        session.refresh(user)
        token = create_access_token({"id": user.id, "role": user.role})
        return {"access_token": token}

@router.post("/login", response_model=TokenOut)
def login(payload: LoginIn):
    with Session(engine) as session:
        user = session.exec(select(User).where(User.email == payload.email)).first()
        if not user or not verify_password(payload.password, user.password_hash):
            raise HTTPException(status_code=401, detail="Invalid credentials")
        token = create_access_token({"id": user.id, "role": user.role})
        return {"access_token": token}
