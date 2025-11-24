# app/routers/doctors_router.py
from fastapi import APIRouter, HTTPException, Depends
from sqlmodel import Session, select
from app.database import engine
from app.models import Doctor, Clinic
from app.schemas import DoctorOut
from typing import List
from app.auth import require_role, get_current_user

router = APIRouter(prefix="/doctors", tags=["doctors"])

@router.post("/", response_model=DoctorOut)
def create_doctor(payload: Doctor, admin = Depends(require_role("admin"))):
    with Session(engine) as session:
        session.add(payload)
        session.commit()
        session.refresh(payload)
        return {"id": payload.id, "name": payload.name, "specialty": payload.specialty, "clinic": payload.clinic.name if payload.clinic else None}

@router.get("/", response_model=List[DoctorOut])
def list_doctors():
    with Session(engine) as session:
        docs = session.exec(select(Doctor)).all()
        out = []
        for d in docs:
            clinic_name = None
            if d.clinic_id:
                clinic = session.get(Clinic, d.clinic_id)
                clinic_name = clinic.name if clinic else None
            out.append({"id": d.id, "name": d.name, "specialty": d.specialty, "clinic": clinic_name})
        return out

