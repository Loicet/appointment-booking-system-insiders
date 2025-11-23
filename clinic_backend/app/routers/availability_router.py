# app/routers/availability_router.py
from fastapi import APIRouter, HTTPException, Depends
from sqlmodel import Session, select
from typing import List
from app.database import engine
from app.models import Availability, Doctor
from app.schemas import AvailabilityIn
from app.auth import get_current_user, require_role

router = APIRouter(prefix="/availability", tags=["availability"])

@router.post("/", response_model=AvailabilityIn)
def add_availability(payload: AvailabilityIn, doctor = Depends(get_current_user)):
    # Ensure the user is the doctor setting availability (or admin)
    if doctor.role not in ("doctor", "admin") and doctor.id != payload.doctor_id:
        raise HTTPException(status_code=403, detail="Not authorized to set availability")
    with Session(engine) as session:
        doc = session.get(Doctor, payload.doctor_id)
        if not doc:
            raise HTTPException(status_code=404, detail="Doctor not found")
        avail = Availability(doctor_id=payload.doctor_id, date=payload.date, start_time=payload.start_time, end_time=payload.end_time)
        session.add(avail)
        session.commit()
        session.refresh(avail)
        return payload

@router.get("/{doctor_id}", response_model=List[AvailabilityIn])
def get_availability(doctor_id: int):
    with Session(engine) as session:
        avails = session.exec(select(Availability).where(Availability.doctor_id == doctor_id)).all()
        return avails

