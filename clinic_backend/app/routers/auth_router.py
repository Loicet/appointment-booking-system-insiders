# app/routers/admin_router.py
from fastapi import APIRouter, Depends, HTTPException
from sqlmodel import Session, select
from app.database import engine
from app.models import User, Appointment, Doctor
from app.auth import require_role

router = APIRouter(prefix="/admin", tags=["admin"])

@router.get("/users")
def all_users(admin = Depends(require_role("admin"))):
    with Session(engine) as session:
        return session.exec(select(User)).all()

@router.get("/appointments")
def all_appointments(admin = Depends(require_role("admin"))):
    with Session(engine) as session:
        return session.exec(select(Appointment)).all()

@router.get("/stats")
def stats(admin = Depends(require_role("admin"))):
    with Session(engine) as session:
        total_users = session.exec(select(User)).count()
        total_doctors = session.exec(select(Doctor)).count()
        total_appointments = session.exec(select(Appointment)).count()
        return {"users": total_users, "doctors": total_doctors, "appointments": total_appointments}

