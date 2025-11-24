
# app/auth.py
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError
from app.utils import decode_access_token
from app.database import engine
from sqlmodel import Session, select
from app.models import User

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/login")
# print("OATH2: ", oauth2_scheme)

def get_current_user(token: str = Depends(oauth2_scheme)):
    print("Received token: ", token)
    payload = decode_access_token(token)
    if payload is None:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")
    user_id = payload.get("id")
    if user_id is None:
        raise HTTPException(status_code=401, detail="Invalid token payload")
    with Session(engine) as session:
        user = session.get(User, int(user_id))
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        return user

def require_role(role: str):
    def inner(user: User = Depends(get_current_user)):
        if user.role != role:
            raise HTTPException(status_code=403, detail="Not authorized")
        return user
    return inner
