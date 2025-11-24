# app/utils.py
from passlib.context import CryptContext
from typing import Dict
from datetime import datetime, timedelta
from jose import jwt, JWTError

pwd_ctx = CryptContext(schemes=["bcrypt"], deprecated="auto")

SECRET_KEY = "change-this-secret"  # set via env var in production
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24  # 1 day

def hash_password(password: str) -> str:
    print("Unhashed password: ", password)
    # bcrypt requires the password to be <= 72 bytes
    safe_password = password[:72]
    hashed = pwd_ctx.hash(safe_password)
    print("Hashed password: ", hashed)
    return hashed

def verify_password(plain: str, hashed: str) -> bool:
    return pwd_ctx.verify(plain, hashed)

def create_access_token(data: Dict, expires_delta: int = ACCESS_TOKEN_EXPIRE_MINUTES):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=expires_delta)
    to_encode.update({"exp": expire})
    encoded = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded

def decode_access_token(token: str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        return None

# Simple email stub (replace with SendGrid/Twilio)
def send_email_stub(to_email: str, subject: str, message: str):
    print(f"[EMAIL] To: {to_email} | Subject: {subject}\n{message}\n")

