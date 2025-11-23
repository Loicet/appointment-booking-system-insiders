# app/routers/appointments_router.py
from fastapi import APIRouter, HTTPException, Depends, BackgroundTasks
from sqlmodel import Session, select
from app.database import engine
from app.models import Appointment, Doctor, User, Notification
from app.schemas import AppointmentIn, AppointmentOut
from typing import List
from app.auth import get_current_user
from app.utils import send_email_stub
from datetime import datetime, timedelta, time as dt_time

router = APIRouter(prefix="/appointments", tags=["appointments"])

@router.post("/", response_model=dict)
def book_appointment(payload: AppointmentIn, background_tasks: BackgroundTasks, user: User = Depends(get_current_user)):
    with Session(engine) as session:
        doctor = session.get(Doctor, payload.doctor_id)
        if not doctor:
            raise HTTPException(status_code=404, detail="Doctor not found")
        # parse date/time already typed by pydantic (datetime.date/time)
        conflict = session.exec(select(Appointment).where(
            Appointment.doctor_id == payload.doctor_id,
            Appointment.date == payload.date,
            Appointment.time == payload.time,
            Appointment.status == "booked"
        )).first()
        if conflict:
            raise HTTPException(status_code=409, detail="Time slot not available")
        appt = Appointment(patient_id=user.id, doctor_id=payload.doctor_id, date=payload.date, time=payload.time)
        session.add(appt)
        session.commit()
        session.refresh(appt)
        # schedule background sending of confirmation email (stub)
        background_tasks.add_task(send_email_stub, user.email, "Appointment Confirmed", f"Your appointment with {doctor.name} on {payload.date} at {payload.time} is confirmed.")
        # create notification record
        note = Notification(appointment_id=appt.id, message=f"Appointment created for {payload.date} {payload.time}")
        session.add(note)
        session.commit()
        return {"message":"booked", "appointment_id": appt.id}

@router.get("/me", response_model=List[AppointmentOut])
def my_appointments(user: User = Depends(get_current_user)):
    with Session(engine) as session:
        apps = session.exec(select(Appointment).where(Appointment.patient_id == user.id)).all()
        return apps

@router.delete("/{appointment_id}")
def cancel_appointment(appointment_id: int, user: User = Depends(get_current_user)):
    with Session(engine) as session:
        appt = session.get(Appointment, appointment_id)
        if not appt:
            raise HTTPException(status_code=404, detail="Not found")
        if appt.patient_id != user.id and user.role != "admin":
            raise HTTPException(status_code=403, detail="Not authorized")
        appt.status = "cancelled"
        session.add(appt)
        session.commit()
        return {"message": "cancelled"}
