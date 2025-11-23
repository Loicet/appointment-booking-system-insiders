# app/schemas.py
from pydantic import BaseModel, EmailStr
from typing import Optional
from pydantic import BaseModel
import datetime

# Auth
class RegisterIn(BaseModel):
    name: str
    email: EmailStr
    password: str
    role: Optional[str] = "patient"

class LoginIn(BaseModel):
    email: EmailStr
    password: str

class TokenOut(BaseModel):
    access_token: str
    token_type: str


# Doctor & clinic
class DoctorOut(BaseModel):
    id: int
    name: str
    specialty: Optional[str]
    clinic: Optional[str] = None

# Availability
class AvailabilityIn(BaseModel):
    doctor_id: int
    date: datetime.date
    start_time: datetime.time
    end_time: datetime.time

# Appointment
class AppointmentIn(BaseModel):
    doctor_id: int
    date: datetime.date
    time: datetime.time

class AppointmentOut(BaseModel):
    id: int
    patient_id: int
    doctor_id: int
    date: datetime.date
    time: datetime.time
    status: str

