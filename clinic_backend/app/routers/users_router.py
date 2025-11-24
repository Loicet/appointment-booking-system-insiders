# app/routers/users_router.py
from fastapi import APIRouter, Depends
from app.auth import get_current_user
from app.models import User

# router = APIRouter(prefix="/users", tags=["users"])
router = APIRouter(tags=["users"])


@router.get("/me")
def me(user: User = Depends(get_current_user)):
    return {
        "id": user.id,
        "name": user.name,
        "email": user.email,
        "role": user.role
    }

